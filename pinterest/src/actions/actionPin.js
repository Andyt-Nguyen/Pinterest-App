import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { DB_CONFIG } from '../config';
import {
	LOGGED_IN,
 	LOGGED_OUT,
	NO_ERROR_SIGN_IN,
	NO_ERROR_SIGN_UP,
 	SHOW_ERROR_SIGN_IN,
 	SHOW_ERROR_SIGN_UP,
	GET_AUTH_INFO,
 	GET_USER_PROFILE } from '../Constants';

firebase.initializeApp(DB_CONFIG);

// References
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

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
				const userRef = database.ref('users/' + userId);
				const action = {type:LOGGED_IN, payload:true};
				const userAction = {type:GET_AUTH_INFO, payload:{userId, email}};
				dispatch(action);
				dispatch(userAction)

        // Listening for UserProfile information
					userRef.on('value', snapShot => {
						let action = {type: GET_USER_PROFILE, payload:snapShot.val()};
						dispatch(action);
					})

			} else {
				console.log('User not logged in');
				const action = {type:LOGGED_OUT, payload:false};
				dispatch(action);
			}
		})
	}
} // Handling Authorization


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
	return dispatch => {
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
	}
} // Update User Profile


// Send User Pin
export function sendUserPin(uid,date,file,desc) {
	return dispatch => {
		if(file !== '') {
			let pinStorage = storage.ref('pins/' + file.name).put(file);
			pinStorage.on('state_changed', null, null, () => {
				const pinURL = pinStorage.snapshot.downloadURL;
				const pinKey = database.ref('userPins/').child('userRef/').push().key;
				const userData = {date,pinURL, desc};
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
	}
}
