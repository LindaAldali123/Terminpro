<template>
	<div class="booking">
		<div class="backeve"></div>
		<!--<app-header />-->
		<div class="clearfix"></div>
		<Bookser />
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
//import AppHeader from '@/components/AppHeader.vue';
import Bookser from '@/components/Bookser.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'booking',
	components: {
		//AppHeader,
		Bookser,
		Footer,
	},
};
</script>
