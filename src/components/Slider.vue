<template>
	<section id="hero" class="d-flex justify-cntent-center align-items-center">
		<div class="row">
			<!-- Slide 1 -->
			<div class="col-md-5">
				<div class="pag">
					<h3>Welcome to Our Website</h3>
					<h2>Book Your Services From Terminpro</h2>
				</div>
			</div>
			<div class="img col-md-4">
				<img src="../assets/back.png" />
			</div>
			<div class="col-md-3">
				<div class="page">
					<h2>Excellent 5/5</h2>
					<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i
					><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</div>
			</div>
		</div>
	</section>
	<!-- End Hero -->
</template>
<script>
export default {
	name: 'Slider',
	components: {
		//  Dropdown,
	},
	data() {
		return {
			hom: '/#',
		};
	},
};
</script>
