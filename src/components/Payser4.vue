<template>
	<div class="pay">
		<h3 class="bold">The Payment</h3>
		<form>
			<carousel
				:items="6"
				:autoplay="true"
				:dots="true"
				:loop="true"
				:margin="25"
				:nav="false"
				:autoplaySpeed="true"
				:autoplayTimeout="5000"
				:autowidth="true"
				:mouseDrag="true"
				:responsive="{
					0: {
						items: 2,
					},
					600: {
						items: 3,
					},
					1000: {
						items: 4,
					},
					1200: {
						items: 5,
					},
				}"
				v-if="plans"
			>
				<div class="item" v-for="plan in plans" v-bind:key="plan._id" data-aos="fade-up" data-aos-delay="100">
					<a @click.prevent="checkout(plan._id)">
						<div class="card">
							<div class="card-title">
								<p>{{ plan.name }}</p>
							</div>
							<div class="card-body">
								<p>{{ plan.price }}</p>
							</div>
							<div class="card-footer">
								<p>Payment</p>
							</div>
						</div>
					</a>
				</div>
			</carousel>
		</form>
	</div>
</template>
<script>
require(['aos'], function (AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import carousel from 'vue-owl-carousel';
import { getplan } from '../graph/Quries.js';
import { checkout } from '../graph/Quries.js';
import VueCookies from 'vue-cookies';
export default {
	name: 'payser4',
	components: { carousel },
	data() {
		return {
			insid: VueCookies.get('insid'),
			token: VueCookies.get('session').token,
			uid: VueCookies.get('session').userid,
			plans: '',
		};
	},
	async mounted() {
		try {
			console.log('****=================???????');
			var result6 = await getplan();
			this.plans = result6.data;
			console.log(this.plans);
			console.log('****');
			console.log('-----------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		async checkout(pid) {
			try {
				var resultch = await checkout(this.token, this.uid, pid, this.insid);
				console.log(this.token);
				var status = resultch[0];
				console.log(status);
				var resultr = resultch[1];
				if (status === 401) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;
					console.log('-----error-------');
				} else if (status === 422) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;
					console.log('-----error-------');
				} else if (status === 409) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;

					console.log('-----error-------');
				} else if (status === 404) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;

					console.log('-----error-------');
				} else if (status === 400) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;

					console.log('-----error-------');
				} else {
					console.log('==================');
					//this.$router.push('/login');
					console.log(resultch);
					console.log(resultch.data.redirect_url);
					//this.$router.push(resultch.data.redirect_url);
					window.open(resultch.data.redirect_url, '_parent');
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
