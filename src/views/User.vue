<template>
	<div class="uss">
		<app-header />
		<div class="clearfix"></div>
		<div class="use">
			<User />
		</div>
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import User from '@/components/User.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'Home',
	components: {
		AppHeader,
		User,
		Footer,
	},
};
</script>
<style scoped></style>
