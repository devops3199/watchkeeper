import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const loginViaGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup($auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    console.log({
      credential,
      token: credential?.accessToken,
      user: result.user,
    });
  };

  return {
    loginViaGoogle,
  };
}
