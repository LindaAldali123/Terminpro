<template>
	<div class="catede">
		<app-header />
		<div class="clearfix"></div>
		<Categorydetail />
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import Categorydetail from '@/components/Categorydetail.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'categorydetail',
	components: {
		AppHeader,
		Categorydetail,
		Footer,
	},
};
</script>
<style scoped></style>
