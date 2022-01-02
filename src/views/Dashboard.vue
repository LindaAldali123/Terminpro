<template>
	<div class="dashboard">
		<!--<app-header />-->
		<div class="container">
			<!--<div class="clearfix"></div>
		<Category />-->
			<div class="clearfix"></div>
			<div class="">
				<Dashboard />
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
//import AppHeader from '@/components/AppHeader.vue';
//import Category from '@/components/Category.vue';
import Dashboard from '@/components/Dashboard.vue';
export default {
	name: 'dashboard',
	components: {
		//AppHeader,
		//Category,
		Dashboard,
	},
};
</script>
<style scoped></style>
