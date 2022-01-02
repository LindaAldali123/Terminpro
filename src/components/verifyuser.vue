<template>
  <div class="ol">
    <div class="form-v2">
      <div class="page-content tco">
        <div class="form-v2-content">
          <div class="form-left">
            <img src="../assets/login.jpg" alt="form" />
          </div>
          <form
            @submit.prevent="verfiya"
            class="form-detail"
            action="#"
            id="myform"
          >
            <div class="row">
              <div class="col-md-6">
                <h2>Enter Code</h2>
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
              <label for="">The Code:</label>
              <input type="text" v-model="code" class="form-control" required />
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
                :disabled="!code"
                type="submit"
                name="ver"
                class="register"
                value="Verify"
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
import { verfiya } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "verifyuser",
  data() {
    return {
      code: "",
      id: "",
      error: "",
      success: "",
      logi: "/login",
      toke: VueCookies.get("sess").toke,
      verid: VueCookies.get("sess").verid,
    };
  },
  methods: {
    async verfiya() {
      this.error = "";
      this.success = "";
      try {
        var result8 = await verfiya(this.toke, this.verid, this.code);
        var status = result8[0];
        console.log(status);
        var resultlogin = result8[1];
        if (status === 500) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else if (status === 409) {
          console.log("-----error-------");
          console.log(resultlogin.msg);
          this.error = resultlogin.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(result8.data);
          this.success = result8.data.msg + " Success";
          console.log(result8);
          this.$router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
