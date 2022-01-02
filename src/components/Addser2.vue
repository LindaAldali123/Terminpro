<template>
  <div class="addser2">
    <h3 class="bold">The Services</h3>
    <form>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-file"></i> Name Servic </label>
        <input type="text" class="form-control" v-model="nam" required />
      </div>
      <div class="Que1 form-wrapper" data-aos="fade-up">
        <p class="bold">
          <i class="fa fa-blind"></i>
          What Category:
        </p>
        <input
          placeholder="Select Category"
          v-model="cate"
          list="Que1"
          class="form-control"
          required
        />
        <datalist id="Que1">
          <option value="Femal"> </option>
          <option value="Male"> </option>
          <option value="Other"> </option>
        </datalist>
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-vcard-o"></i> Description </label>

        <textarea
          class="form-control"
          v-model="descrip"
          cols="70"
          rows="3"
          placeholder="Write A short event summary ."
          required
        >
        </textarea>
        <br />
      </div>
      <div class="Que2 form-wrapper" data-aos="fade-up">
        <label class="bold"> <i class="fa fa-vcard-o"></i>Time Servic </label>
        <input type="number" v-model="tim" class="form-control" required />
      </div>
      <div class="hom Que8 form-wrapper" data-aos="fade-up">
        <p class="bold">
          <i class="fa fa-hand-o-up"></i>
          Price of your servic
        </p>

        <input
          class="in form-control"
          type="number"
          name="number"
          v-model="pric"
          placeholder="price events"
          aria-label="price"
          required
        />
      </div>
      <div class="hom Que8 form-wrapper" data-aos="fade-up">
        <p class="bold">
          <i class="fa fa-star"></i>
          Retainer of your servic
        </p>

        <input
          class="in form-control"
          type="number"
          name="number"
          v-model="ret"
          placeholder="ratainr servic"
          aria-label="retaine"
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
        <button
          :disabled="!nam && !cate && !descrip && !tim && !pric && !ret"
          @click.prevent="addservic"
          class=""
        >
          ADD Servic
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
import { addservic } from "../graph/Quries";
import VueCookies from "vue-cookies";
export default {
  name: "addser2",
  data() {
    return {
      insid: VueCookies.get("insid"),
      token: VueCookies.get("session").token,
      nam: "",
      cate: "",
      descrip: "",
      tim: "",
      pric: "",
      ret: "",
      serid: "",
      succes: "",
      error: "",
    };
  },
  methods: {
    async addservic() {
      this.error = "";
      this.success = "";
      try {
        var result3 = await addservic(
          this.token,
          this.insid,
          this.nam,
          this.cate,
          this.descrip,
          this.tim,
          this.pric,
          this.ret
        );
        console.log(this.token);
        var status = result3[0];
        console.log(status);
        var resultr = result3[1];
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
        } else if (status === 400) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;

          console.log("-----error-------");
        } else {
          console.log("==================");
          //this.$router.push('/login');
          console.log(result3);
          console.log(result3.data.data.id);
          this.serid = result3.data.data.id;
          VueCookies.set("serid", this.serid);
          this.succes = "The Servic Success Added ";
          console.log("succes");
          this.nam = "";
          this.cate = "";
          this.descrip = "";
          this.tim = "";
          this.pric = "";
          this.ret = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
