<script setup>
import "destyle.css";
import "@/scss/base.scss";
import "@/scss/nwclasses.scss";
import Top from "./pages/Top.vue";
import Header from "./components/parts/Header.vue";

let w = window.innerWidth;

/* Change root font-size ------------ */
function changeRootFontSize() {
	if (w <= 677) {
		document.documentElement.style.setProperty("--fz", (10 / 375) * w + "px");
	} else {
		document.documentElement.style.setProperty("--fz", "10px");
	}
}
changeRootFontSize();
window.addEventListener("resize", () => {
	w = window.innerWidth;
	changeRootFontSize();
});

/* Scroll animation ------------ */
function scrollAnimation() {
	const targets = document.querySelectorAll(".scr-anin");

	targets.forEach((e) => {
		window.addEventListener("scroll", () => {
			const scroll = window.scrollY;
			const h = window.innerHeight;
			const pos = scroll + e.getBoundingClientRect().top;

			if (scroll + h * 0.8 > pos) {
				e.classList.add("scr-anin--on");
			}
		});
	});
}
window.addEventListener("laod", () => {
	scrollAnimation();
});
</script>

<template>
	<Header></Header>
	<RouterView></RouterView>
</template>

<style scoped lang="scss"></style>
