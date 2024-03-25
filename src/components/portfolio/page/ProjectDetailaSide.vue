<script setup>
	const { project } = defineProps({
		project: { type: Object, required: true },
	});
</script>

<template>
	<div class="technologies">
		<h3>Technologies</h3>
		<div class="tech">
			<span v-for="tech in project.techs">{{ tech }}</span>
		</div>
	</div>
	<div class="technologies" v-if="project.libs">
		<h3>Libraries</h3>
		<div class="tech">
			<span v-for="lib in project.libs">{{ lib }}</span>
		</div>
	</div>

	<div class="features" v-if="project.features">
		<h3>Features</h3>
		<ul class="all-features">
			<li v-for="feature in project.features">
				<i class="fa-solid fa-check"></i><span>{{ feature }}</span>
			</li>
		</ul>
	</div>
	<div class="source">
		<h3>Repositories</h3>
		<div class="repos">
			<a
				v-for="repo in project.repos"
				:href="repo.link"
				target="_blank"
				rel="noopener noreferrer"
				>{{ repo.title }}</a
			>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.technologies,
	.source,
	.features {
		background: $aSide;
		padding: 16px;
		margin-bottom: 25px;
		h3 {
			@include fontoo(22px, 500, $wclr);
			padding-bottom: 20px;
		}
		.tech {
			@include flexoo(row, wrap, center, center);
			gap: 10px;
			span {
				@include fontoo(16px, normal, $wclr);
				background-color: rgba(0, 0, 0, 0.2);
				display: block;
				padding: 5px;
			}
		}
		.repos {
			@include flexoo(row, wrap, center, center);
			gap: 15px;
			a {
				padding: 6px;
				letter-spacing: 0.5px;
				background-color: $rclr;
				border-radius: 4px;
				font-style: italic;
				@include fontoo(16px, 500, black);
				transition: 0.3s;
				&:hover {
					box-shadow: $bxShadow;
					scale: 1.05;
				}
			}
		}
		.all-features {
			@include flexoo(column, wrap, center, flex-start);
			gap: 15px;

			li {
				text-align: start;
				display: flex;
				gap: 6px;
				line-height: 1.15;
				span {
					display: block;
				}
				i {
					color: $gclr;
				}
			}
		}
	}
</style>
