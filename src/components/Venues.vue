<template>
  <div class="venues">
    <div class="conto">
      <div class="section-title">
        <!-- <h2>Team</h2> -->
        <h3>Veatured Venues</h3>
        <div class="middle" v-if="isload">
          <div
            style="text-align: center;"
            class="spinner-border text-muted"
          ></div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="ins in insitution"
          v-bind:key="ins._id"
          class="venu col-md-3"
        >
          <a @click.prevent="detail(ins._id, ins.category)">
            <div class="card" data-aos="fade-up" data-aos-delay="100">
              <div class="card-image">
                <img :src="'data:image/jpg;base64,' + ins.photo" />
              </div>
              <div class="card-title">
                {{ ins.name }}
              </div>
              <div class="card-subtitle">
                {{ ins.subtitle }}
              </div>
              <div class="card-foot">
                <i class="fa fa-star"></i><i class="fa fa-star"></i
                ><i class="fa fa-star"></i><i class="fa fa-star"></i>
                <i class="fa fa-star"></i> Great
              </div>
              <div class="card-end">
                <p>FEATURED</p>
              </div>
            </div>
          </a>
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
//import carousel from "vue-owl-carousel";
import { getins } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "venues",
  //components: { carousel },
  data() {
    return {
      insitution: "",
      limit: 8,
      token: VueCookies.get("session").token,
      isload: true,
      //insitutionid:''
    };
  },
  async mounted() {
    if (this.token != null) {
      try {
        console.log("****");
        var result5 = await getins(this.limit);
        this.insitution = result5.data.data;
        this.isload = false;
        //console.log(this.id);
        // VueCookies.set("even", this.events[this.id]);
        console.log(this.insitution);
        console.log("****");
        //console.log(this.insitution[0].photo);
        // this.people = result;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        VueCookies.set("session", { username: "", token: null });
        console.log("****");
        var result66 = await getins(this.limit);
        this.insitution = result66.data.data;
        this.isload = false;
        console.log(this.insitution);
        console.log("****");
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    }
  },
  methods: {
    detail(insitutionid, catego) {
      console.log(insitutionid);
      VueCookies.set("insitutionid", insitutionid);
      console.log(catego);
      VueCookies.set("catego", catego);
      this.$router.push("/venusdetail");
    },
  },
};
</script>
