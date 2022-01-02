<template>
	<div class="mob">
		<div class="conto">
			<div class="row">
				<div class="col-md-5" data-aos="fade-up" data-aos-delay="100">
					<div class="img"><img src="../assets/log.jpg" /></div>
				</div>
				<div class="col-md-7 dow" data-aos="fade-up" data-aos-delay="200">
					<h3 class="tit">{{ $t('service_name') }}</h3>
					<h3>Download Our App</h3>
					<p>
						Book unforgettable beauty and wellness experiences with the event mobile app-the best way to
						dicover top-rated salons and spas.
					</p>
					<div class="do">
						<div class="row">
							<div class="col-md-6">
								<button><img src="../assets/go.jpg" /></button>
							</div>
							<div class="col-md-6">
								<button><img src="../assets/ap.jpg" /></button>
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
	name: 'mobil',
	data() {
		return {};
	},
};
</script>
