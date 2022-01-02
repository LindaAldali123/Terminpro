<template>
  <div class="addser1">
    <h3>Update Insititution</h3>
    <form>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-user-o"></i> Name The Insititution
        </label>
        <input type="text" class="form-control" v-model="name" required />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-envelope-o"></i> Email</label>
        <input type="text" class="form-control" v-model="email" required />
      </div>
      <div class="Que1 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-blind"></i>
          What the Category?
        </label>
        <select name="people" id="people" v-model="category">
          <option v-for="ca in categor" v-bind:key="ca._id" :value="ca.name">{{
            ca.name
          }}</option>
        </select>
      </div>
      <div class="form-wrapper">
        <label class="bold" for=""><i class="fa fa-home"></i>SubCategory</label>
        <input type="text" class="form-control" v-model="subcat" required />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-vcard-o"></i> SubTitle </label>

        <textarea
          class="form-control"
          cols="70"
          rows="2"
          v-model="subtitle"
          placeholder="Write A short event summary ."
          required
        >
        </textarea>
        <br />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-vcard-o"></i> Description </label>

        <textarea
          class="form-control"
          cols="70"
          rows="6"
          v-model="description"
          placeholder="Write A short event summary ."
          required
        >
        </textarea>
        <br />
      </div>
      <h4>The Address</h4>
      <div class="form-group">
        <div class="form-wrapper">
          <label class="bold" for=""><i class="fa fa-home"></i>City</label>
          <input type="text" class="form-control" v-model="city" required />
        </div>
        <div class="form-wrapper">
          <label class="bold" for=""><i class="fa fa-home"></i>Country</label>
          <input type="text" class="form-control" v-model="country" required />
        </div>
      </div>
      <div class="form-group">
        <div class="form-wrapper">
          <label class="bold" for=""><i class="fa fa-phone"></i>Phone</label>
          <input type="text" class="form-control" v-model="phone" required />
        </div>
        <div class="form-wrapper">
          <label class="bold" for=""
            ><i class="fa fa-paypal"></i>Paypal Email</label
          >
          <input
            type="text"
            class="form-control"
            v-model="creditCard"
            required
          />
        </div>
      </div>
      <p class="bold">
        <i class="fa fa-calendar"></i>
        Date and Time
      </p>

      <div class="ev form-wrapper">
        <label class="bold" for="birthday">Days:</label>
        <input
          class="inpu form-control"
          v-model="openingDays"
          type="text"
          id="birthday"
          name="birthday"
          required
        />
      </div>
      <div class="form-group">
        <div class="ev form-wrapper">
          <label class="bold" for="birthday">Start Time</label>
          <input
            class="inpu form-control"
            v-model="openAt"
            type="text"
            id="birthday"
            name="birthday"
            required
          />
        </div>
        <div class="ev form-wrapper">
          <label class="bold" for="birthday">End Time</label>
          <input
            class="inpu form-control"
            v-model="closeAt"
            type="text"
            id="birthday"
            name="birthday"
            required
          />
        </div>
      </div>
      <div class="red">
        {{ error }}
      </div>
      <div class="gree" v-if="success">
        {{ success }}
      </div>
      <div class="Button updi">
        <button
          :disabled="!email && !name && !description && !category"
          @click.prevent="updateins"
          class=""
        >
          Update Insititution
        </button>
      </div>
    </form>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import VueCookies from "vue-cookies";
//import { updphotoins } from '../graph/Quries.js';
import { updateins } from "../graph/Quries.js";
import { getcate } from "../graph/Quries.js";
import { getinsid } from "../graph/Quries.js";
export default {
  name: "updateinsit",
  data() {
    return {
      open: false,
      username: VueCookies.get("session").username,
      token: VueCookies.get("session").token,
      userid: VueCookies.get("session").userid,
      insid: VueCookies.get("insid"),
      email: "",
      name: "",
      description: "",
      category: "",
      country: "",
      city: "",
      openingDays: "",
      openAt: "",
      closeAt: "",
      error: "",
      subtitle: "",
      phone: "",
      creditCard: "",
      subcat: "",
      photo: "",
      phot: "",
      photos: "",
      arrlist: [],
      success: "",
      //insid: '',
      categor: "",
      upph: "",
    };
  },
  async mounted() {
    try {
      console.log("****=================???????");
      var result6 = await getcate();
      this.categor = result6.data.data;
      console.log(this.categor);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
    try {
      console.log("****");
      var result7 = await getinsid(this.insid);
      this.insit = result7.data;
      console.log(this.insit);
      this.email = this.insit.data.email;
      this.name = this.insit.data.name;
      this.category = this.insit.data.category;
      this.subtitle = this.insit.data.subtitle;
      this.description = this.insit.data.description;
      this.phone = this.insit.data.phone;
      this.creditCard = this.insit.data.paypalEmail;
      this.openAt = this.insit.data.openAt;
      this.closeAt = this.insit.data.closeAt;
      this.phot = this.insit.data.photo;
      //var l = 0; .join(",");
      //while (l < this.insit.data.openingDays.length) {
      this.openingDays = this.insit.data.openingDays.toString();
      //	l++;
      //}
      this.subcat = this.insit.data.subCategory.toString();
      this.city = this.insit.data.address[0].city;
      this.country = this.insit.data.address[0].country;
      console.log(this.insit.data.slider);
      this.length = this.insit.data.slider.length;
      console.log(this.length);
      var i = 0;
      while (i <= this.length) {
        this.j = i;
        i++;
      }
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async updateins() {
      console.log(this.openingDays);
      try {
        var result2 = await updateins(
          this.token,
          this.insid,
          this.name,
          this.subtitle,
          this.description,
          this.category,
          this.subcat.split(","),
          this.country,
          this.city,
          this.phone,
          this.creditCard,
          this.openingDays.split(","),
          this.openAt,
          this.closeAt
        );
        console.log(this.token);
        var status = result2[0];
        console.log(status);
        var resultr = result2[1];
        if (status === 401) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;
          console.log("-----error-------");
        } else if (status === 422) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;
          console.log("-----error-------");
        } else if (status === 409) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;

          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(result2);
          //console.log(result2.data.data.id);
          this.success = "The Insititution Updated ";
          console.log("success");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
