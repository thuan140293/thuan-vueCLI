<template>
  <div>
    <div class="row">
      <div class="col-4 m-auto">
        <form class="form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="username"
              placeholder="Enter Username"
              v-model="formData.username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
              v-model="formData.password"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="handleLogin">
            Submit
          </button>
          <p class="message">
            Not registered? <a href="javascript:;">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      formData:{
        username: '',
        password: ''
      }
    };
  },
  computed: {
    ...mapState({
      state: (state) => state.$_loginPage,
    }),
    ...mapGetters({
      // data: "$_loginPage/getData",
    }),
  },
  created() {
  },
  methods: {
    redirectTo: function (path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
    async handleLogin(){
        try {
          await this.$store.dispatch("$_loginPage/login", this.formData);
          this.$message({
            message: 'Đăng nhập thành công',
            type: 'success',
            center: true
          });
          this.$router.push("/");
        }
        catch (error) {
          this.$message.error({
            message: 'Đăng nhập thất bại',
            type: 'error',
            center: true
          });
        }
    }
  },
};
</script>


<style scoped>
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button {
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4caf50;
  text-decoration: none;
}
</style>