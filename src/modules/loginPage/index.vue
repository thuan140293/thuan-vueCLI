<template>
  <div>
    <div>This is Login</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      state: (state) => state.$_loginPage,
    }),
    ...mapGetters({
      data: "$_loginPage/getData",
    }),
  },
  async created() {
    await this.$store.dispatch("$_loginPage/getData");
  },
  methods: {
    redirectTo: function (path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>


<style scoped>
</style>