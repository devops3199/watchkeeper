import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// import {getAnalytics} from 'firebase/analytics';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.fbApiKey,
    authDomain: config.public.fbAuthDomain,
    projectId: config.public.fbProjectId,
    storageBucket: config.public.fbStorageBucket,
    messagingSenderId: config.public.fbMessagingSenderId,
    appId: config.public.fbAppId,
    measurementId: config.public.fbMeasurementId,
  };

  const app = initializeApp(firebaseConfig);

  // const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

  nuxtApp.vueApp.provide('firestore', firestore);
  nuxtApp.provide('firestore', firestore);

  nuxtApp.vueApp.provide('storage', storage);
  nuxtApp.provide('storage', storage);
});
