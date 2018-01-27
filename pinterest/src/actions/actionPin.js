import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { parsedEmail } from '../functions/reusable';
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
	NO_USER_PINS,
 	NO_PINS } from '../Constants';

firebase.initializeApp(DB_CONFIG);

// References
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// Global Vars
let uniqueId;
let userEmail;
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

export function userSignInWithFaceBook() {
	const provider = new firebase.auth.FacebookAuthProvider();
	return dispatch => auth.signInWithPopup(provider);
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
				const { uid:userId, email, photoURL } = firebaseUser;
				console.log(firebaseUser);
				uniqueId=userId
				userEmail=parsedEmail(email)//This is hoisting email at the top;
				const action = {type:LOGGED_IN, payload:true};
				const userAction = {type:GET_AUTH_INFO, payload:{userId, email, photoURL}};
				dispatch(action);
				dispatch(userAction);

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


// Login Listener
export function loginListener(cb) {
		auth.onAuthStateChanged(firebaseUser =>
			 firebaseUser
			? cb(true)
			: cb(false)
		)
	} // Login Listener


// Remove User
export function removeUser(pinKeys,email,uid=uniqueId) {
	auth.currentUser.delete().then(() => {
		for(let i = 0; i < pinKeys.length; i++) {
			database.ref('pins/' + pinKeys[i]).remove();
		}
	}).then(() => {
		database.ref('users/' + uid).remove();
		database.ref('userPins/' + uid).remove();
		database.ref('savedPin/' + uid).remove();
		database.ref(email).remove();
	}).catch((err) => console.log(err))
} //Remove User

// Remove Users Pins
export function removeAllOfUsersPins(pinKey,email,uid=uniqueId) {
	auth.currentUser.delete().then(() => {
			database.ref('pins/' + pinKey).remove();
	}).catch((err) => console.log(err))
} //Remove User Pins


// Get User Profile
export function getUserProfile(cb) {
	if(uniqueId !== null || uniqueId !== undefined) {
		database.ref('users/' + uniqueId).on('value', snapShot => {
			cb(snapShot.val());
		});
	} else {
		return '';
	}
}

// Get Users Pins
export function getUserPins(cb, email=userEmail) {
	const userPinRef = database.ref('userPins/' + email);
	userPinRef.on('value', snapShot => {
			let pins = Object.values(snapShot.val());
			let pinKey = Object.keys(snapShot.val());
			pins.map( (a,i) => a.id = pinKey[i]);
			cb(pins)
	})
} //Get for Users Pins


// Post User Profile
export function sendUserInfo(uid,first_name,last_name,gender,email,file='',avatarUrl) {
		if(file === '') {
			let avatarURL = avatarUrl; //Once user file is saved - url is outputted
			let userData = {first_name,last_name,gender,email,avatarURL,hideModule:true};
			let userProfile = {};
			database.ref('users/' + uid).set(userData)
		} else {
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
export function updateUserInfo(uid, first_name, last_name, desc='', file) {
	if(file !== '') {
		const avatarStorage = storage.ref('avatars/' + file.name).put(file);
		avatarStorage.on('state_changed', null, null, () => {
			const avatarURL = avatarStorage.snapshot.downloadURL;
			const updateFields = {first_name,last_name, desc, avatarURL};
			database.ref('users/' + uid).update(updateFields);
		});
	} else {
		const updateFields = {first_name,last_name, desc};
		database.ref('users/' + uid).update(updateFields)
	}
} // Update User Profile

// Send User Pin
export function sendUserPin(uid,date,file,desc,urlLink,first_name, last_name, avatarURL, email) {
	if(file !== '') {
		let pinStorage = storage.ref('pins/' + file.name).put(file);
		pinStorage.on('state_changed', null, null, () => {
			const pinURL = pinStorage.snapshot.downloadURL;
			const pinKey = database.ref('userPins/').child('userRef/').push().key;
			const userData = {date,pinURL, desc, urlLink, first_name, last_name, avatarURL, uid, email};
			const updateUserPin = {};
			const updatePins = {};
			const updateEmailPins = {};

			updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
			updatePins['pins/' + pinKey]=userData;
			updateEmailPins[email + '/' + pinKey] = userData;
			database.ref().update(updateUserPin);
			database.ref().update(updatePins);
			database.ref().update(updateEmailPins);
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
			const userData = {date,pinURL, desc, urlLink, first_name, last_name, avatarURL, uid};
			const updateUserPin = {};
			const updatePins = {};

			updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
			updatePins['pins/' + pinKey]=userData;
			database.ref().update(updateUserPin);
			database.ref().update(updatePins);
		});
	} else {
		const userData = {date,pinURL:firbaseImgUrl, desc, urlLink, first_name, last_name, avatarURL, uid};
		const updateUserPin = {};
		const updatePins = {};
		updateUserPin['userPins/' + uid + '/' + pinKey]=userData;
		updatePins['pins/' + pinKey]=userData;
		database.ref().update(updateUserPin);
		database.ref().update(updatePins);
	}
} //Upadate User Pin

//Delete Pin
export function deleteUserPin(uid, pinKey, email) {
	database.ref('pins/' + pinKey).remove()
	database.ref('userPins/' + uid + '/' + pinKey).remove();
	database.ref(email + '/' + pinKey).remove();
} //Delete Pin

// Get Pins
export function getPins() {
	return dispatch => {
		let action = {};
		const pinsRef = database.ref('pins/');
		pinsRef.on('value', snapShot => {
			if(snapShot.val() !== null && snapShot.val() !== undefined ){
				let snapKey = Object.keys(snapShot.val());
				let snaps = Object.values(snapShot.val());
				snaps.map( (snap,i) => snap.id = snapKey[i]);
				if(snaps) {
					action = { type:GET_PINS, payload:snaps };
					dispatch(action);
				} else {
					action = { type:FETCHING_PINS, payload:true };
					dispatch(action);
				}
			}
			else {
				dispatch({type:NO_PINS, payload:{name:"There are no pins currently"}})
			}

		})
	}
} // Get Pins

// Get Individual Pin
export function getIndividualPin(pinId, cb) {
	database.ref('pins/' + pinId).on('value', snapShot => {
		cb(snapShot.val());
	})
} //Get Individual Pin


// Get Other Users Info
export function getOtherUsersInfo(uid, cb) {
	database.ref('users/' + uid).on('value', snapShot => {
		console.log(snapShot.val());
		cb(snapShot.val())
	})
} //Get Other User's Pins


export function getUsersPins(email,cb) {
	database.ref(email).on('value', snapShot => {
		let pinId = Object.keys(snapShot.val());
		let pins = Object.values(snapShot.val());
		pins.map( (pin, i) => pin.id = pinId[i]);
		cb(pins);
	});
} // Get Other User's Pins

// Delete User's Saved Pins
export function deleteUserSavedPin(pinId, cb) {
	database.ref('savedPin/' + uniqueId + '/' + pinId).remove()
					.catch(e => console.log(e.message));
	setTimeout(cb(),1000)
}
// Delete User's Saved Pins


//Saving Pins
export function saveUsersPin(userId, otherUid, avatarURL, pinURL,firstName, lastName, desc, date) {
	const userData = {otherUid,avatarURL, pinURL,firstName, lastName, desc, date};
	let savedPinKey = database.ref('saved_pins/' + userId).push().key;
	let savedPin = {};
	savedPin['savedPin/' + userId + '/' + otherUid] = userData;
	database.ref().update(savedPin);
} //Saving Pins


// Get Saved Pins
export function getSavedPins(cb, userId=uniqueId) {
	database.ref('savedPin/' + userId).on('value', snapShot => {
		if(snapShot.val() !== null && snapShot.val() !== undefined ){
			let pinId = Object.keys(snapShot.val());
			let pins = Object.values(snapShot.val());
			pins.map((pin,i) => pin.id = pin[i]);
			cb(pins)
		} else {
			return ''
		}
	})
}
