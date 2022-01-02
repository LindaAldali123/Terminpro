<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <div class="col-md-4 inf1">
          <div class="user-img" v-if="img">
            <img :src="'data:image/jpg;base64,' + img" />
          </div>
          <div class="user-img" v-if="!img">
            <img src="../assets/user.png" />
          </div>
          <h4>{{ username }}</h4>
          <!--<p>0 Likes</p>-->
          <hr />
          <div class="user-cat">
            <h5>Categories</h5>
            <ul v-for="cat in categor" v-bind:key="cat._id">
              <li>
                <a @click.prevent="catedet(cat._id, cat.name)">{{
                  cat.name
                }}</a>
              </li>
            </ul>
          </div>
          <div class="user-serv">
            <h5>Recent Services</h5>
            <hr />
            <div class="user-s" v-for="ins in insitution" v-bind:key="ins._id">
              <a @click.prevent="detail(ins._id)">
                <div class="row">
                  <div class="col-md-4">
                    <img :src="'data:image/jpg;base64,' + ins.photo" />
                  </div>
                  <div class="col-md-8">
                    <h6>{{ ins.name }}</h6>
                    <p>{{ ins.subtitle }}</p>
                    <p class="sm">
                      <i class="fa fa-star"></i> Great
                      <span>{{ ins.category }}</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tags">
            <h5>Tags</h5>
            <ul>
              <li><a href="#">#Gym</a></li>
              <li><a href="#">#Beauty</a></li>
              <li><a href="#">#Fitness</a></li>
              <li><a href="#">#Nail</a></li>
              <li><a href="#">#Massage</a></li>
              <li><a href="#">#Sport</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-8 inf2">
          <h1 class="bold">Account Information</h1>
          <div class="middle" v-if="isload">
            <div
              style="text-align: center;"
              class="spinner-border text-muted"
            ></div>
          </div>
          <hr />
          <h4>Account Email Adress</h4>
          {{ email }}
          <br /><!--<button class="chan">Change</button>-->
          <hr />
          <h4>Profile Photo</h4>
          <input
            type="file"
            ref="files"
            class="form-control"
            id="files"
            @change="handleImage"
            name="img"
            accept="image"
            required
          />
          <button class="upd" @click.prevent="updatephot">
            Update Profile
          </button>
          <hr />
          <h4>Contact Information</h4>
          <form class="row">
            <div class="col-md-6">
              <h6>First Name</h6>
              <input type="text" v-model="fname" required />
            </div>
            <div class="col-md-6">
              <h6>Last Name</h6>
              <input type="text" v-model="lname" required />
            </div>
            <div class="col-md-6">
              <h6>Home Phone</h6>
              <input type="text" v-model="phon1" required />
            </div>
            <div class="col-md-6">
              <h6>Cell Phone</h6>
              <input type="text" v-model="phon2" />
            </div>
            <div class="col-md-12">
              <h6>Facebook URl</h6>
              <input type="text" v-model="urlf" required />
            </div>
            <hr />
            <br />
            <div class="col-md-12">
              <h4>Home Address</h4>
            </div>
            <div class="col-md-6">
              <h6>Location</h6>
              <input type="text" v-model="loc" required />
            </div>
            <div class="col-md-6">
              <h6>Building Number</h6>
              <input type="text" v-model="buld" required />
            </div>
            <div class="col-md-6">
              <h6>City</h6>
              <input type="text" v-model="city" required />
            </div>
            <div class="col-md-6">
              <h6>Country</h6>
              <input type="text" v-model="country" required />
            </div>
          </form>
          <button class="sav" @click.prevent="updateuser">Save</button>
          <hr />
          <!--<h4 class="green">Services Registed By You</h4>-->
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
import { getins } from "../graph/Quries.js";
import { getcate } from "../graph/Quries.js";
import { getuser } from "../graph/Quries.js";
import { updateuser } from "../graph/Quries.js";
import { updphotouser } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "user",
  data() {
    return {
      limit: 6,
      insitution: "",
      username: VueCookies.get("session").username,
      userid: VueCookies.get("session").userid,
      token: VueCookies.get("session").token,
      categor: "",
      user: "",
      fname: "",
      lname: "",
      email: "",
      phon1: "",
      phon2: "",
      city: "",
      country: "",
      loc: "",
      buld: "",
      urlf: "",
      type: "",
      updau: "",
      photo: "",
      img: "",
      upd: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      console.log("****");
      var result5 = await getins(this.limit);
      this.insitution = result5.data.data;
      console.log(this.insitution);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
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
      console.log("****=================???????");
      var resultu = await getuser(this.userid);
      this.user = resultu.data.data;
      this.isload = false;
      console.log(this.user);
      this.fname = this.user.firstName;
      this.lname = this.user.lastName;
      this.email = this.user.email;
      this.phon1 = this.user.phone_1;
      this.phon2 = this.user.phone_2;
      this.urlf = this.user.urls.facebook;
      this.city = this.user.address.city;
      this.type = this.user.type;
      this.img = this.user.photo;
      this.country = this.user.address.country;
      this.loc = this.user.address.location;
      this.buld = this.user.address.building;
      // VueCookies.set('img', this.img);
      // VueCookies.set('img', this.img);
      console.log("****");
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.canvasURL(e.target.result);
      };
      reader.readAsDataURL(fileobj);
    },
    canvasURL(path) {
      var img = new Image();
      img.src = path;
      img.onload = () => {
        var maxWidth = 320;
        var maxHeight = 224;

        // Create and initialize two canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var canvasCopy = document.createElement("canvas");
        var copyContext = canvasCopy.getContext("2d");
        var ratio = 1;
        if (img.width > maxWidth) {
          ratio = maxWidth / img.width;
        } else if (img.height > maxHeight) {
          ratio = maxHeight / img.height;
        }

        var quality = 0.5;
        canvasCopy.width = img.width;
        canvasCopy.height = img.height;
        copyContext.drawImage(img, 0, 0);

        // Copy and resize second canvas to first canvas
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        ctx.drawImage(
          canvasCopy,
          0,
          0,
          canvasCopy.width,
          canvasCopy.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        var base64 = canvas.toDataURL("image/jpeg", quality);
        var rez = base64.replace(/^data:image\/(png|jpeg);base64,/, "");
        this.photo = rez;
      };
    },
    async updatephot() {
      const { photo } = this;
      var resultu = await updphotouser(
        this.token,
        this.userid,
        photo.split("base64,")[1]
      );
      this.upd = resultu.data;
      console.log(this.upd);
      window.location.reload(3000);
    },
    async updateuser() {
      var resultu = await updateuser(
        this.token,
        this.userid,
        this.fname,
        this.lname,
        this.city,
        this.country,
        this.loc,
        this.buld,
        this.phon1,
        this.phon2,
        this.urlf
      );
      this.updau = resultu.data;
      console.log(this.updau);
      window.location.reload(3000);
    },
    detail(insitutionid) {
      console.log(insitutionid);
      VueCookies.set("insitutionid", insitutionid);
      this.$router.push("/venusdetail");
    },
    catedet(catid, catn) {
      console.log(catid);
      VueCookies.set("catid", catid);
      console.log(catn);
      VueCookies.set("catn", catn);
      this.$router.push("/categorydetail");
    },
  },
};
</script>
