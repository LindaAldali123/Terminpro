<template>
	<div class="count">
		<div class="conto">
			<div class="row">
				<div class="col-md-6 aco" data-aos="fade-up" data-aos-delay="100">
					<h2>World's no.1 destination for beauty and wellness</h2>
					<p>
						Event inspires people to look and feel their best - which is why we're trusted by millions of
						customers and thouseds of businesses worldwide.
					</p>
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
							<div class="crd">
								<h3>50,000+</h3>
								<p>partner businesses</p>
							</div>
						</div>
						<div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
							<div class="crd">
								<h3>150,000+</h3>
								<p>styles and professionals</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
							<div class="crd">
								<h3>250,000 millions+</h3>
								<p>partner businesses</p>
							</div>
						</div>
						<div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
							<div class="crd">
								<h3>150,000+ countries</h3>
								<p>styles and professionals</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
export default {
	name: 'account',
	data() {
		return {};
	},
};
</script>
