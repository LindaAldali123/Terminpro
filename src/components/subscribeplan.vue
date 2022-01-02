<template>
	<div class="plans">
		<div class="container">
			<carousel
				:items="3"
				:autoplay="true"
				:dots="true"
				:loop="true"
				:margin="60"
				:nav="false"
				:autoplaySpeed="true"
				:autoplayTimeout="5000"
				:autowidth="true"
				:mouseDrag="true"
				:responsive="{
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					1000: {
						items: 3,
					},
					1200: {
						items: 3,
					},
				}"
				v-if="plans"
			>
				<div class="item" v-for="pl in plans" v-bind:key="pl._id">
					<div class="plan">
						<div class="sub" v-if="hide !== pl._id">
							<button @click.prevent="subscrib(pl._id)">Subscribe</button>
						</div>
						<div class="sub" v-if="hide === pl._id">
							<button @click.prevent="unsubscrib()">Un Subscribe</button>
						</div>
						<ul>
							<li>
								<i class="fa fa-check"></i> Plan Name:<span> {{ pl.name }} </span>
							</li>
							<li>
								<i class="fa fa-check"></i> Price:<span> {{ pl.price }}</span>
							</li>
							<li>
								<i class="fa fa-check"></i> Description:<span> {{ pl.description }}</span>
							</li>
							<li>
								<i class="fa fa-check"></i> Employee Limit:<span> {{ pl.employeeLimit }}</span>
							</li>
							<li>
								<i class="fa fa-check"></i> Services Limit:<span> {{ pl.serviceLimit }}</span>
							</li>
						</ul>
					</div>
				</div>
			</carousel>
			<!--<div class="bu">
				<span class="nex" @click.prevent="sers()">
					<button>Next</button>
				</span>
			</div>-->
		</div>
	</div>
</template>
<script>
import VueCookies from 'vue-cookies';
import { getplan } from '../graph/Quries.js';
import { subscrib } from '../graph/Quries.js';
import { unsubscrib } from '../graph/Quries.js';
import { getinsid } from '../graph/Quries.js';
import carousel from 'vue-owl-carousel';
export default {
	name: 'subscribeplan',
	components: {
		carousel,
	},
	data() {
		return {
			plans: '',
			insid: VueCookies.get('insid'),
			token: VueCookies.get('session').token,
			hide: '',
			insit: '',
		};
	},
	async mounted() {
		console.log(this.hide);
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
		if (this.insid != 'null' && this.insid != null) {
			try {
				console.log('****');
				var result7 = await getinsid(this.insid);
				this.insit = result7.data;
				console.log(this.insit);
				console.log(this.insit.data.subscription);
				this.hide = this.insit.data.subscription.plan;
				console.log(this.hide);
				console.log(this.insit.data.slider);
				this.length = this.insit.data.slider.length;
				console.log(this.length);
				var i = 0;
				while (i <= this.length) {
					this.j = i;
					i++;
				}
				console.log('-----------------------------------------');
			} catch (error) {
				console.error(error);
			}
		} else {
			console.log('error');
		}
	},
	methods: {
		async subscrib(id) {
			try {
				console.log(id);
				var results = await subscrib(id, this.insid, this.token);
				var status = results[0];
				console.log(status);
				var resultlogin = results[1];
				if (status === 500) {
					console.log('-----error-------');
					console.log(resultlogin.msg);
					this.error = resultlogin.msg;
					console.log('-----error-------');
				} else if (status === 404) {
					console.log('-----error-------');
					console.log(resultlogin.msg);
					this.error = resultlogin.msg;
					console.log('-----error-------');
				} else {
					console.log('==================');
					console.log(results.data);
					//this.success = result8.data.msg + ' Check Your Email';
					console.log(results);
					console.log(results.config.data);
					console.log(JSON.parse(results.config.data).id);
					window.location.reload(3000);
					// console.log(results.config.data.id);
					//this.hide = JSON.parse(results.config.data).id;
					//this.success = 'The Password Changed';
				}
			} catch (error) {
				console.log(error);
			}
		},
		async unsubscrib() {
			try {
				var resultu = await unsubscrib(this.insid, this.token);
				var status = resultu[0];
				console.log(status);
				var resultlogin = resultu[1];
				if (status === 500) {
					console.log('-----error-------');
					console.log(resultlogin.msg);
					this.error = resultlogin.msg;
					console.log('-----error-------');
				} else if (status === 404) {
					console.log('-----error-------');
					console.log(resultlogin.msg);
					this.error = resultlogin.msg;
					console.log('-----error-------');
				} else {
					console.log('==================');
					console.log(resultu.data);
					//this.success = result8.data.msg + ' Check Your Email';
					console.log(resultu);
					window.location.reload(3000);
					//this.hide = '';
					//this.success = 'The Password Changed';
				}
			} catch (error) {
				console.log(error);
			}
		},
		sers() {
			this.$router.push('/addservic');
		},
	},
};
</script>
