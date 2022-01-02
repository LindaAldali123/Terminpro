<template>
	<div class="addservic" v-if="type === 'owner'">
		<app-header />
		<div class="clearfix"></div>
		<div class="row">
			<div class="col-md-3">
				<div class="side">
					<h3 class="bold">Build Insititution</h3>
					<hr />
					<ul>
						<!--<li
							@click.prevent="
								selected = 'Addplan';
								i = 0;
							"
						>
							<a :style="{ color: color }" href="#">The Plan</a>
						</li>-->
						<!--selected = 'Addser1';-->
						<li @click.prevent="i = 0">
							<a @click.prevent="ucolor" :style="{ color: colori }" href="#"> Insititution</a>
						</li>
						<!--selected = 'subscribeplan';-->
						<li @click.prevent="i = 1">
							<a
								@click.prevent="
									plans();
									ucolor11;
								"
								:style="{ color: color11 }"
								href="#"
							>
								Plans</a
							>
						</li>
						<li
							@click="
								selected = 'Addser2';
								i = 2;
							"
						>
							<a @click.prevent="ucolor2" :style="{ color: color2 }" href="#"> Services</a>
						</li>
						<li
							@click="
								selected = 'Addser3';
								i = 3;
							"
						>
							<a @click.prevent="ucolor3" :style="{ color: color3 }" href="#"> Employees</a>
						</li>
						<li
							@click="
								selected = 'Payser4';
								i = 4;
							"
						>
							<a @click.prevent="ucolor4" :style="{ color: color4 }" href="#"> Payment</a>
						</li>
						<!--<li
							@click="
								selected = 'Addser33';
								i = 5;
							"
						>
							<a @click.prevent="ucolor5" :style="{ color: color5 }" href="#"> Step 5</a>
						</li>
						<li
							@click="
								selected = 'Addser5';
								i = 6;
							"
						>
							<a @click.prevent="ucolor6" :style="{ color: color6 }" href="#"> Step 6</a>
						</li>-->
					</ul>
				</div>
			</div>
			<div class="col-md-9">
				<div class="das">
					<div v-if="insid === 'null' && !selected">
						<Addser1 />
					</div>
					<div @click.prevent="i = 2" v-if="insid !== 'null' && !selected">
						<Addser2 />
					</div>
					<div v-if="selected !== 'Plan'">
						<component :is="selected"></component>
					</div>
				</div>
				<div class="bu">
					<span
						class="pre"
						v-if="i > 0"
						@click.prevent="
							selected = select[i - 1];
							i--;
							nepr();
						"
					>
						<button>Prev</button>
					</span>
					<span
						class="nex"
						v-if="i < 4"
						@click.prevent="
							selected = select[i + 1];
							i++;
							nepr();
						"
					>
						<button>Next</button>
					</span>
					<span class="add" v-if="i === 4">
						<br />
						<br />
						<button @click.prevent="sub">Submit For Add Another Insititution</button>
					</span>
				</div>
			</div>
		</div>
		<!--<Addservic />-->
		<div class="clearfix"></div>
		<Footer />
		<a href="#" class="back-to-top"><i class="fa fa-home"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
//import subscribeplan from '@/components/subscribeplan.vue';
import Addser1 from '@/components/Addser1.vue';
import Addser2 from '@/components/Addser2.vue';
import Addser3 from '@/components/Addser3.vue';
//import Addplan from '@/components/Addplan.vue';
import Payser4 from '@/components/Payser4.vue';
import Plan from './Plan.vue';
import Footer from '@/components/Footer.vue';
import VueCookies from 'vue-cookies';
export default {
	name: 'Home',
	components: {
		AppHeader,
		//subscribeplan,
		Plan,
		//Addplan,
		//Addservic,
		Addser1,
		Addser2,
		Addser3,
		//Addser33,
		Payser4,
		//Addser5,
		Footer,
	},
	data() {
		return {
			selected: '',
			select: ['Addser1', 'Plan', 'Addser2', 'Addser3', 'Payser4'],
			i: 0,
			type: VueCookies.get('session').type,
			color: 'var(--gr-color)',
			colori: 'gray',
			color2: 'gray',
			color3: 'gray',
			color4: 'gray',
			color11: 'gray',
			insid: VueCookies.get('insid'),
			nu: null,
		};
	},
	async mounted() {
		//if (this.selected == 'Plan' && this.i == 1) {
		//	this.$router.push('/plan');
		//}
	},
	methods: {
		nepr() {
			console.log(this.selected);
			console.log(this.insid);
			if (this.selected == 'Plan') {
				this.$router.push('/plan');
			} else {
				console.log('*****');
			}
		},
		plans() {
			this.$router.push('/plan');
		},
		ucolor() {
			this.colori = 'var(--gr-color)';
		},
		ucolor11() {
			this.color11 = 'var(--gr-color)';
		},
		ucolor2() {
			this.color2 = 'var(--gr-color)';
		},
		ucolor3() {
			this.color3 = 'var(--gr-color)';
		},
		ucolor4() {
			this.color4 = 'var(--gr-color)';
		},

		sub() {
			console.log(this.insid);
			VueCookies.remove(this.insid);
			//VueCookies.remove('serid');
			//VueCookies.remove('empid');
			this.insid = this.nu;
			VueCookies.set('insid', this.nu);
			console.log('+++=');
			console.log(this.insid);
			//this.$router.push('/login');
		},
	},
};
</script>
<style scoped></style>
