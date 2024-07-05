<script setup></script>

<template>
	<div class="lcl-fv">
		<h1 class="lcl-fv__logo">
			<img src="/img/fv/img_logo.png" alt="坂田家" class="lcl-fv__logo-img" />
		</h1>
	</div>
</template>

<style scoped lang="scss">
.lcl-fv {
	position: relative;
	background: url("/img/fv/img_fv.png") no-repeat left top / cover;
	width: 100%;
	height: 100vh;
	.lcl-fv__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: pcvw(200);
	}
}
</style>
