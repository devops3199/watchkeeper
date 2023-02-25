import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {useUser} from './useUser';

export default function () {
  const {$auth} = useNuxtApp();
  const user = useUser();

  const loginViaGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup($auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    user.value = {
      name: result.user.displayName ?? '익명',
      email: result.user.email ?? undefined,
      role: 'user',
    };

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
    } finally {
      user.value = null;
    }
  };

  return {
    loginViaGoogle,
    logout,
  };
}
