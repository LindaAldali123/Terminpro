<template>
  <div class="ool">
    <div class="form-v2">
      <div class="page-content tco">
        <div class="form-v2-content">
          <div class="form-left">
            <img src="../assets/login.jpg" alt="form" />
          </div>
          <form @submit.prevent="register"  class="form-detail" action="#" id="myform">
            <div class="row">
              <div class="col-md-6">
                <h2>Register Form</h2>
              </div>
              <div class="col-md-6">
                <h2 style="text-align: right; float: right;">
                  <a :href="logi"
                    ><i class="fa fa-arrow-right" aria-hidden="true"></i
                  ></a>
                </h2>
              </div>
            </div>
            <div class="form-tw">
              <div class="form-row">
                <label for="">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="fname"
                  required
                />
              </div>
              <div class="form-row">
                <label for="">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="lname"
                  required
                />
              </div>
            </div>
            <div class="red">
              {{ error3 }}
            </div>
            <div class="form-row">
              <label for="">Your Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="red">
              {{ error1 }}
              {{ error2 }}
            </div>
            <div class="form-row">
              <label for="">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password2"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Select type </label>
              <select name="peo" id="peo" v-model="type">
                <option value="user">user</option>
                <option value="owner">owner</option>
              </select>
            </div>
            <div class="form-tw">
              <div class="form-row ph">
                <label for="">Phone 1</label>
                <!--<input type="tel" class="form-control" v-model="phon" required />-->
                <div class="pho">
                  <vue-tel-input v-model="phon" v-bind="bindProps"
                    ><template slot="arrow-icon"
                      ><span class="vti_dropdown"></span></template
                  ></vue-tel-input>
                </div>
              </div>
              <div class="form-row ph">
                <label for="">Phone 2</label>
                <!--<input type="tel" class="form-control" v-model="phon2" required /> -->
                <div class="pho">
                  <vue-tel-input v-model="phon2" v-bind="bindProps"
                    ><template slot="arrow-icon"
                      ><span class="vti_dropdown"></span></template
                  ></vue-tel-input>
                </div>
              </div>
            </div>
            <div class="form-tw">
              <div class="form-row">
                <label for="">City Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="city"
                  required
                />
              </div>
              <div class="form-row">
                <label for="">Country</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="country"
                  required
                />
              </div>
            </div>
            <div class="form-tw">
              <div class="form-row">
                <label for="">Location</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="location"
                  required
                />
              </div>
              <div class="form-row">
                <label for="">Building Number</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="numb"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <label for="">Url Facebook</label>
              <input type="text" class="form-control" v-model="page" required />
            </div>

            <br />

            <div class="form-row-last">
              <input
                :disabled="
                  !type &&
                  !email &&
                  !password &&
                  !password2 &&
                  !fname &&
                  !lname &&
                  !phon &&
                  !city &&
                  !country
                "
                type="submit"
                name="register"
                class="register"
                value="Register"
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
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
//import 'vue-tel-input/dist/vue-tel-input.common';
import { register } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "register",
  components: {
    VueTelInput,
  },
  data() {
    return {
      type: "",
      email: "",
      password: "",
      password2: "",
      fname: "",
      lname: "",
      phon: "",
      phon2: "",
      city: "",
      country: "",
      error1: "",
      error2: "",
      error3: "",
      num: 9,
      numb: null,
      location: "",
      page: "",
      verid: "",
      logi: "/login",
      toke: "",
      bindProps: {
        inputOptions: {
          showDialCode: true,
        },
      },
    };
  },
  methods: {
    async register() {
      this.error1 = "";
      this.error3 = "";
      this.error2 = "";
      if (
        this.password.length >= this.num &&
        this.password.match(/\d+/) &&
        (this.password.match(/[a-z]/) ||
          this.password.match(/.[!,@,#,$,%,^,&,*,?,_,(,)]/))
      ) {
        if (this.password == this.password2) {
          try {
            var resultreg = await register(
              this.type,
              this.email,
              this.password,
              this.fname,
              this.lname,
              this.city,
              this.country,
              this.location,
              this.numb,
              this.phon,
              this.phon2,
              this.page
            );
            var status = resultreg[0];
            console.log(status);
            var resultre = resultreg[1];
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
              console.log(resultreg);
              console.log(resultreg.data.data.id);
              console.log(resultreg.data.token);
              this.verid = resultreg.data.data.id;
              this.toke = resultreg.data.token;
              VueCookies.set("sess", {
                verid: this.verid,
                toke: this.toke,
              });
              this.$router.push("/verify");
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
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
