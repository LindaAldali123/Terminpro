<template>
	<div class="venud">
		<app-header />
		<div class="clearfix"></div>
		<Venusdetail />
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import Venusdetail from '@/components/Venusdetail.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'Home',
	components: {
		AppHeader,
		Venusdetail,
		Footer,
	},
};
</script>
<style scoped></style>
