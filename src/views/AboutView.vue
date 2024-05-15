<script setup>
import AboutMe from "@/components/about/AboutMe.vue";
import AboutSkills from "@/components/about/AboutSkills.vue";
</script>
<template>
	<div class="container">

		<AboutMe/>
    <AboutSkills/>

	</div>
</template>
<style lang="scss">
	@use "@/assets/global.scss" as *;
	.container {
		margin-top: 30px;
		margin-bottom: 30px;
		@include flexoo(column, nowrap, center, center);
	}


</style>
