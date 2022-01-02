<template>
  <div class="categ">
    <section id="team" class="team section-bg">
      <div class="conto" data-aos="fade-up">
        <div class="section-title">
          <!-- <h2>Team</h2> -->
          <h3>Top Categories</h3>
          <div class="middle" v-if="isload">
            <div
              style="text-align: center;"
              class="spinner-border text-muted"
            ></div>
          </div>
        </div>

        <div class="conto">
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
                items: 1,
              },
              400: {
                items: 2,
              },
              700: {
                items: 3,
              },
              1000: {
                items: 4,
              },
              1000: {
                items: 5,
              },
              1390: {
                items: 6,
              },
            }"
            v-if="category"
          >
            <div
              class="item"
              v-for="catg in category"
              v-bind:key="catg._id"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a @click.prevent="catedet(catg._id, catg.name)">
                <div class="card">
                  <div class="card-img">
                    <img
                      :src="'data:image/jpg;base64,' + catg.image"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="card-title">
                    <p>{{ catg.name }}</p>
                  </div>
                </div>
              </a>
            </div>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import carousel from "vue-owl-carousel";
import { getcate } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "category",
  components: { carousel },
  data() {
    return {
      category: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****=================???????");
      var result6 = await getcate();
      this.category = result6.data.data;
      this.isload = false;
      console.log(this.category);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    catedet(catid, catn) {
      console.log(catid);
      VueCookies.set("catid", catid);
      console.log(catn);
      VueCookies.set("catn", catn);
      this.$router.push("/categorydetail");
    },
    /*	convimg(img) {
			//console.log(img);
			var base64String = '';
			var bytes = new Uint8Array(img);
			var len = bytes.byteLength;
			for (var i = 0; i < len; i++) {
				base64String += String.fromCharCode(bytes[i]);
			}
			console.log('&&&&&&&&&&&');
			//console.log(base64String);
			return window.btoa(base64String);
		},*/
  },
};
</script>
