import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((NuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
      },
    },
  });

  NuxtApp.vueApp.use(vuetify);
});
