<template>
  <div class="ol">
    <div class="form-v2">
      <div class="page-content tco">
        <div class="form-v2-content">
          <div class="form-left">
            <img src="../assets/login.jpg" alt="form" />
          </div>
          <form
            @submit.prevent="resetpass"
            class="form-detail"
            action="#"
            id="myform"
          >
            <div class="row">
              <div class="col-md-6">
                <h2>Reset Password</h2>
              </div>
              <div class="col-md-6">
                <h2 style="text-align: right; float: right;">
                  <a :href="loge"
                    ><i class="fa fa-arrow-right" aria-hidden="true"></i
                  ></a>
                </h2>
              </div>
            </div>
            <div class="form-row">
              <label for="">New Password</label>
              <input
                type="password"
                v-model="pass"
                class="form-control"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Confirm New Password</label>
              <input
                type="password"
                v-model="rpass"
                class="form-control"
                required
              />
            </div>

            <div class="red" style="margin-bottom: 6px;">
              {{ error }}
            </div>
            <div class="green bold">
              {{ success }}
            </div>

            <br />
            <div class="form-row-last">
              <input
                :disabled="!pass && !rpass"
                type="submit"
                name="res"
                class="register"
                value="Confirm Password"
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
import { resetpass } from "../graph/Quries.js";
export default {
  name: "resetpass",
  data() {
    return {
      pass: "",
      rpass: "",
      token: "",
      error: "",
      nu: 9,
      success: "",
      loge: "logemail",
    };
  },
  async mounted() {
    console.log(this.$route.query);
    console.log(this.$route.query.token);
  },
  methods: {
    async resetpass() {
      this.error = "";
      this.success = "";
      if (
        this.pass.length >= this.nu &&
        this.pass.match(/\d+/) &&
        (this.pass.match(/[a-z]/) ||
          this.pass.match(/.[!,@,#,$,%,^,&,*,?,_,(,)]/))
      ) {
        if (this.pass == this.rpass) {
          try {
            this.token = this.$route.query.token;
            var result9 = await resetpass(this.token, this.pass);
            var status = result9[0];
            console.log(status);
            var resultlogin = result9[1];
            if (status === 500) {
              console.log("-----error-------");
              console.log(resultlogin.msg);
              this.error = resultlogin.msg;
              console.log("-----error-------");
            } else if (status === 404) {
              console.log("-----error-------");
              console.log(resultlogin.msg);
              this.error = resultlogin.msg;
              console.log("-----error-------");
            } else {
              console.log("==================");
              console.log(result9.data);
              //this.success = result8.data.msg + ' Check Your Email';
              console.log(result9);
              this.success = "The Password Changed";
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          this.error = "The Password And Confirm Not Equal";
        }
      } else {
        this.error = "Try New Password Is Conflict";
      }
    },
  },
};
</script>
