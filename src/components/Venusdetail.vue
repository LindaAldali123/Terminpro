<template>
  <div class="detail">
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <div v-for="int in insit" v-bind:key="int.id">
      <div class="row del1">
        <div class="col-md-4">
          <div class="sid">
            <div class="side">
              <h3>{{ int.name }}</h3>
              <p>
                <span>{{ int.subtitle }}</span
                ><br />
                {{ int.address[0].city }} , {{ int.address[0].country }}
              </p>
              <p>
                <span>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i> </span
                ><span class="bold"> 5.0 Great </span>
              </p>
              <button v-if="type === 'user'" @click.prevent="book">
                Book Now
              </button>
              <button v-if="type !== 'user'">Book Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="sid2">
            <div class="lik"><i class="fa fa-heart"></i></div>
            <div class="row slider">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                v-if="int.slider"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    :data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    :data-slide-to="j"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    v-for="(slid, j) in int.slider"
                    :class="{ active: j == 0 }"
                    v-bind:key="slid._id"
                  >
                    <img
                      class="d-block w-100"
                      :src="'data:image/jpg;base64,' + slid.image"
                      alt="Second slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <!-- End Slider -->
          </div>
        </div>
      </div>
      <div class="row del2">
        <div class="col-md-8">
          <h3>About {{ int.name }}</h3>
          <p>
            <span v-for="sub in int.subCategory" v-bind:key="sub">
              <i class="fa fa-flash"></i> {{ sub }}
            </span>
          </p>
          <p>
            {{ int.description }}
          </p>
        </div>
        <div class="col-md-4">
          <h3>Location</h3>
          <p>{{ int.address[0].city }} , {{ int.address[0].country }}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg"
            frameborder="0"
            style="border: 0;"
            allowfullscreen=""
          ></iframe>
          <h6><a href="#">See direction</a></h6>
          <hr />
          <p>
            <i class="fa fa-clock-o"></i> Open now {{ int.openAt }} am -
            {{ int.closeAt }} pm
            <i class="fa fa-sort-down"></i>
          </p>
          <div v-if="userid === int.owner" class="upin">
            <button @click.prevent="tranupda()">Update Insititution</button>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <Services />
      <Staffs />
      <Nearvenus />
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import Services from "./Services.vue";
import Staffs from "./Staffs.vue";
import Nearvenus from "./Nearvenus.vue";
import VueCookies from "vue-cookies";
import { getinsid } from "../graph/Quries.js";
export default {
  name: "venusdetail",
  components: {
    Services,
    Staffs,
    Nearvenus,
  },
  data() {
    return {
      insitutionid: VueCookies.get("insitutionid"),
      userid: VueCookies.get("session").userid,
      insit: "",
      length: null,
      j: null,
      type: VueCookies.get("session").type,
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****");
      var result7 = await getinsid(this.insitutionid);
      this.insit = result7.data;
      this.isload = false;
      console.log(this.insit);
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
    tranupda() {
      console.log(this.insitutionid);
      VueCookies.set("insid", this.insitutionid);
      this.$router.push("/updateins");
    },
    book() {
      console.log(this.insitutionid);
      VueCookies.set("insid", this.insitutionid);
      this.$router.push("/booking");
    },
  },
};
</script>
