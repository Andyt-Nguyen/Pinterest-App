import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { DB_CONFIG } from '../config';
import {
	LOGGED_IN,
 	LOGGED_OUT,
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
}
// Handling Authorization

// Post User Profile Info
export function sendUserInfo(uid,first_name,last_name,gender,email,file) {
		return dispatch => {
			const updateTask = storage.ref('avatars/' + file.name).put(file); //Save User AvatarFile
			updateTask.on('state_changed', null, null, () => {
				let avatarURL = updateTask.snapshot.downloadURL; //Once user file is saved - url is outputted
				let userData = {first_name,last_name,gender,email,avatarURL,hideModule:true};
				let userProfile = {};
				userProfile['users/' + uid] = userData;
				database.ref().update(userProfile)
			});
	}
}


// Get User Info after login
// export function getUserProfile(uid) {
// 		return dispatch => {
//
// 	}
// }
