<template>
  <div class="register">
      <div>
          <form @submit.prevent="submit">
            <div>
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="form.username">
            </div>
            <div>
              <label for="firstname">First Name:</label>
              <input type="text" name="firstname" v-model="form.firstname">
            </div>
            <div>
              <label for="lastname">Last Name:</label>
              <input type="text" name="lastname" v-model="form.lastname">
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="text" name="email" v-model="form.email">
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="form.password">
            </div>
            <button type="submit"> Submit</button>
          </form>
      </div>
      <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
//import UserDataService from "../services/UserDataService"
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        adminstatus: false,
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>