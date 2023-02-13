<script setup lang="ts">
const { loginViaGoogle, logout } = useAuth();
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
          class="google"
          prepend-icon="mdi-google"
          variant="outlined"
          @click="loginViaGoogle"
          >로그인</v-btn
        >
        <v-btn class="logout" variant="outlined" @click="logout"
          >로그아웃</v-btn
        >
      </div>
    </div>
  </div>
  <v-divider></v-divider>
</template>
<style lang="scss" scoped>
.navbar {
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
  flex: 1 1 0%;
}
</style>
