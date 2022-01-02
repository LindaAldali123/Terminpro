<template>
	<div class="addser2">
		<h3 class="bold">Update Services</h3>
		<div class="vice">
			<div class="row">
				<div class="col-md-3" v-for="servs in services" v-bind:key="servs._id">
					<div class="card ser">
						<div class="card-title">Name Servic: {{ servs.name }}</div>
						<div class="card-body">Description: {{ servs.description }}</div>
						<div class="card-footer">Price: {{ servs.price }}</div>
						<div class="card-button">
							<button @click.prevent="updateserid(servs._id)">Update Servic</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<form>
			<div class="Que2 form-wrapper" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-file"></i> Name Servic </label>
				<input type="text" class="form-control" v-model="nam" required />
			</div>
			<div class="Que1 form-wrapper" data-aos="fade-up">
				<p class="bold">
					<i class="fa fa-blind"></i>
					What Category:
				</p>
				<input placeholder="Select Category" v-model="cate" list="Que1" class="form-control" required />
				<datalist id="Que1">
					<option value="Femal"> </option>
					<option value="Male"> </option>
					<option value="Other"> </option>
				</datalist>
			</div>
			<div class="Que2 form-wrapper" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-vcard-o"></i> Description </label>

				<textarea
					class="form-control"
					v-model="descrip"
					cols="70"
					rows="3"
					placeholder="Write A short event summary ."
					required
				>
				</textarea>
				<br />
				<!--:value="(descrip = servs.description)"-->
			</div>
			<div class="Que2 form-wrapper" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-vcard-o"></i>Time Servic </label>
				<input type="text" v-model="tim" class="form-control" required />
			</div>
			<div class="hom Que8 form-wrapper" data-aos="fade-up">
				<p class="bold">
					<i class="fa fa-hand-o-up"></i>
					Price of your servic
				</p>

				<input
					class="in form-control"
					type="text"
					name="number"
					v-model="pric"
					placeholder="price events"
					aria-label="price"
					required
				/>
			</div>
			<div class="hom Que8 form-wrapper" data-aos="fade-up">
				<p class="bold">
					<i class="fa fa-star"></i>
					Retainer of your servic
				</p>

				<input
					class="in form-control"
					type="text"
					name="number"
					v-model="ret"
					placeholder="ratainr servic"
					aria-label="retaine"
					required
				/>
			</div>
			<div class="red">
				{{ error }}
			</div>
			<div class="gree" v-if="succes">
				{{ succes }}
			</div>
			<div class="Button">
				<button :disabled="!nam && !cate && !descrip && !tim && !pric" @click.prevent="updateser(id)" class="">
					Update Servic
				</button>
			</div>
		</form>
	</div>
</template>
<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import { updateser } from '../graph/Quries';
import { getser } from '../graph/Quries.js';
import { getserbyid } from '../graph/Quries.js';
import VueCookies from 'vue-cookies';
export default {
	name: 'updateservic',
	data() {
		return {
			//insid: VueCookies.get('insid'),
			token: VueCookies.get('session').token,
			insid: VueCookies.get('insid'),
			nam: '',
			cate: '',
			descrip: '',
			tim: '',
			pric: null,
			serid: '',
			succes: '',
			error: '',
			services: '',
			ret: null,
			sid: VueCookies.get('sid'),
			sers: '',
			id: '',
		};
	},
	async mounted() {
		try {
			console.log('****');
			console.log(this.insid);
			var result11 = await getser(this.insid);
			this.services = result11.data.data;
			console.log(this.services);
			console.log('-----------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		async updateser(id) {
			console.log(id);
			try {
				var result3 = await updateser(
					this.token,
					//this.insid,
					id,
					this.nam,
					this.cate,
					this.descrip,
					this.tim,
					this.pric,
					this.ret
				);
				console.log(this.token);
				var status = result3[0];
				console.log(status);
				var resultr = result3[1];
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
				} else {
					console.log('==================');
					//this.$router.push('/login');
					console.log(result3);
					//console.log(result3.data.data.id);
					//this.serid = result3.data.data.id;
					//VueCookies.set('serid', this.serid);
					this.succes = 'The Servic Success Update ';
					console.log('succes');
				}
			} catch (error) {
				console.log(error);
			}
		},
		async updateserid(sid) {
			//  if(this.sid != null || this.sid !='null' || this.sid != ''){
			try {
				console.log('****');
				console.log(sid);
				var result99 = await getserbyid(sid);
				this.sers = result99.data.data;
				this.nam = this.sers.name;
				this.pric = this.sers.price;
				this.descrip = this.sers.description;
				this.cate = this.sers.category;
				this.tim = this.sers.length;
				this.ret = this.sers.retainer;
				this.id = this.sers._id;
				console.log(this.sers);
				console.log('-----------------------------------------');
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
