<script setup>
import MobHeader from '@/components/header/MobHeader.vue';
import WebHeader from '@/components/header/WebHeader.vue';
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
</script>

<template>
	<div>
		<WebHeader v-if="width >= 768.5"/>
		<MobHeader v-else/>
	</div>
</template>