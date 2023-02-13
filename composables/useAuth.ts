import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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

  const logout = async () => {
    try {
      await signOut($auth);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    loginViaGoogle,
    logout,
  };
}
