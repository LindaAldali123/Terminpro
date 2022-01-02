<template>
	<div class="plan">
		<app-header />
		<div class="pla">
			<div class="container">
				<subscribeplan />
				<div class="bu">
					<span class="nex" @click.prevent="sers()">
						<button>Next</button>
					</span>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import subscribeplan from '@/components/subscribeplan.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'plan',
	components: {
		AppHeader,
		subscribeplan,
		Footer,
	},
	methods: {
		sers() {
			this.$router.push('/addservic');
		},
	},
};
</script>
