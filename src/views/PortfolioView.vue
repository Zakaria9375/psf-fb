<script setup>
	import ProjectCard from "@/components/portfolio/ProjectCard.vue";
	import { useFirestore, useCollection } from "vuefire";
	import { collection } from "firebase/firestore";
	import { computed } from "vue";
	const db = useFirestore();
	const projects = useCollection(collection(db, "projects"));
	const displayedProjects = computed(() => {
		return projects.value.reverse();
	});
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
						v-for="project in displayedProjects"
						:key="project.idP"
						:to="{ name: 'projectDetail', params: { id: project.idP } }"
					>
						<ProjectCard :project="project" />
					</router-link>
				</div>
				<div class="load-more">
					<a
						href="https://www.frontendmentor.io/profile/Zakaria9375"
						target="_blank"
						rel="noopener noreferrer"
					>
						See more
					</a>
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
		min-height: 100dvh;
		.portfolio-container {
			text-align: center;
			.main-heading {
				width: 100%;
				h2 {
					padding: 30px 0 10px;
					@include fontoo(36px, 600, $wclr);
					letter-spacing: 0.75px;
					font-family: "Raleway", sans-serif;
				}
				p {
					padding: 15px 16px 25px;
					@include fontoo(1.25rem, 400, $wclr);
					opacity: 0.8;
					> span {
						@include fontoo(1.25rem, 500, rgb(250 146 100));
						font-style: italic;
						padding-left: 5px;
					}
				}
			}
			.content {
				min-height: calc(100dvh - 144.4px);
				width: 100%;
				background-color: $bgclr1;
				.projects-container {
					padding: 32px;
					@include flexoo(row, wrap, center, center);
					gap: 28px;
				}
				.load-more {
					margin-top: 32px;
					a {
						padding: 12px 24px;
						color: #1a1a1a;
						background-color: $rclr;
						font-weight: 600;
						font-size: 1.375rem;
						border-radius: 8px;
						text-transform: uppercase;
						transition: 0.3s;
						&:hover {
							box-shadow: $bxShadow;
							font-size: 1.4rem;
						}
					}
				}
			}
		}
	}
</style>
