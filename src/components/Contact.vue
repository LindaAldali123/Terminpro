<template>
	<div class="cont">
		<section id="contact-us" class="contact-us">
			<div class="con">
				<div class="container">
					<div class="row mt-5 conn">
						<div class="col-md-4">
							<div class="info">
								<div class="address">
									<i class="fa fa-map"></i>
									<h4>Location:</h4>
									<p>A108 Adam Street, New York, NY 535022</p>
								</div>
								<div class="email">
									<i class="fa fa-envelope-o"></i>
									<h4>Email:</h4>
									<p>info@example.com</p>
								</div>
								<div class="phone">
									<i class="fa fa-phone"></i>
									<h4>{{ $t('call') }}</h4>
									<p>+1 5589 55488 55s</p>
								</div>
							</div>
						</div>

						<div class="col-md-8 mt-5 mt-lg-0">
							<form @submit.prevent="contactus" action="#" role="form" class="php-email-form inf">
								<div class="row">
									<div class="col-md-6 form-group">
										<input
											type="text"
											name="name"
											class="form-control"
											id="name"
											v-model="name"
											placeholder="Your Name"
											data-rule="minlen:4"
											data-msg="Please enter at least 4 chars"
											required
										/>
										<div class="validate"></div>
									</div>
									<div class="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="email"
											class="form-control"
											name="email"
											id="email"
											v-model="email"
											placeholder="Your Email"
											data-rule="email"
											data-msg="Please enter a valid email"
											required
										/>
										<div class="validate"></div>
									</div>
								</div>
								<div class="form-group mt-3">
									<input
										type="text"
										class="form-control"
										name="subject"
										id="subject"
										v-model="subj"
										placeholder="Subject"
										data-rule="minlen:4"
										data-msg="Please enter at least 8 chars of subject"
										required
									/>
									<div class="validate"></div>
								</div>
								<div class="form-group mt-3">
									<textarea
										class="form-control"
										name="message"
										rows="5"
										v-model="message"
										data-rule="required"
										data-msg="Please write something for us"
										placeholder="Message"
										required
									></textarea>
									<div class="validate"></div>
								</div>
								<div class="my-3">
									<div class="loading">Loading</div>
									<div class="error-message"></div>
									<div class="sent-message">Your message has been sent. Thank you!</div>
								</div>
								<div class="gree" style="margin-bottom: 7px;" v-if="success">
									{{ success }}
								</div>
								<div class="text-center">
									<button type="submit">{{ $t('mess') }}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import { contactus } from '../graph/Quries.js';
import VueCookies from 'vue-cookies';
export default {
	name: 'contact',
	data() {
		return {
			token: VueCookies.get('session').token,
			name: '',
			email: '',
			message: '',
			subj: '',
			success: '',
		};
	},
	methods: {
		async contactus() {
			try {
				var result3 = await contactus(this.token, this.name, this.email, this.message, this.subj);
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
				} else if (status === 400) {
					console.log('-----error-------');
					console.log(resultr.msg);
					this.error = resultr.msg;

					console.log('-----error-------');
				} else {
					console.log('==================');
					//this.$router.push('/login');
					console.log(result3);
					this.success = 'Your message has been sent. Thank you!';
					console.log('succes');
					this.name = '';
					this.email = '';
					this.message = '';
					this.subj = '';
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
