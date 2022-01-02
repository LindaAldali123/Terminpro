<template>
  <div class="dash" v-if="tokenn">
    <h3 class="bold h">
      Dashboard
      <span v-if="tokenn" style="float: right;" class="bold"
        ><a @click.prevent="logout">logout</a></span
      >
    </h3>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <div class="sid si">
          <ul>
            <li @click.prevent="selected = 'displaycat'">Display Category</li>
            <li @click.prevent="selected = 'Addadmin'">Add Admin</li>
            <li @click.prevent="selected = 'Addcategory'">Add Category</li>
            <li @click.prevent="selected = 'Displayplan'">Display Plan</li>
            <li @click.prevent="selected = 'Addplan'">Add Plan</li>
            <li>Setting</li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div v-if="!selected">
          <displaycat />
        </div>
        <component :is="selected"></component>
        <div class="bu">
          <span
            class="pre"
            v-if="j > 0"
            @click.prevent="
              selected = selet[j - 1];
              j--;
            "
          >
            <button>Prev</button>
          </span>
          <span
            class="nex"
            v-if="j < 4"
            @click.prevent="
              selected = selet[j + 1];
              j++;
            "
          >
            <button>Next</button>
          </span>
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
import Addadmin from "./Addadmin.vue";
import Addcategory from "./Addcategory.vue";
import displaycat from "./displaycat.vue";
import Displayplan from "./Displayplan.vue";
import Addplan from "@/components/Addplan.vue";
import VueCookies from "vue-cookies";
export default {
  name: "mobil",
  components: {
    Addadmin,
    displaycat,
    Addcategory,
    Displayplan,
    Addplan,
  },
  data() {
    return {
      selected: "",
      tokenn: VueCookies.get("sessionn").tokenn,
      usernamee: VueCookies.get("sessionn").usernamee,
      selet: [
        "displaycat",
        "Addadmin",
        "Addcategory",
        "Displayplan",
        "Addplan",
      ],
      j: 0,
    };
  },
  methods: {
    logout() {
      VueCookies.remove("sessionn");
      VueCookies.set("sessionn", { usernamee: "", tokenn: null });
      this.$router.push("/loginadmin");
    },
  },
};
</script>
