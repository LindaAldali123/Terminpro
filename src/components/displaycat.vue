<template>
  <div class="board4">
    <div class="container">
      <div class="row">
        <div class="col-md-12 dash4">
          <h2 class="bold">Category</h2>
          <hr />

          <form class="Events">
            <div class="Evn row" v-for="catg in categor" v-bind:key="catg._id">
              <div class="col-md-8">
                <div class="post-item">
                  <div class="row">
                    <img
                      class="col-md-4"
                      :src="'data:image/jpg;base64,' + catg.image"
                      alt=""
                    />
                    <!--:src="'data:image/jpg;base64,' + convimg(catg.image.data)"-->
                    <div class="col-md-8">
                      <h4>
                        <a href="#">{{ catg.name }}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4" style="width: 100%;">
                <div class="row">
                  <div class="col-md-6"></div>
                  <div class="col-md-6">
                    <div class="btto">
                      <button class="rj" @click.prevent="delcat(catg._id)">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
import { getcate } from "../graph/Quries.js";
import { deletcate } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "displaycat",
  data() {
    return {
      categor: "",
      token: VueCookies.get("sessionn").tokenn,
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
    async delcat(cid) {
      try {
        var result3 = await deletcate(this.token, cid);

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
        } else {
          console.log("==================");
          //this.$router.push('/login');
          console.log(result3);
          window.location.reload(3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
