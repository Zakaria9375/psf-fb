import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore("main", () => {
	const collapsed = ref(false);
	const headerWidth = computed(() => {
		const width = collapsed.value ? 75 : 200;
		return `${width}px`;
	});

	function toggleS() {
		collapsed.value = !collapsed.value;
	}
	function mytimer() {
		setTimeout(() => {
			collapsed.value = true;
			console.log("collapsed is now true");
		}, 20000);
	}
	return { collapsed, headerWidth, toggleS, mytimer };
});
