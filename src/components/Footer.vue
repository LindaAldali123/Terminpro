<template>
	<div class="footer" id="footer">
		<div class="container">
			<div class="row foot">
				<div class="col-md-3">
					<ul>
						<li>
							<a href="#" data-aos="fade-up" data-aos-delay="100">T E R M I N P R O</a>
						</li>
						<li class="awo" data-aos="fade-up" data-aos-delay="100">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-linkedin"></i></a>
							<a href="#"><i class="fa fa-instagram"></i></a>
						</li>
					</ul>
				</div>
				<div class="col-md-2">
					<ul>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('about') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('career') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('custom') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('blog') }}</a>
						</li>
					</ul>
				</div>
				<div class="col-md-2">
					<ul>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('bus') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('portn') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('pric') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('sup') }}</a>
						</li>
					</ul>
				</div>
				<div class="col-md-2">
					<ul>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('leg') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('bok') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('priv') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('web') }}</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3">
					<ul>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#">{{ $t('mob') }}</a>
						</li>
						<li data-aos="fade-up" data-aos-delay="100">
							<a href="#"
								><button><i class="fa fa-download"></i> {{ $t('dow') }}</button></a
							>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div class="row end">
				<div class="col-md-2">
					<p><i class="fa fa-globe"></i> English</p>
				</div>
				<div class="col-md-8"></div>
				<div class="col-md-2">
					&copy; Terminpro.com SV Ltd
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
	name: 'Footer',
	data() {
		return {};
	},
};
</script>
