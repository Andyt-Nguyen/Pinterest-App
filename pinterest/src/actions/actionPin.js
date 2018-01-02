import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { DB_CONFIG } from '../config';
import { LOGGED_IN, LOGGED_OUT, SHOW_ERROR, GET_PINS } from '../Constants';

firebase.initializeApp(DB_CONFIG);

// Authorization
const auth = firebase.auth();

export function createUser(email,password) {
	const promise = auth.createUserWithEmailAndPassword(email, password);
	return dispatch => promise.catch(e => console.log(e.message));
}

export function userSignInEmail(email, password) {
	const promise = auth.signInWithEmailAndPassword(email,password);
	return dispatch => promise.catch(e => {
		const action = {type:SHOW_ERROR, payload: e.message};
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
				const action = {type:LOGGED_IN, payload:true};
				dispatch(action)
			} else {
				console.log('User not logged in');
				const action = {type:LOGGED_OUT, payload:false};
				dispatch(action)
			}
		})
	}
}
// Authorization




export function getPins() {
	const database = firebase.database().ref().child('pins');
	return dispatch => {
		let pics = [];
		database.on('value', snapShot => {
			snapShot.forEach(snap => {
				let id = snap.key;
				let { url, text } = snap.val();
				pics.push({id,url,text});
			});
		});
		let action = {type: GET_PINS, payload: pics};
		dispatch(action);
	}
}
