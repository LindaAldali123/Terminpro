<template>
	<div class="addser5">
		<h3>The Servic</h3>
		<form>
			<div class="Que2 form-group" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-vcard-o"></i> Name Special Offer1 </label>
				<input type="text" class="form-control" required />
			</div>
			<div class="Que3 form-group">
				<h1><i class="fa fa-font"></i>Description Offer1</h1>
				<textarea class="form-control" cols="70" rows="4" placeholder="Write A short event summary ." required>
				</textarea>
				<br />
			</div>
			<div class="Que2 form-group" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-vcard-o"></i> Name Special Offer2 </label>
				<input type="text" class="form-control" required />
			</div>
			<div class="Que3 form-group">
				<h1><i class="fa fa-font"></i>Description Offer2</h1>
				<textarea class="form-control" cols="70" rows="4" placeholder="Write A short event summary ." required>
				</textarea>
				<br />
			</div>
			<div class="Que2 form-group" data-aos="fade-up">
				<label class="bold"> <i class="fa fa-vcard-o"></i> Name Special Offer3 </label>
				<input type="text" class="form-control" required />
			</div>
			<div class="Que3 form-group">
				<h1><i class="fa fa-font"></i>Description Offer3</h1>
				<textarea class="form-control" cols="70" rows="4" placeholder="Write A short event summary ." required>
				</textarea>
				<br />
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
export default {
	name: 'addser5',
	data() {
		return {};
	},
};
</script>
