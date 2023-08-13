import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

function Authentication() {
  return (
    <div>
      <h1>sing in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
