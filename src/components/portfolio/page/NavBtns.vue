<script setup>
	import { useRouter } from "vue-router";
	import { computed } from "vue";
	const router = useRouter();
	const { currentId } = defineProps({
		currentId: { type: Number, required: true },
	});
	let length = 1;
	const isIdExist = computed(() => {
		if (length <= currentId < l) {
			return true;
		}
		return false;
	});
	function goToPreviousId() {
		if (isIdExist.value) {
			let previousId = currentId - 1;
			router.push({ name: "projectDetail", params: { id: previousId } });
		}
	}
	function goToNextId() {
		if (isIdExist.value) {
			let nextId = currentId + 1;
			router.push({ name: "projectDetail", params: { id: nextId } });
		}
	}
</script>

<template>
	<div class="btnNav">
		<button :disabled="currentId === 1" @click="goToPreviousId">
			<i class="fa-solid fa-arrow-left"></i>
		</button>
		<button>
			<router-link :to="{ name: 'portfolio' }">
				<i class="fa-solid fa-arrow-up-from-bracket"></i>
			</router-link>
		</button>
		<button :disabled="currentId >= length" @click="goToNextId">
			<i class="fa-solid fa-arrow-right"></i>
		</button>
	</div>
</template>
<style lang="scss">
	@use "@/assets/global.scss" as *;

	.btnNav {
		@include flexoo(row, nowrap, center, center);
		gap: 20px;
		padding: 15px;
		button {
			padding: 10px;
			border-radius: 50%;
			border: none;
			cursor: pointer;
			background-color: $rclr;
			transition: 0.2s;
			i {
				color: black;
			}
			&:hover {
				box-shadow: $bxShadow;
				scale: 1.05;
			}
			&:disabled {
				display: none;
			}
		}
	}
</style>
