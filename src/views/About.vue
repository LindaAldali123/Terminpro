<template>
  <div class="about">
    <app-header />
    <div class="clearfix"></div>
    <Mobil />
    <div class="clearfix"></div>
    <Footer />
    <a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
  </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import Mobil from "@/components/Mobil.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "about",
  components: {
    AppHeader,
    Mobil,
    Footer,
  },
};
</script>
