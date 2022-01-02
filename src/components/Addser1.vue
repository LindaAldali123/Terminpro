<template>
  <div class="addser1">
    <h3>The Insititution</h3>
    <form @submit.prevent="addinst" action="#">
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-user-o"></i>
          Name The Insititution
        </label>
        <input type="text" class="form-control" v-model="name" required />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-envelope-o"></i>
          Email
        </label>
        <input type="text" class="form-control" v-model="email" required />
      </div>
      <div class="Que1 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-blind"></i>
          What the Category?
        </label>
        <select name="people" id="people" v-model="category">
          <option v-for="ca in categor" v-bind:key="ca._id" :value="ca.name">
            {{ ca.name }}
          </option>
        </select>
      </div>
      <div class="form-wrapper">
        <label class="bold" for="">
          <i class="fa fa-home"></i>
          SubCategory
        </label>
        <input type="text" class="form-control" v-model="subcat" required />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-vcard-o"></i>
          SubTitle
        </label>

        <textarea
          class="form-control"
          cols="70"
          rows="2"
          v-model="subtitle"
          placeholder="Write A short event summary ."
          required
        ></textarea>
        <br />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-vcard-o"></i>
          Description
        </label>

        <textarea
          class="form-control"
          cols="70"
          rows="6"
          v-model="description"
          placeholder="Write A short event summary ."
          required
        ></textarea>
        <br />
      </div>
      <div class="Que5 form-wrapper">
        <label class="bold">
          <i class="fa fa-file-picture-o"></i>
          Select Logo Image
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
      </div>
      <div class="Que5 form-wrapper">
        <label class="bold">
          <i class="fa fa-file-picture-o"></i>
          Select Image For Insititution
        </label>
        <input
          type="file"
          ref="files"
          multiple
          class="form-control"
          id="files"
          @change="handImage"
          name="img"
          accept="image"
          required
        />
      </div>
      <h4>The Address</h4>
      <div class="form-group">
        <div class="form-wrapper">
          <label class="bold" for="">
            <i class="fa fa-home"></i>
            City
          </label>
          <input type="text" class="form-control" v-model="city" required />
        </div>
        <div class="form-wrapper">
          <label class="bold" for="">
            <i class="fa fa-home"></i>
            Country
          </label>
          <input type="text" class="form-control" v-model="country" required />
        </div>
      </div>
      <div class="form-group">
        <div class="form-wrapper">
          <label class="bold" for="">
            <i class="fa fa-phone"></i>
            Phone
          </label>
          <!--<input type="text" class="form-control" v-model="phone" required />-->

          <vue-tel-input
            style="
              width: 100%;
              padding: 5px;
              border-radius: 16px;
              border: 2px solid #ccc;
            "
            v-model="phone"
            v-bind="bindProps"
          >
            <template slot="arrow-icon">
              <span class="vti_dropdown"></span>
            </template>
          </vue-tel-input>
        </div>
        <div class="form-wrapper">
          <label class="bold" for="">
            <i class="fa fa-paypal"></i>
            Paypal Email
          </label>
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
            type="number"
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
            type="number"
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
      <div class="Button" v-if="insid === null">
        <input
          type="submit"
          value="ADD Insititution"
          :disabled="!email && !name && !description && !category"
          class=""
        />
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
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import VueCookies from "vue-cookies";
import { addinsitution } from "../graph/Quries.js";
import { getcate } from "../graph/Quries.js";
export default {
  name: "addser1",
  components: {
    VueTelInput,
  },
  data() {
    return {
      open: false,
      username: VueCookies.get("session").username,
      token: VueCookies.get("session").token,
      userid: VueCookies.get("session").userid,
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
      photos: "",
      arrlist: [],
      success: "",
      insid: null,
      categor: "",
      bindProps: {
        inputOptions: {
          showDialCode: true,
        },
      },
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
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // this.photo = e.target.result;
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
    handImage(e) {
      var lena = e.target.files.length;
      var lenb = 0;
      if (lena >= 4) {
        this.error = "Please Select less from 4 Image";
        lenb = 4;
      } else {
        lenb = lena;
      }
      for (var i = 0; i < lenb; i++) {
        const selectImage = e.target.files[i];
        this.createBase64(selectImage);
      }
      console.log(this.arrlist);
    },
    createBase64(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let re = e.target.result;
        this.canvasDataURL(re); // start compression
      };
      reader.readAsDataURL(fileObject);
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
        var rez = base64.replace(/^data:image\/(png|jpeg);base64,/, "");
        this.arrlist.push(rez);
      };
    },
    async addinst() {
      this.error = "";
      this.success = "";
      const { photo } = this;
      const { arrlist } = this;
      console.log(arrlist);
      console.log(this.openingDays);
      try {
        var result2 = await addinsitution(
          this.token,
          this.userid,
          this.email,
          this.name,
          this.subtitle,
          this.description,
          this.category,
          this.subcat.split(","),
          arrlist,
          this.country,
          this.city,
          this.phone,
          photo.split("base64,")[1],
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
          //this.$router.push('/login');
          console.log(result2);
          console.log(result2.data.data.id);
          this.insid = result2.data.data.id;
          VueCookies.set("insid", this.insid);
          this.success = "The Insititution Success Added ";
          //window.location.reload(3000);
          console.log("success");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
