<template>
  <div class="addplan">
    <h3>The Plan</h3>
    <form>
      <div class="hom Que7 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-home"></i>
          Name Plan
        </label>

        <input
          class="in form-control"
          type="text"
          name="text"
          placeholder=""
          v-model="pname"
          aria-label="Address"
          required
        />
      </div>
      <div class="hom Que7 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-home"></i>
          Sku Plan
        </label>

        <input
          class="in form-control"
          type="text"
          name="text"
          placeholder=""
          v-model="psku"
          aria-label="Address"
          required
        />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-vcard-o"></i> Description </label>

        <textarea
          class="form-control"
          v-model="pdes"
          cols="70"
          rows="3"
          placeholder="Write A short event summary ."
          required
        >
        </textarea>
        <br />
      </div>
      <div class="hom Que7 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-home"></i>
          Price
        </label>

        <input
          class="in form-control"
          type="text"
          name="text"
          v-model="ppri"
          placeholder=""
          aria-label="Address"
          required
        />
      </div>
      <div class="hom Que8 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-hand-o-up"></i>
          Employee Limit
        </label>

        <input
          class="in form-control"
          type="number"
          name="number"
          v-model="pempl"
          placeholder=""
          aria-label="price"
          required
        />
      </div>
      <div class="hom Que8 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-hand-o-up"></i>
          Service Limit
        </label>

        <input
          class="in form-control"
          type="number"
          name="number"
          v-model="pserl"
          placeholder=""
          aria-label="price"
          required
        />
      </div>
      <div class="hom Que7 form-wrapper" data-aos="fade-up">
        <label class="bold">
          <i class="fa fa-home"></i>
          Time Subscribe
        </label>

        <input
          class="in form-control"
          type="text"
          name="text"
          v-model="ptim"
          placeholder=""
          aria-label="Address"
          required
        />
      </div>
      <div class="red">
        {{ error }}
      </div>
      <div class="gree" v-if="succes">
        {{ succes }}
      </div>
      <div class="Button">
        <!-- v-if="planid === null"-->
        <button @click.prevent="addplan" class="">
          ADD PLAN
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
import { addplan } from "../graph/Quries";
import VueCookies from "vue-cookies";
export default {
  name: "addplan",
  data() {
    return {
      token: VueCookies.get("sessionn").tokenn,
      pname: "",
      psku: "",
      pdes: "",
      ppri: "",
      pempl: "",
      pserl: "",
      ptim: "",
      error: "",
      succes: "",
      planid: null,
      empl: "",
      serl: "",
    };
  },
  methods: {
    async addplan() {
        this.succes="";
        this.error="";
      try {
        var result12 = await addplan(
          this.token,
          this.pname,
          this.psku,
          this.pdes,
          this.ppri,
          this.pempl,
          this.pserl,
          this.ptim
        );
        console.log(this.token);
        var status = result12[0];
        console.log(status);
        var resultr = result12[1];
        this.pname = "";
        this.psku = "";
        this.pdes = "";
        this.ppri = "";
        this.pempl = "";
        this.pserl = "";
        this.ptim = "";
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
          console.log(result12);
          console.log(result12.data.data.id);
          this.planid = result12.data.data.id;
          //this.empl = result12.data.config.data.employeeLimit;
          //this.serl = result12.data.config.data.serviceLimit;
          //console.log(this.empl);
          //console.log(this.serl);
          //	VueCookies.set('empid', this.empid);
          this.succes = "The Plan Success Added ";
          console.log("succes");
          this.pname = "";
          this.psku = "";
          this.pdes = "";
          this.ppri = "";
          this.pempl = "";
          this.pserl = "";
          this.ptim = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
