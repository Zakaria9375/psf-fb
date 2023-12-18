<script setup>
	const { project } = defineProps({
		project: { type: Object, required: true },
	});
</script>

<template>
	<div class="pro-container">
		<div class="overlay">
			<div class="box-overlay"></div>
			<div class="pro-tech">
				<span v-for="tech in project.techs">{{ tech }}</span>
			</div>
		</div>
		<a href="">
			<div class="pro-image">
				<img :src="project.poster" :alt="project.title" />
			</div>
			<div class="pro-header">
				<h4>{{ project.title }}</h4>
				<p>{{ project.about }}</p>
			</div>
		</a>
	</div>
</template>

<style scoped lang="scss">
	@use "@/assets/global.scss" as *;

	.pro-container {
		width: 330px;
		height: 280px;
		padding: 32px 16px 0;
		position: relative;
		color: white;
		overflow: hidden;
		.overlay {
			position: absolute;
			left: 16px;
			top: -100%;
			transition: 0.3s ease;
			.box-overlay {
				background-color: rgba(0, 0, 0, 0.4);
				width: 298px;
				height: 168px;
			}
			.pro-tech {
				width: 298px;
				height: 80px;
				@include flexoo(row, wrap, center, center);
				gap: 8px;
				span {
					background-color: $bclr;
					display: block;
					padding: 4px;
				}
			}
		}
		.pro-header {
			width: 298px;
			height: 80px;
			padding: 10px;
			background: $lgPORTO;
			@include flexoo(column, wrap, space-between, center);
			h4 {
				@include fontoo(20px, bold, $wclr);
				transition: 0.5s ease;
			}
			p {
				@include fontoo(16px, normal, white);
				transition: 0.5s ease;
			}
		}
		.pro-image {
			width: 298px;
			height: 168px;
			img {
				width: 298px;
				height: 168px;
				// background-image: url('public\images\shuffle-02.jpg')
				background-position: center;
				background-size: cover;
			}
		}
		&:hover {
			.overlay {
				top: 32px;
			}
			.pro-header {
				h4,
				p {
					opacity: 0;
				}
			}
		}
	}
</style>
