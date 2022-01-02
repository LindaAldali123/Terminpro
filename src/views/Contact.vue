<template>
    <div class="contac">
        <app-header />
        <div class="clearfix"></div>
        <div class="con">
            <Contact />
        </div>
        <div class="clearfix"></div>
        <Footer />
        <a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
    </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "Home",
    components: {
        AppHeader,
        Contact,
        Footer
    }
};
</script>
<style scoped></style>
