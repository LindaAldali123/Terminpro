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
                <h2>Login Admin</h2>
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
              <label for="">Your Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Password</label>
              <input
                type="password"
                v-model="pass"
                class="form-control"
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

            <br />
            <div class="form-row-last">
              <input
                :disabled="!email && !pass"
                type="submit"
                name="register"
                class="register"
                value="Login Admin"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import VueCookies from "vue-cookies";
import { loginadmin } from "../graph/Quries.js";
export default {
  name: "loginadmin",
  data() {
    return {
      email: "",
      pass: "",
      usernamee: "",
      tokenn: "",
      error: "",
      type: "",
      userid: "",
      hom: "/#",
    };
  },
  methods: {
    tran() {
      this.$router.push("/addadmin");
    },
    async log() {
      try {
        this.error = "";
        this.success = "";
        var resultlog = await loginadmin(this.email, this.pass);
        var status = resultlog[0];
        console.log(status);
        var resultlogin = resultlog[1];
        if (status === 404) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(resultlog.data);
          this.usernamee = resultlog.data.data.firstName;
          this.userid = resultlog.data.data._id;
          this.type = resultlog.data.data.type;
          this.tokenn = resultlog.data.token;
          console.log(this.tokenn);
          console.log(this.usernamee);
          console.log(this.type);
          console.log(this.userid);
          VueCookies.set("sessionn", {
            usernamee: this.usernamee,
            tokenn: this.tokenn,
            type: this.type,
            userid: this.userid,
          });
          //if (this.type == 'user') {
          this.$router.push("/dashboard");
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
