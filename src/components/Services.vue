<template>
  <div class="services">
    <h3 class="t">Services</h3>
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <div class="row" v-for="servs in services" v-bind:key="servs._id">
      <div class="col-md-4">
        <a>
          <h4>{{ servs.category }} <span> {{ servs.length }}</span></h4>
        </a>
      </div>
      <div class="col-md-8">
        <div class="ser">
          <div class="serv">
            <div class="row">
              <div class="col-md-1">
                <i class="fa fa-circle-o"></i>
              </div>
              <div class="col-md-9">
                <h5>{{ servs.name }}</h5>
                <p>{{ servs.length }}hour</p>
                <h6>{{ servs.description }}</h6>
              </div>
              <div class="col-md-2">The Price: {{ servs.price }} $</div>
            </div>
            <hr />
          </div>
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
import { getser } from "../graph/Quries.js";
export default {
  name: "services",
  data() {
    return {
      show: false,
      insitutionid: VueCookies.get("insitutionid"),
      services: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****");
      console.log(this.insitutionid);
      var result11 = await getser(this.insitutionid);
      this.services = result11.data.data;
      this.isload = false;
      console.log(this.services);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    hide() {
      this.show = true;
      console.log(this.show);
    },
    hide1() {
      this.show = false;
      console.log(this.show);
    },
  },
};
</script>
