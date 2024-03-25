import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core";
export const useMainStore = defineStore("main", () => {
	const {width: windowWidth} = useWindowSize();
	const collapsed = ref(false);
	const headerWidth = computed(() => {
		const width = collapsed.value ? 85 : 225;
		return `${width}px`;
	});

	function toggleS() {
		collapsed.value = !collapsed.value;
	}
	function mytimer() {
		setTimeout(() => {
			if (windowWidth < 1024) {
			collapsed.value = true;
			}
		}, 20000);
	}
	return { collapsed, headerWidth, toggleS, mytimer };
});
