<script setup>
	import "vue3-carousel/dist/carousel.css";
	import { Carousel, Slide } from "vue3-carousel";
	import { ref, computed } from "vue";
	import { useElementSize } from "@vueuse/core";
	const myCarousel = ref(null);
	const { project } = defineProps({
		project: { type: Object, required: true },
	});
</script>
<template>
	<div class="sliderContainer">
		<carousel
			ref="myCarousel"
			:wrapAround="true"
			:transition="300"
			:autoplay="5000"
			:pauseAutoplayOnHover="true"
		>
			<slide v-for="slide in project.gallery" :key="slide" class="slides">
				<img :src="slide" :alt="slide" class="image" />
			</slide>
		</carousel>
		<div class="btnsImg">
			<span @click="myCarousel.next" class="nextB">&#10095;</span>
			<span @click="myCarousel.prev" class="prevB">&#10094;</span>
		</div>
	</div>
</template>
<style lang="scss">
	@use "@/assets/global.scss" as *;

	.sliderContainer {
		position: relative;
		width: 100%;
		aspect-ratio: 1.7;
		.slides {
			width: 100%;
			aspect-ratio: 1.8;
			height: calc(100% - 40px);
			position: relative;
			.image {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
			}
		}
		.btnsImg {
			span {
				position: absolute;
				top: calc(50% - 20px);
				transform: translateY(-50%);
				width: 90px;
				height: calc(100% - 40px);
				@include fontoo(28px, bold, $wclr);
				@include flexoo(row, nowrap, center, center);
				user-select: none;
				cursor: pointer;
				z-index: 2;
				&.nextB {
					right: 0;
					&:hover {
						animation: bouncingBtnRight 1.5s infinite;
					}
				}
				&.prevB {
					left: 0;
					&:hover {
						animation: bouncingBtnLeft 1.5s infinite;
					}
				}
			}
		}
	}
</style>
