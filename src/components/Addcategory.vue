<template>
  <div class="wrapper2">
    <div class="inner">
      <form>
        <h3 class="bold">Add Category Form</h3>
        <!--<div class="form-group">-->
        <div class="form-wrapper">
          <label for=""><i class="fa fa-file-o"></i>Name Category</label>
          <input type="text" class="form-control" v-model="name" required />
        </div>
        <div class="Que5 form-wrapper">
          <label class="bold"
            ><i class="fa fa-file-picture-o"></i>Select Logo Image</label
          >
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
        <div class="red">
          {{ error3 }}
        </div>

        <div class="red">
          {{ error1 }}
          {{ error2 }}
        </div>
        <div class="gree" v-if="success">
          {{ success }}
        </div>
        <button @click.prevent="addcate" :disabled="!name">
          ADD CATEGORY
        </button>
      </form>
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import { addcate } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "addadmin",
  data() {
    return {
      name: "",
      image: "",
      token: VueCookies.get("sessionn").tokenn,
      error1: "",
      error2: "",
      error3: "",
      num: 9,
      numb: null,
      success: "",
    };
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.canvascatURL(e.target.result);
      };
      reader.readAsDataURL(fileobj);
    },
    canvascatURL(path) {
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
        this.image = rez;
      };
    },
    async addcate() {
      this.success = "";
      this.error = "";
      const { image } = this;
      console.log(image);
      try {
        var resultca = await addcate(
          this.token,
          this.name,
          image.split("base64,")[1]
        );
        var status = resultca[0];
        console.log(status);
        var resultre = resultca[1];
        this.name = "";
        if (status === 409) {
          console.log("-----error-------");
          console.log(resultre.msg);
          this.error3 = resultre.msg;
          console.log("-----error-------");
        } else if (status === 422) {
          console.log("-----error-------");
          console.log(resultre.msg);
          this.error3 = resultre.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          console.log(resultca);
          this.success = "The Category Added";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
