<template>
  <div class="wrapper2">
    <div class="inner">
      <form>
        <h3 class="bold">Add Admin Form</h3>
        <!--<div class="form-group">-->
        <div class="form-group">
          <div class="form-wrapper">
            <label for="">First Name</label>
            <input type="text" class="form-control" v-model="fname" required />
          </div>
          <div class="form-wrapper">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-model="lname" required />
          </div>
        </div>
        <div class="red">
          {{ error3 }}
        </div>
        <div class="form-wrapper">
          <label for="">Email</label>
          <input type="email" class="form-control" v-model="email" required />
        </div>

        <div class="form-wrapper">
          <div class="red">
            {{ error1 }}
            {{ error2 }}
          </div>
          <label for="">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        <div class="form-wrapper">
          <label for="">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password2"
            required
          />
        </div>
        <div class="gree" v-if="success">
          {{ success }}
        </div>
        <button
          @click.prevent="addadmin"
          :disabled="!email && !password && !password2 && !fname && !lname"
        >
          ADD ADMIN
        </button>
      </form>
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import { addadmin } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "addadmin",
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      fname: "",
      lname: "",
      token: VueCookies.get("sessionn").tokenn,
      error1: "",
      error2: "",
      error3: "",
      success: "",
      num: 9,
      numb: null,
    };
  },
  methods: {
    async addadmin() {
      this.error3 = "";
      this.error = "";
      this.error2 = "";
      this.success = "";
      if (
        this.password.length >= this.num &&
        this.password.match(/\d+/) &&
        (this.password.match(/[a-z]/) ||
          this.password.match(/.[!,@,#,$,%,^,&,*,?,_,(,)]/))
      ) {
        if (this.password == this.password2) {
          try {
            var resultreg = await addadmin(
              this.token,
              this.email,
              this.password,
              this.fname,
              this.lname
            );
            var status = resultreg[0];
            console.log(status);
            var resultre = resultreg[1];
            this.email = "";
            this.password = "";
            this.password2 = "";
            this.fname = "";
            this.lname = "";
            if (status === 409) {
              console.log("-----error-------");
              console.log(resultre.msg);
              this.error3 = resultre.msg;
              console.log("-----error-------");
            } else if (status === 422) {
              console.log("-----error-------");
              console.log(resultre.msg);
              this.error3 = resultre.msg;
              console.log("-----error-------");
            } else {
              console.log("==================");
              //this.$router.push('/login');
              console.log(resultreg);
              this.success = "Another Admin Added";
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          this.error1 = "The Password And Confirm Not Equal";
        }
      } else {
        this.error2 = "Try New Password Is Conflict";
      }
    },
  },
};
</script>
