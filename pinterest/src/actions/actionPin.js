import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { DB_CONFIG } from '../config';
import {
	GET_PINS,
	FETCHING_PINS,
	LOGGED_IN,
 	LOGGED_OUT,
	NO_ERROR_SIGN_IN,
	NO_ERROR_SIGN_UP,
 	SHOW_ERROR_SIGN_IN,
 	SHOW_ERROR_SIGN_UP,
	GET_AUTH_INFO,
 	GET_USER_PROFILE,
 	GET_USER_PINS,
	NO_USER_PINS } from '../Constants';

firebase.initializeApp(DB_CONFIG);

// References
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Global Vars
let userIdent;
let userFirst;
let userLast;

// Handling Authorization
export function createUser(email,password) {
	const promise = auth.createUserWithEmailAndPassword(email, password);
	return dispatch => promise.catch(e => {
		const action = {type:SHOW_ERROR_SIGN_UP, payload: e.message};
		dispatch(action);
	});
}

export function userSignInEmail(email, password) {
	const promise = auth.signInWithEmailAndPassword(email,password);
	return dispatch => promise.catch(e => {
		const action = {type:SHOW_ERROR_SIGN_IN, payload: e.message};
		dispatch(action);
	})
}

export function userSignInWithGoogle() {
	const provider = new firebase.auth.GoogleAuthProvider();
	return dispatch => auth.signInWithPopup(provider)
}

export function userSignOut() {
	return dispatch => {
		auth.signOut();
		const signUpError = {type:NO_ERROR_SIGN_UP, payload: ''};
		const signInError = {type:NO_ERROR_SIGN_IN, payload:''};
		dispatch(signUpError);
		dispatch(signInError);
	}
}

export function authListener() {
	return dispatch => {
		auth.onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				console.log('User is signed in');
				const { uid:userId, email } = firebaseUser;
				userIdent=userId//This is assigning userId at the top;
				const action = {type:LOGGED_IN, payload:true};
				const userAction = {type:GET_AUTH_INFO, payload:{userId, email}};
				dispatch(action);
				dispatch(userAction)
        // Listening for UserProfile information
				const userRef = database.ref('users/' + userId);
				userRef.on('value', snapShot => {
					let action = {type: GET_USER_PROFILE, payload:snapShot.val()};
					dispatch(action);
				}) // Listening for UserProfile information

				// Listening for UsersPins
				const userPinRef = database.ref('userPins/' + userId);
				userPinRef.on('value', snapShot => {
					if(snapShot.val() !== null && snapShot.val() !== undefined){
						let pins = Object.values(snapShot.val());
						let pinKey = Object.keys(snapShot.val());
						pins.map( (a,i) => a.id = pinKey[i]);
						let action = {type:GET_USER_PINS, payload:pins};
						dispatch(action);
					} else {
						let action = {type: NO_USER_PINS, payload:[]};
						dispatch(action);
					}
				}) //Listening for UsersPins
			} else {
				console.log('User not logged in');
				const action = {type:LOGGED_OUT, payload:false};
				dispatch(action);
			}
		})
	}
} // Handling Authorization






// Get Users Pins
export function getUserPins(cb, userId=userIdent) {
	const userPinRef = database.ref('userPins/' + userId);
	userPinRef.on('value', snapShot => {
			let pins = Object.values(snapShot.val());
			let pinKey = Object.keys(snapShot.val());
			pins.map( (a,i) => a.id = pinKey[i]);
			cb(pins)
	})
} //Get for Users Pins








// Post User Profile
export function sendUserInfo(uid,first_name,last_name,gender,email,file) {
		return dispatch => {
			const avatarStorage = storage.ref('avatars/' + file.name).put(file); //Save User AvatarFile
			avatarStorage.on('state_changed', null, null, () => {
				let avatarURL = avatarStorage.snapshot.downloadURL; //Once user file is saved - url is outputted
				let userData = {first_name,last_name,gender,email,avatarURL,hideModule:true};
				let userProfile = {};
				database.ref('users/' + uid).set(userData)
			});
	}
} //Post User Profile

// Update User Profile
export function updateUserInfo(uid, first_name, last_name, desc, file) {
	if(file !== '') {
		const avatarStorage = storage.ref('avatars/' + file.name).put(file);
		avatarStorage.on('state_changed', null, null, () => {
			const avatarURL = avatarStorage.snapshot.downloadURL;
			const updateFields = {first_name,last_name, desc, avatarURL};
			database.ref('users/' + uid).update(updateFields);
		});
	} else {
		const updateFields = {first_name,last_name,desc};
		database.ref('users/' + uid).update(updateFields)
	}
} // Update User Profile







// Send User Pin
export function sendUserPin(uid,date,file,desc,urlLink,first_name, last_name, avatarURL) {
	if(file !== '') {
		let pinStorage = storage.ref('pins/' + file.name).put(file);
		pinStorage.on('state_changed', null, null, () => {
			const pinURL = pinStorage.snapshot.downloadURL;
			const pinKey = database.ref('userPins/').child('userRef/').push().key;
			const userData = {date,pinURL, desc, urlLink, first_name, last_name, avatarURL};
			const updateUserPin = {};
			const updatePins = {};

			updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
			updatePins['pins/' + pinKey]=userData;
			database.ref().update(updateUserPin);
			database.ref().update(updatePins);
		});
	} else {
		return null;
	}
} //Send User Pin



// Upadate User Pin
export function updateUserPin(uid, pinKey, date,file='',desc,urlLink, firbaseImgUrl,first_name,last_name,avatarURL) {
	if(file !== '') {
		let pinStorage = storage.ref('pins/' + file.name).put(file);
		pinStorage.on('state_changed', null, null, () => {
			const pinURL = pinStorage.snapshot.downloadURL;
			const userData = {date,pinURL, desc, urlLink, first_name, last_name, avatarURL};
			const updateUserPin = {};
			const updatePins = {};

			updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
			updatePins['pins/' + pinKey]=userData;
			database.ref().update(updateUserPin);
			database.ref().update(updatePins);
		});
	} else {
		const userData = {date,pinURL:firbaseImgUrl, desc, urlLink, first_name, last_name, avatarURL};
		const updateUserPin = {};
		const updatePins = {};
		updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
		updatePins['pins/' + pinKey]=userData;
		database.ref().update(updateUserPin);
		database.ref().update(updatePins);
	}
} //Upadate User Pin

//Delete Pin
export function deleteUserPin(uid, pinKey) {
	database.ref('pins/' + pinKey).remove()
	database.ref('userPins/' + uid + '/' + pinKey).remove();
} //Delete Pin


// Get Pins
export function getPins(cb) {
	return dispatch => {
		let action = {};
		const pinsRef = database.ref('pins/');
		pinsRef.on('value', snapShot => {
			let snapKey = Object.keys(snapShot.val());
			let snaps = Object.values(snapShot.val());
			snaps.map( (snap,i) => snap.id = snapKey[i])
			if(snaps) {
				action = { type:GET_PINS, payload:snaps };
				dispatch(action);
			} else {
				action = { type:FETCHING_PINS, payload:true };
				dispatch(action);
			}

		})
	}
} // Get Pins

// Get Individual Pin
export function getIndividualPin(pinId, cb) {
	database.ref('pins/' + pinId).on('value', snapShot => {
		console.log(snapShot.val());
		cb(snapShot.val());
	})
} //Get Individual Pin
