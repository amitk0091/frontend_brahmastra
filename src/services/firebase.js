import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, linkWithCredential, EmailAuthProvider, sendEmailVerification } from "firebase/auth";
import { auth, db } from '../config/config_firebase.js'



// signup password
export const signupEP = async (signupDetails) => {
    await createUserWithEmailAndPassword(auth, signupDetails.email, signupDetails.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user, userCredential);
            await sendEmailVerification(user);
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage };
        });
}

export const verifyEmail = async () => {
    const email = localStorage.getItem('unitWiseEmail');
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            console.log('Email sent successfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const loginEP = async (loginDetails) => {
    signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user, userCredential);
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return { errorCode, errorMessage };
        });
}


// // sign out password
const signOutUser = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}


// // email link

// // Confirm the link is a sign-in with email link.
// if (isSignInWithEmailLink(auth, window.location.href)) {
//     // Additional state parameters can also be passed via URL.
//     // This can be used to continue the user's intended action before triggering
//     // the sign-in operation.
//     // Get the email if available. This should be available if the user completes
//     // the flow on the same device where they started it.
//     let email = window.localStorage.getItem('emailForSignIn');
//     if (!email) {
//         // User opened the link on a different device. To prevent session fixation
//         // attacks, ask the user to provide the associated email again. For example:
//         email = window.prompt('Please provide your email for confirmation');
//     }
//     // The client SDK will parse the code from the link for you.
//     signInWithEmailLink(auth, email, window.location.href)
//         .then((result) => {
//             // Clear email from storage.
//             window.localStorage.removeItem('emailForSignIn');
//             // You can access the new user via result.user
//             // Additional user info profile not available via:
//             // result.additionalUserInfo.profile == null
//             // You can check if the user is new or existing:
//             // result.additionalUserInfo.isNewUser
//         })
//         .catch((error) => {
//             // Some error occurred, you can inspect the code: error.code
//             // Common errors could be invalid email and invalid or expired OTPs.
//         });
// }




// // Construct the email link credential from the current URL.
// const credential = EmailAuthProvider.credentialWithLink(
//     email, window.location.href);

// // Link the credential to the current user.
// linkWithCredential(auth.currentUser, credential)
//     .then((usercred) => {
//         // The provider is now successfully linked.
//         // The phone user can now sign in with their phone number or email.
//     })
//     .catch((error) => {
//         // Some error occurred.
//     });