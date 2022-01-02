<template>
  <div class="cate-detail">
    <div class="conta">
      <div class="row">
        <div class="col-md-6">
          <h3>
            Name Category: <span class="bold">{{ cat.name }}</span>
          </h3>
        </div>
        <div class="col-md-5">
          <h2 style="text-align: right; float: right; color: black;">
            <a style="color: black;" :href="hom"
              ><i class="fa fa-arrow-right" aria-hidden="true"></i
            ></a>
          </h2>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="middle" v-if="isload">
        <div
          style="text-align: center;"
          class="spinner-border text-muted"
        ></div>
      </div>
      <div class="row">
        <div
          class="item col-md-4"
          v-for="ca in ins"
          v-bind:key="ca._id"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="card">
            <div class="card-img">
              <div class="lik"><i class="fa fa-heart"></i></div>
              <a @click.prevent="detail(ca._id, ca.category)">
                <img :src="'data:image/jpg;base64,' + ca.photo" />
              </a>
            </div>
            <a @click.prevent="detail(ca._id, ca.category)">
              <div class="card-title">
                <p>{{ ca.name }}</p>
              </div>
              <div class="card-subtitle">
                {{ ca.subtitle }}
              </div>
              <div class="card-foot">
                <i class="fa fa-star"></i><i class="fa fa-star"></i>
                <i class="fa fa-star"></i><i class="fa fa-star"></i>
                <i class="fa fa-star"></i> Great
              </div>
              <div class="card-end">
                <p>FEATURED</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row next">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button v-if="num > 8" @click="prv" class="btn btn-defualt">
            PREV
          </button>
          <button
            v-if="ins.length === 9 && ins.length !== 0"
            @click="nex"
            class="btn btn-defualt"
          >
            NEXT
          </button>
        </div>
        <div class="col-md-4"></div>
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
import { getcatebyid } from "../graph/Quries.js";
import { getinskip } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "categorydetail",
  //components: { carousel },
  data() {
    return {
      catid: VueCookies.get("catid"),
      catn: VueCookies.get("catn"),
      cat: "",
      lim: 9,
      num: 0,
      ins: "",
      isload: true,
      hom: "/#",
    };
  },
  async mounted() {
    try {
      console.log("****=================???????");
      var result6 = await getcatebyid(this.catid);
      this.cat = result6.data.data;
      this.isload = false;
      console.log(this.cat);
      console.log(this.cat[0]);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
    try {
      console.log("****=================???????");
      var resultk = await getinskip(this.lim, this.num, this.catn);
      this.ins = resultk.data.data;
      console.log(this.ins);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async nex() {
      //this.$router.push('/categorydetail2');
      console.log("****=================???????");
      this.num = this.num + 9;
      var resultk = await getinskip(this.lim, this.num, this.catn);
      this.ins = resultk.data.data;
      console.log(this.ins);
      console.log("****");
    },
    async prv() {
      //this.$router.push('/categorydetail2');
      console.log("****=================???????");
      this.num = this.num - 9;
      var resultk = await getinskip(this.lim, this.num, this.catn);
      this.ins = resultk.data.data;
      console.log(this.ins);
      console.log("****");
    },
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
