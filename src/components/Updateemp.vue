<template>
  <div class="addser3">
    <h3>Update Employee</h3>
    <div class="vice">
      <div class="row">
        <div class="col-md-3" v-for="emp in employe" v-bind:key="emp.id">
          <div class="card ser">
            <div class="card-image">
              <img :src="'data:image/jpg;base64,' + emp.photo" />
            </div>
            <div class="card-title">
              Name Employee: {{ emp.firstName }} {{ emp.lastName }}
            </div>
            <div class="card-footer">Job Title: {{ emp.specialty }}</div>
            <div class="card-button">
              <button @click.prevent="updatempid(emp._id)">
                Update Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div class="form-group">
        <div class="form-wrapper">
          <label class="bold" for=""
            ><i class="fa fa-user-o"></i>FirstName</label
          >
          <input type="text" class="form-control" v-model="fnm" required />
        </div>
        <div class="form-wrapper">
          <label class="bold" for=""
            ><i class="fa fa-user-o"></i>LastName</label
          >
          <input type="text" class="form-control" v-model="lnm" required />
        </div>
      </div>
      <div class="form-wrapper">
        <label class="bold" for=""><i class="fa fa-envelope-o"></i>Email</label>
        <input type="email" class="form-control" v-model="emai" required />
      </div>

      <div class="form-wrapper">
        <label class="bold" for=""><i class="fa fa-lock"></i>Password</label>
        <input type="password" class="form-control" v-model="pas" required />
      </div>

      <div class="hom Que7 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-home"></i>
          Speciality
        </label>

        <input
          class="in form-control"
          type="text"
          name="text"
          placeholder="Job Title"
          aria-label="Address"
          v-model="spec"
          required
        />
      </div>
      <div class="form-wrapper phot" v-if="img || fnm">
        <hr />
        <img :src="'data:image/jpg;base64,' + img" />
      </div>
      <div class="Que5 form-wrapper">
        <label class="bold"
          ><i class="fa fa-file-picture-o"></i>Select Employee Image</label
        >
        <input
          type="file"
          ref="files"
          class="form-control"
          id="files"
          @change="haImage"
          name="img"
          accept="image"
          required
        />
        <button v-if="img || fnm" class="upd" @click.prevent="updphe(id)">
          Update Image
        </button>
        <hr />
      </div>
      <div class="red">
        {{ error }}
      </div>
      <div class="gree" v-if="succes">
        {{ succes }}
      </div>
      <div class="Button">
        <button
          :disabled="!emai && !fnm && !lnm && !pas && !spec"
          @click.prevent="updateemp(id)"
          class=""
        >
          Update Employee
        </button>
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
import { updphotoemp } from "../graph/Quries.js";
import { getempbyid } from "../graph/Quries.js";
import { getemp } from "../graph/Quries.js";
import { updateemp } from "../graph/Quries";
import VueCookies from "vue-cookies";
export default {
  name: "updateemp",
  data() {
    return {
      //insid: VueCookies.get('insid'),
      token: VueCookies.get("session").token,
      insid: VueCookies.get("insid"),
      employe: "",
      emai: "",
      fnm: "",
      emp: "",
      lnm: "",
      pas: "",
      spec: "",
      empid: "",
      succes: "",
      error: "",
      photo: "",
      img: "",
      upe: "",
    };
  },
  async mounted() {
    try {
      console.log("****");
      console.log(this.insid);
      var result10 = await getemp(this.insid);
      this.employe = result10.data.data;
      console.log(this.employe);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    haImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Im(selectedImage);
    },
    createBase64Im(fileobj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.canvasupdURL(e.target.result);
      };
      reader.readAsDataURL(fileobj);
    },
    canvasupdURL(path) {
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
    async updateemp(id) {
      //const { photo } = this;
      //console.log(photo);
      try {
        var result4 = await updateemp(
          this.token,
          id,
          this.insid,
          //this.emai,
          this.fnm,
          this.lnm,
          this.pas,
          this.spec
          //photo.split('base64,')[1]
        );
        console.log(this.token);
        var status = result4[0];
        console.log(status);
        var resultr = result4[1];
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
        } else if (status === 404) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;

          console.log("-----error-------");
        } else {
          console.log("==================");
          //this.$router.push('/login');
          console.log(result4);
          //console.log(result4.data.data.id);
          //this.empid = result4.data.data.id;
          //VueCookies.set('empid', this.empid);
          this.succes = "The Employee Success Updated ";
          console.log("succes");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updatempid(eid) {
      //  if(this.sid != null || this.sid !='null' || this.sid != ''){
      try {
        console.log("****");
        console.log(eid);
        var result99 = await getempbyid(eid);
        this.emp = result99.data.data;
        console.log(this.emp);
        this.fnm = this.emp.firstName;
        this.lnm = this.emp.lastName;
        this.emai = this.emp.email;
        this.spec = this.emp.specialty;
        this.pas = this.emp.password;
        this.img = this.emp.photo;
        this.id = this.emp.id;
        console.log(this.sers);
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    },
    async updphe(id) {
      const { photo } = this;
      console.log(photo);
      var resultu = await updphotoemp(
        this.token,
        id,
        photo.split("base64,")[1]
      );
      this.upe = resultu.data;
      console.log(this.upe);
      try {
        var result19 = await getempbyid(id);
        this.emp = result19.data.data;
        this.img = this.emp.photo;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
      //window.location.reload(3000);
    },
  },
};
</script>
