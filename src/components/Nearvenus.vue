<template>
  <div class="near">
    <!--<div class="container">-->
    <h3>Similar Insititution</h3>
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <carousel
      :items="4"
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
          items: 1,
        },
        520: {
          items: 2,
        },
        767: {
          items: 3,
        },
        900: {
          items: 4,
        },
      }"
      v-if="inscategory"
    >
      <div
        class="item"
        v-for="cato in inscategory"
        v-bind:key="cato._id"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <a @click.prevent="deta(cato._id, cato.category)">
          <div class="card">
            <div class="card-img">
              <img :src="'data:image/jpg;base64,' + cato.photo" />
            </div>
            <div class="card-title">
              <p>{{ cato.name }}</p>
            </div>
            <div class="card-subtitle">
              <p>{{ cato.subtitle }}</p>
            </div>
            <div class="card-evl">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span>Great</span>
            </div>
          </div>
        </a>
      </div>
    </carousel>
  </div>
  <!--</div>-->
</template>
<script>
import VueCookies from "vue-cookies";
import carousel from "vue-owl-carousel";
import { getinscat } from "../graph/Quries.js";
export default {
  name: "staffs",
  components: {
    carousel,
  },
  data() {
    return {
      insitutionid: VueCookies.get("insitutionid"),
      catego: VueCookies.get("catego"),
      inscategory: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****=================???????");
      var result6 = await getinscat(this.catego);
      this.inscategory = result6.data.data;
      this.isload = false;
      console.log(this.inscategory);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    deta(insitutionid, catego) {
      console.log(insitutionid);
      VueCookies.set("insitutionid", insitutionid);
      console.log(catego);
      VueCookies.set("catego", catego);
      //this.$router.push('/venusdetail');
      window.location.reload(3000);
    },
  },
};
</script>
