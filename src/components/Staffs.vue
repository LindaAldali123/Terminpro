<template>
  <div class="staff">
    <h3>Book With Staff</h3>
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <carousel
      :items="6"
      :autoplay="true"
      :dots="true"
      :loop="true"
      :margin="25"
      :nav="false"
      :autoplaySpeed="true"
      :autoplayTimeout="5000"
      :autowidth="true"
      :mouseDrag="true"
      :responsive="{
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 6,
        },
      }"
      v-if="employe"
    >
      <div
        class="item"
        v-for="emp in employe"
        v-bind:key="emp.id"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="card">
          <div class="card-img">
            <img
              :src="'data:image/jpg;base64,' + emp.photo"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="card-evl" v-if="emp.rate !== null">
            <p><i class="fa fa-star"></i> {{ emp.rate }}</p>
          </div>
          <div class="card-title">
            <p>{{ emp.firstName }}</p>
            <span>{{ emp.specialty }}</span>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
import VueCookies from "vue-cookies";
import { getemp } from "../graph/Quries.js";
export default {
  name: "staffs",
  components: {
    carousel,
  },
  data() {
    return {
      insitutionid: VueCookies.get("insitutionid"),
      employe: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****");
      console.log(this.insitutionid);
      var result10 = await getemp(this.insitutionid);
      this.employe = result10.data.data;
      this.isload = false;
      console.log(this.employe);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
