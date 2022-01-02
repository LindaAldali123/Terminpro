<template>
	<div class="home">
		<app-header />
		<Slider />
		<div class="clearfix"></div>
		<Category />
		<div class="clearfix"></div>
		<Venues />
		<div class="clearfix"></div>
		<Account />
		<div class="clearfix"></div>
		<Mobil />
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import Category from '@/components/Category.vue';
import Slider from '@/components/Slider.vue';
import Venues from '@/components/Venues.vue';
import Account from '@/components/Account.vue';
import Mobil from '@/components/Mobil.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'Home',
	components: {
		AppHeader,
		Slider,
		Category,
		Venues,
		Account,
		Mobil,
		Footer,
	},
};
</script>
<style scoped></style>
