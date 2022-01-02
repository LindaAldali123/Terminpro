<template>
	<div class="addservic" v-if="type === 'owner'">
		<app-header />
		<div class="clearfix"></div>
		<div class="row">
			<div class="col-md-3">
				<div class="side">
					<h3 class="bold">Update Insititution</h3>
					<hr />
					<ul>
						<li
							@click.prevent="
								selected = 'Updateinsit';
								j = 0;
							"
						>
							<a @click.prevent="ucolor" :style="{ color: colori }" href="#"> Insititution</a>
						</li>
						<li
							@click.prevent="
								selected = 'Updatephoto';
								j = 1;
							"
						>
							<a @click.prevent="ucolor" :style="{ color: colori }" href="#">Photo</a>
						</li>
						<li
							@click.prevent="
								selected = 'subscribeplan';
								j = 2;
							"
						>
							<a @click.prevent="ucolor11" :style="{ color: color11 }" href="#"> Plans</a>
						</li>
						<li
							@click="
								selected = 'Updateservic';
								j = 3;
							"
						>
							<a @click.prevent="ucolor2" :style="{ color: color2 }" href="#"> Services</a>
						</li>
						<li
							@click="
								selected = 'Updateemp';
								j = 4;
							"
						>
							<a @click.prevent="ucolor3" :style="{ color: color3 }" href="#"> Employees</a>
						</li>
						<li
							@click="
								selected = 'Addser2';
								j = 5;
							"
						>
							<a @click.prevent="ucolor5" :style="{ color: color5 }" href="#">Add Services</a>
						</li>
						<li
							@click="
								selected = 'Addser3';
								j = 6;
							"
						>
							<a @click.prevent="ucolor6" :style="{ color: color6 }" href="#">Add Employees</a>
						</li>
						<li
							@click="
								selected = 'Payser4';
								j = 7;
							"
						>
							<a @click.prevent="ucolor7" :style="{ color: color7 }" href="#">Payment</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-9">
				<div class="das">
					<div v-if="!selected">
						<Updateinsit />
					</div>
					<component :is="selected"></component>
				</div>
				<div class="bu">
					<span
						class="pre"
						v-if="j > 0"
						@click.prevent="
							selected = select[j - 1];
							j--;
						"
					>
						<button>Prev</button>
					</span>
					<span
						class="nex"
						v-if="j < 7"
						@click.prevent="
							selected = select[j + 1];
							j++;
						"
					>
						<button>Next</button>
					</span>
					<!--<span class="add" v-if="i === 3">
						<br />
						<br />
						<button @click.prevent="sub">Submit</button>
					</span>-->
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
import subscribeplan from '@/components/subscribeplan.vue';
import Updateinsit from '@/components/Updateinsit.vue';
import Updateservic from '@/components/Updateservic.vue';
import Updateemp from '@/components/Updateemp.vue';
import Updatephoto from '@/components/Updatephoto.vue';
import Footer from '@/components/Footer.vue';
import VueCookies from 'vue-cookies';
import Addser2 from '@/components/Addser2.vue';
import Addser3 from '@/components/Addser3.vue';
import Payser4 from '@/components/Payser4.vue';
export default {
	name: 'updateins',
	components: {
		AppHeader,
		subscribeplan,
		Updateinsit,
		Updateservic,
		Updatephoto,
		Updateemp,
		Footer,
		Addser2,
		Addser3,
		Payser4,
	},
	data() {
		return {
			selected: '',
			select: ['Updateinsit', 'Updatephoto', 'subscribeplan', 'Updateservic', 'Updateemp', 'Addser2', 'Addser3','Payser4'],
			j: 0,
			type: VueCookies.get('session').type,
			color: 'var(--gr-color)',
			colori: 'gray',
			color2: 'gray',
			color3: 'gray',
			color4: 'gray',
			color5: 'gray',
			color6: 'gray',
			color7: 'gray',
			color11: 'gray',
			insid: VueCookies.get('insid'),
			nu: null,
		};
	},
	methods: {
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
		ucolor5() {
			this.color5 = 'var(--gr-color)';
		},
		ucolor6() {
			this.color6 = 'var(--gr-color)';
		},
		ucolor7() {
			this.color7 = 'var(--gr-color)';
		},
		sub() {
			console.log(this.insid);
			VueCookies.remove(this.insid);
			//VueCookies.remove('serid');
			//VueCookies.remove('empid');
			VueCookies.set('insid', this.nu);
			console.log('+++=');
			console.log(this.insid);
			//this.$router.push('/login');
		},
	},
};
</script>
<style scoped></style>
