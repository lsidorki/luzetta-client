import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc, updateDoc } from 'firebase/firestore';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth, googleProvider, createUserProfile, getCurrentUser } from "../../firebase/firebase.utils";
import { checkUserSession, signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess, updateUserFailure, updateUserSuccess } from "./user.actions";
import UserActionTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfile, userAuth, additionalData);
        const userSnapshot = yield getDoc(userRef);
        const {displayName, email, barcode, audition} = userSnapshot._document.data.value.mapValue.fields;
        yield put(signInSuccess({
            id: userSnapshot.id, 
            email: email.stringValue, 
            displayName: displayName.stringValue,
            barcode: barcode ? barcode.stringValue : '',
            audition: audition ? audition.stringValue : '' 
        }));
    } catch (error) {
        yield put(signInFailure({error: error}));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} =  yield signInWithPopup(auth, googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure({error: error}));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload : {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* updateUserDetails({payload: currentUser}) {
    try {
        const userRef = yield call(createUserProfile, currentUser);
        const {barcode, audition} = currentUser;
        const modifiedAt = new Date();
        yield updateDoc(userRef, {barcode, audition, modifiedAt});
        yield put(updateUserSuccess());
        yield put(checkUserSession());
    } catch (error) {
        yield put(updateUserFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUpdateUserStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserDetails)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onUpdateUserStart)
    ]);
}