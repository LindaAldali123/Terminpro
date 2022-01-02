<template>
  <div class="addser1">
    <h3>Update Image For Insititution</h3>
    <form>
      <div class="form-wrapper phot">
        <img
          style="padding-bottom: 4px; border-raduis: 8px;"
          :src="'data:image/jpg;base64,' + phot"
        />
      </div>
      <div class="Que5 form-wrapper">
        <label class="bold">
          <i class="fa fa-file-picture-o"></i>
          Select Logo Image For Insititution
        </label>
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
        <button class="upd" @click.prevent="updpho">Update Logo Image</button>
      </div>
      <hr />
      <div v-if="im < 4" class="Que5 form-wrapper">
        <label class="bold">
          <i class="fa fa-file-picture-o"></i>
          Select For Add Image to Slider Insititution
        </label>
        <input
          type="file"
          ref="files"
          class="form-control"
          id="files"
          @change="hImage"
          name="im"
          accept="image"
          required
        />
        <button class="upd" @click.prevent="addimg">
          Add Image to Slider
        </button>

        <hr />
      </div>
    </form>
    <form class="Events">
      <h3>Image Slider</h3>
      <hr />
      <div class="Evn row phot" v-for="slid in slider" v-bind:key="slid._id">
        <div class="col-md-8">
          <div class="post-item">
            <div class="row pho">
              <div class="col-md-5">
                <img
                  style="padding-bottom: 4px; border-raduis: 8px;"
                  :src="'data:image/jpg;base64,' + slid.image"
                  alt=""
                />
              </div>
              <div class="col-md-7"></div>
            </div>
            <!-- <br>-->
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <div class="btto">
                <button
                  style="margin-top: 22px; margin-bottom: 5px;"
                  class="rj"
                  @click.prevent="delimgs(slid.fileName)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
import { updphotoins } from "../graph/Quries.js";
import { getinsid } from "../graph/Quries.js";
import { addimgs } from "../graph/Quries.js";
import { delimgs } from "../graph/Quries.js";
export default {
  name: "updatephoto",
  data() {
    return {
      open: false,
      username: VueCookies.get("session").username,
      token: VueCookies.get("session").token,
      userid: VueCookies.get("session").userid,
      insid: VueCookies.get("insid"),
      photo: "",
      imag: "",
      phot: "",
      photos: "",
      arrlist: [],
      //insid: '',
      upph: "",
      adph: "",
      slider: "",
      j: null,
      del: "",
      im: 0,
    };
  },
  async mounted() {
    try {
      console.log("****");
      var result7 = await getinsid(this.insid);
      this.insit = result7.data;
      console.log(this.insit);
      this.phot = this.insit.data.photo;
      this.slider = this.insit.data.slider;
      this.im = this.insit.data.slider.length;
      console.log("===================");
      console.log(this.slider);
      console.log("===================");
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
        this.canvaslogoURL(e.target.result);
      };
      reader.readAsDataURL(fileobj);
    },
    canvaslogoURL(path) {
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
    hImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Imag(selectedImage);
    },
    createBase64Imag(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let te = e.target.result;
        //this.imag=te
        this.canvasDataURL(te); // start compression
      };
      reader.readAsDataURL(fileobj);
    },
    canvasDataURL(path) {
      var img = new Image();
      img.src = path;
      img.onload = () => {
        var maxWidth = 800;
        var maxHeight = 400;

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
        // ctx.drawImage(img, 0, 0, w, h)

        var base64 = canvas.toDataURL("image/jpeg", quality);
        this.imag = base64.replace(/^data:image\/(png|jpeg);base64,/, "");
      };
    },
    handImage(e) {
      for (var i = 0; i < e.target.files.length; i++) {
        const selectImage = e.target.files[i];
        this.createBase64(selectImage);
      }
    },
    createBase64(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        //this.photos = e.target.result;
        this.arrlist.push(e.target.result.split("base64,")[1]);
      };
      reader.readAsDataURL(fileobj);
    },
    async updpho() {
      const { photo } = this;
      console.log(photo);
      var resultu = await updphotoins(
        this.token,
        this.insid,
        photo.split("base64,")[1]
      );
      this.upph = resultu.data;
      console.log(this.upph);
      window.location.reload(3000);
    },
    async addimg() {
      const { imag } = this;
      console.log(imag);
      //console.log(this.imag)
      if (imag != "") {
        var resultu = await addimgs(this.token, this.insid, imag);
        this.adph = resultu.data;
        console.log(this.adph);
        try {
          console.log("****");
          var result77 = await getinsid(this.insid);
          this.insit = result77.data;
          console.log(this.insit);
          this.phot = this.insit.data.photo;
          this.slider = this.insit.data.slider;
          this.im = this.insit.data.slider.length;
          console.log("===================");
          console.log(this.slider);
          console.log("===================");
          console.log("-----------------------------------------");
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("error");
      }
    },
    async delimgs(imge) {
      var resultu = await delimgs(this.token, this.insid, imge);
      this.del = resultu.data;
      console.log(this.del);
      var result7 = await getinsid(this.insid);
      this.insit = result7.data;
      console.log(this.insit);
      this.slider = this.insit.data.slider;
      this.im=this.insit.data.slider.length
    },
  },
};
</script>
