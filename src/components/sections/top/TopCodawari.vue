<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import { effect } from "vue";
</script>

<template>
	<section class="lcl-codawari">
		<h2 class="lcl-codawari__ttl">
			<img
				src="/img/codawari/img_codawari.png"
				alt="こだわり"
				class="lcl-codawari__ttl-img"
				width="1"
				height="1"
				loading="lazy"
			/>
		</h2>
		<Swiper
			class="lcl-codawari-slider"
			:autoplay="{ delay: 400000, waitForTransition: false }"
			:modules="[Autoplay, EffectFade, Pagination]"
			:pagination="{ clickable: true }"
			effect="fade"
			loop="true"
			loop-additional-slides="1"
		>
			<SwiperSlide
				v-for="(item, index) in [
					{
						txt: '濃厚なスープの極み',
					},
					{
						txt: '自家製の極太麺',
					},
					{
						txt: '特製チャーシュー',
					},
				]"
				:key="index"
				class="lcl-codawari-slider__slide"
			>
				<img
					:src="`/img/codawari/img_0${index + 1}.png`"
					alt=""
					class="lcl-codawari-slider__img"
				/>
				<p class="lcl-codawari-slider__txt f-index">{{ item.txt }}</p>
			</SwiperSlide>
		</Swiper>
	</section>
</template>

<style scoped lang="scss">
.lcl-codawari {
	position: relative;

	.lcl-codawari__ttl {
		position: absolute;
		z-index: 999;
		top: pcvw(-75);
		left: pcvw(125);
		width: pcvw(160);
	}

	.lcl-codawari__ttl-img {
	}

	/* slider ------------ */
	.lcl-codawari-slider {
		overflow: visible;
		margin-right: 0;
		width: pcvw(1084);

		.lcl-codawari-slider__slide {
			position: relative;
			z-index: 0;
			&.swiper-slide-next {
				opacity: 0 !important;
			}

			.lcl-codawari-slider__img {
			}

			.lcl-codawari-slider__txt {
				position: absolute;
				top: pcvw(-22);
				right: pcvw(91);
				font-size: pcvw(72);
				writing-mode: vertical-rl;
				transition: opacity 0.5s;
				letter-spacing: 0.1;
				&:where(.swiper-slide-prev *) {
					opacity: 0;
				}
			}

			/* pagination ------------ */

			:deep(.swiper-pagination) {
				position: absolute;
				top: pcvw(150);
				left: pcvw(-26);
			}

			:deep(.swiper-pagination-bullet) {
				width: pcvw(96) !important;
				height: pcvw(96) !important;
				border-radius: 0;
				opacity: 1;
				font-size: pcvw(96);

				&::before {
					position: absolute;
					top: 0;
					left: 0;

					/*---------------- before */
				}

				&:nth-child(1) {
					&::before {
						content: "汁";
						/*---------------- before */
					}
				}
				&:nth-child(2) {
					&::before {
						content: "麺";
						/*---------------- before */
					}
				}
				&:nth-child(3) {
					&::before {
						content: "肉";
						/*---------------- before */
					}
				}
			}
		}
	}
}
</style>
