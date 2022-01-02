<template>
  <div class="ol">
    <div class="form-v2">
      <div class="page-content tco">
        <div class="form-v2-content">
          <div class="form-left">
            <img src="../assets/login.jpg" alt="form" />
          </div>
          <form
            @submit.prevent="log"
            class="form-detail"
            action="#"
            id="myform"
          >
            <div class="row">
              <div class="col-md-6">
                <h2>Login Form</h2>
              </div>
              <div class="col-md-6">
                <h2 style="text-align: right; float: right;">
                  <a :href="hom"
                    ><i class="fa fa-arrow-right" aria-hidden="true"></i
                  ></a>
                </h2>
              </div>
            </div>
            <div class="form-row">
              <label for="your_email">Your Email:</label>
              <input
                name="your_email"
                id="your_email"
                class="input-text form-control"
                type="email"
                v-model="email"
                required
              />
            </div>
            <div class="form-row">
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                class="input-text form-control"
                v-model="pass"
                required
              />
            </div>
            <div class="red" style="margin-bottom: 6px;">
              {{ error }}
            </div>

            <div class="checkbox">
              <label>
                <input type="checkbox" />
                <p class="font-size:12px !important;margin-top:6px;">
                  Remember Me
                </p>
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="forg">
              <a @click.prevent="forg" href="#">Forget Password?. </a>
            </div>
            <br />
            <div class="form-row-last">
              <input
                :disabled="!email && !pass"
                type="submit"
                name="register"
                class="register"
                value="Login"
              />
            </div>
            <div class="reg" style="margin-top: -15px;">
              <a @click.prevent="tran" href="#">Register Account. </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%---->
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import VueCookies from "vue-cookies";
import { login } from "../graph/Quries.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      pass: "",
      username: "",
      token: "",
      error: "",
      type: "",
      userid: "",
      hom: "/#",
    };
  },
  /*async mounted() {
		VueCookies.remove('session');
		VueCookies.set('session', { username: '', token: null });
	},*/
  methods: {
    tran() {
      this.$router.push("/register");
    },
    forg() {
      this.$router.push("/logemail");
    },
    async log() {
      try {
        this.error = "";
        this.success = "";
        var resultlog = await login(this.email, this.pass);
        var status = resultlog[0];
        console.log(status);
        var resultlogin = resultlog[1];
        if (status === 404) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else if (status === 422) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(resultlog.data);
          this.username = resultlog.data.data.firstName;
          this.userid = resultlog.data.data._id;
          this.type = resultlog.data.data.type;
          this.token = resultlog.data.token;
          console.log(this.token);
          console.log(this.username);
          console.log(this.type);
          console.log(this.userid);
          VueCookies.set("session", {
            username: this.username,
            token: this.token,
            type: this.type,
            userid: this.userid,
          });
          //if (this.type == 'user') {
          this.$router.push("/#");
          //} else {
          //	this.$router.push('/addservic');
          //}
          console.log(resultlog);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
