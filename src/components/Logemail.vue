<template>
  <div class="ol">
    <div class="form-v2">
      <div class="page-content tco">
        <div class="form-v2-content">
          <div class="form-left">
            <img src="../assets/login.jpg" alt="form" />
          </div>
          <form class="form-detail" action="#" id="myform">
            <div class="row">
              <div class="col-md-6">
                <h2>Enter Email</h2>
              </div>
              <div class="col-md-6">
                <h2 style="text-align: right; float: right;">
                  <a :href="logi"
                    ><i class="fa fa-arrow-right" aria-hidden="true"></i
                  ></a>
                </h2>
              </div>
            </div>
            <br />
            <br />
            <div class="form-row">
              <label for="">Your Email</label>
              <input
                type="email"
                v-model="email"
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
                @click.prevent="forgetpass"
                :disabled="!email"
                type="submit"
                name="res"
                class="register"
                value="Reset Password"
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
import { forgetpass } from "../graph/Quries.js";
export default {
  name: "logemail",
  data() {
    return {
      email: "",
      error: "",
      success: "",
      logi: "/login",
    };
  },
  methods: {
    async forgetpass() {
      try {
        this.error = "";
        this.success = "";
        var result8 = await forgetpass(this.email);
        var status = result8[0];
        console.log(status);
        var resultlogin = result8[1];
        if (status === 500) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(result8.data);
          this.success = result8.data.msg + " Check Your Email";
          console.log(result8);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
