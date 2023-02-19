<script setup lang="ts">
const { loginViaGoogle, logout } = useAuth();
const user = useUser();

const isOpen = reactive({
  logoutModal: false,
  loginSuccess: false,
});

const handleLogin = async () => {
  await loginViaGoogle();
  isOpen.loginSuccess = true;
};

const handleLogout = async () => {
  await logout();
  isOpen.logoutModal = false;
};
</script>
<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="logo">
        <NuxtLink class="logo__link" to="/">
          <img src="~/assets/images/logo.jpg" alt="logo" />
          <div class="slogan">
            <div class="font-weight-black">와치키퍼</div>
            <div class="caption font-weight-light">시계생활 같이 해요</div>
          </div>
        </NuxtLink>
      </div>
      <ul class="menu">
        <li><NuxtLink to="/about">소개</NuxtLink></li>
        <li><NuxtLink to="/brands">시계 브랜드</NuxtLink></li>
        <li><NuxtLink to="/community">커뮤니티</NuxtLink></li>
      </ul>
      <div class="login-btns">
        <v-btn
          v-if="!user"
          class="google"
          prepend-icon="mdi-google"
          variant="outlined"
          @click="handleLogin"
          >로그인</v-btn
        >
        <div v-else class="after-auth-wrapper">
          <v-btn class="my-info" variant="flat" icon>
            <v-icon>mdi-account</v-icon>
            <v-tooltip activator="parent" location="bottom">내 정보</v-tooltip>
          </v-btn>
          <v-btn
            class="logout"
            variant="flat"
            icon
            @click="isOpen.logoutModal = true"
          >
            <v-icon>mdi-logout-variant</v-icon>
            <v-tooltip activator="parent" location="bottom">로그아웃</v-tooltip>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <v-divider></v-divider>
  <!-- 로그인 스낵바 -->
  <v-snackbar
    v-model="isOpen.loginSuccess"
    :timeout="1500"
    color="primary"
    variant="tonal"
  >
    {{ user?.name }}님 환영합니다

    <template v-slot:actions>
      <v-btn variant="text" @click="isOpen.loginSuccess = false"> 닫기 </v-btn>
    </template>
  </v-snackbar>
  <!-- 로그아웃 모달 -->
  <v-dialog v-model="isOpen.logoutModal" width="300">
    <v-card>
      <v-card-text> 정말 로그아웃 하시겠습니까? </v-card-text>
      <v-card-actions class="modal-btns">
        <v-btn @click="handleLogout">로그아웃</v-btn>
        <v-btn @click="isOpen.logoutModal = false">취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 80px;

  &__content {
    display: flex;
    align-items: center;
    max-width: 1080px;
    padding: 16px;
    margin: 0 auto;
  }
}

.logo {
  display: flex;
  justify-content: flex-start;
  flex: 1 1 0%;

  &__link {
    display: flex;
    align-items: center;
    color: #1187cf;
    text-decoration: none;

    img {
      width: 45px;
    }

    .slogan {
      display: inline-block;
      margin-left: 8px;

      .caption {
        color: #222;
        font-size: 13px;
      }
    }
  }
}

.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 32px;

  a {
    text-decoration: none;
    color: #222;
  }
}

.login-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 0%;
}
.after-auth-wrapper {
  display: flex;
  align-items: center;

  .logout {
    margin-left: 8px;
  }
}
.modal-btns {
  display: flex;
  justify-content: flex-end;
}
</style>
