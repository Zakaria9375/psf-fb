<script setup>
	import ProjectCard from "@/components/portfolio/ProjectCard.vue";
	import { useFirestore, useCollection } from "vuefire";
	import { collection } from "firebase/firestore";
	const db = useFirestore();
	const projects = useCollection(collection(db, "projects"));
</script>
<template>
	<div class="portfolio-background">
		<div class="portfolio-container">
			<div class="main-heading">
				<h2>My projects</h2>
				<p>
					let my work do the talking. However, this is just <span>a start</span>
				</p>
			</div>
			<div class="content">
				<div class="projects-container conatiner">
					<router-link
						v-for="project in projects"
						:key="project.idP"
						:to="{ name: 'projectDetail', params: { id: project.idP } }"
					>
						<ProjectCard :project="project" />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@use "@/assets/global.scss" as *;
	.portfolio-background {
		background: $lgPORTO;
		width: 100%;
		min-height: 100vh;
		.portfolio-container {
			text-align: center;
			.main-heading {
				width: 100%;
				h2 {
					padding: 30px 0 10px;
					@include fontoo(32px, bold, $wclr);
					letter-spacing: 1px;
				}
				p {
					padding: 15px 16px 25px;
					@include fontoo(1.2rem, 400, $wclr);
					opacity: 0.8;
					> span {
						@include fontoo(1.25rem, 500, rgb(250 146 100));
						font-style: italic;
						padding-left: 5px;
					}
				}
			}
			.content {
				min-height: calc(100vh - 140px);
				width: 100%;
				background-color: $bgclr1;
				.projects-container {
					@include flexoo(row, wrap, center, center);
				}
			}
		}
	}
</style>
