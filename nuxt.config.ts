// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "와치 키퍼 | 시계 생활 같이 해요",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/scss/_global.scss"],
  runtimeConfig: {
    public: {
      fbApiKey: process.env.FB_API_KEY,
      fbAuthDomain: process.env.FB_AUTH_DOMAIN,
      fbProjectId: process.env.FB_PROJECT_ID,
      fbStorageBucket: process.env.FB_STORAGE_BUCKET,
      fbMessagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
      fbAppId: process.env.FB_APP_ID,
      fbMeasurementId: process.env.FB_MEASUREMENT_ID,
    },
  },
});
