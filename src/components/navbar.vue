<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/">Authentication</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto align-items-center justify-content-between">
        <li class="nav-item" v-for="(route, index) in commonRoute" :key="index">
          <router-link :to="route.path" exact-active-class="active">
            <a class="nav-link" v-if="route.name != 'loginPage'">
              {{ route.display }}
            </a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto align-items-center justify-content-between">
        <li><a v-if="!state.tokenUser" @click="redirectTo('/login')">Đăng nhập</a></li>
        <li>
          <div class="d-flex align-items-center">
            <a class="nav-link" v-if="state.tokenUser">{{ state.tokenUser }}</a>
            <a class="nav-link" v-if="state.tokenUser" @click="logout"> Đăng xuất </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  directives: {},
  data() {
    return {
      commonRoute: [
        {
          name: "homePage",
          path: "/",
          display: "Trang chủ",
        },
        {
          name: "loginPage",
          path: "/login",
          display: "Đăng nhập",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      state: (state) => state.$_loginPage,
    }),
    ...mapGetters({
      // currentUser: "$_loginPage/getCurrentUser",
    }),
  },
  created() {},
  methods: {
    redirectTo: function (path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
    async logout() {
      await this.$store.dispatch("$_loginPage/logout");
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-nav .nav-link:hover {
  color: #000000;
}
.nav-item a.active.router-link-active .nav-link {
  color: #009900;
}
.navbar-brand {
  font-size: inherit;
  padding: 0;
}
.nav-link{
  cursor: pointer;
}
.logo {
  width: 30px;
  height: 30px;
}
</style>
