<script setup>
	import AppHeader from "@/components/header/AppHeader.vue";
	import { computed } from "vue";
	import { useMainStore } from "@/stores/MainStore.js";
	const c = computed(() => useMainStore().headerWidth);
</script>

<template>
	<div class="main">
		<AppHeader />
		<div class="view">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="$route.path" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<style lang="scss">
	@use "@/assets/global.scss" as *;
	.container {
		padding-left: 15px;
		padding-right: 15px;
		margin-left: auto;
		margin-right: auto;
		@include sbp(smS) {
			max-width: 100%;
		}
		@include sbp(mS) {
			max-width: calc(750px - v-bind(c));
		}
		@include sbp(lS) {
			max-width: calc(970px - v-bind(c));
		}
		@include sbp(xlS) {
			max-width: calc(1170px - v-bind(c));
		}
		@include sbp(xxlS) {
			max-width: calc(1370px - v-bind(c));
		}
	}
	.main {
		background-color: $bgclr1;
		min-height: 100dvh;
		.view {
			transition: $ctrans;
			@include flexoo(column, wrap, center, center);
			@include less($smS) {
				margin-top: 64px;
			}
			@include more($smS) {
				min-height: 100dvh;
				margin-left: v-bind(c);
				width: calc(100% - v-bind(c));
			}
		}
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease, scale 0.5s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		scale: 0.7;
	}
	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
		scale: 1;
	}
</style>
