<script setup>
	import NavBtns from "@/components/portfolio/page/NavBtns.vue";
	import ProjectDetailaSide from "@/components/portfolio/page/ProjectDetailaSide.vue";
	import { useRoute } from "vue-router";
	import { useFirestore, useDocument } from "vuefire";
	import { doc } from "firebase/firestore";
	import NewGallery from "@/components/portfolio/page/NewGallery.vue";
	const db = useFirestore();
	const route = useRoute();
	const id = parseInt(route.params.id);
	const theId = id.toString();
	const project = useDocument(doc(db, "projects", theId));
</script>
<template>
	<div class="project-background">
		<div v-if="project" class="project-container">
			<div class="heading container">
				<NavBtns :currentId="id" />
				<div class="main-heading">
					<h1>{{ project.title }}</h1>
					<p>{{ project.about }}</p>
				</div>
			</div>
			<div class="content-background">
				<div class="content container">
					<div class="description">
						<div class="gallery">
							<NewGallery :project="project" v-if="project.gallery" />
						</div>
						<div class="desc-sec">
							<h2>Description</h2>
							<p>{{ project.description }}</p>
						</div>
						<div class="desc-sec" v-if="project.technical">
							<h2>Technical Overview</h2>
							<p>{{ project.technical }}</p>
						</div>
					</div>
					<aside>
						<ProjectDetailaSide :project="project" />
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@use "@/assets/global.scss" as *;
	.project-background {
		background: $lgPORTO;
		width: 100%;
		height: 100%;
		min-height: 100vh;
	}
	.project-container {
		text-align: center;
		padding-top: 20px;

		.heading {
			@include flexoo(row-reverse, nowrap, space-between, flex-start);

			.main-heading {
				padding-left: 40px;
				h1 {
					@include fontoo(36px, bold, $wclr);
					text-transform: capitalize;
					margin: 12px 0;
					text-align: left;
				}
				p {
					padding: 0 0 15px;
					@include fontoo(20px, normal, $pclr);
					text-transform: capitalize;
				}
			}
		}
		.content-background {
			padding-top: 15px;
			padding-bottom: 20px;
			min-height: calc(100vh - (115.38px + 20px));
			width: 100%;
			background-color: $bgclr1;
			.content {
				@include flexoo(row, wrap, space-between, flex-start);
			}
			.description {
				@include fontoo(1.1rem, 500, $wclr);
				font-family: "Lato", sans-serif;
				line-height: 1.5;
				flex: 1;
				@include more($mS) {
					padding: 0 16px;
					flex-basis: 65%;
				}
				@include less($mS) {
					width: 100%;
				}
				.gallery {
					padding: 10px;
				}
				.desc-sec {
					text-align: left;
					padding: 10px;
					h2 {
						@include fontoo(1.5rem, 600, $wclr);
						margin-bottom: 15px;
					}
					p {
						@include fontoo(1.25rem, normal, $pclr);
					}
				}
			}
			aside {
				margin-top: 10px;
				@include more($mS) {
					padding: 0 16px;
					flex-basis: 30%;
				}
				@include less($mS) {
					width: 100%;
					padding-top: 30px;
				}
			}
		}
	}
</style>
