<script setup>
	const { project } = defineProps({
		project: { type: Object, required: true },
	});
</script>

<template>
	<div class="pro-container">
		<div class="overlay">
			<div class="box-overlay"><i class="fa-regular fa-eye eye"></i></div>
			<div class="pro-tech">
				<span v-for="tech in project.techs">{{ tech }}</span>
			</div>
		</div>
		<div class="pro-image">
			<img :src="project.poster" :alt="project.title" />
		</div>
		<div class="pro-header">
			<h4>{{ project.title }}</h4>
			<p>{{ project.about }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use "@/assets/global.scss" as *;

	.pro-container {
		border-radius: 8px;
		width: 320px;
		height: 270px;
		position: relative;
		color: white;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
		.overlay {
			position: absolute;
			top: -100%;
			transition: all 0.3s ease;
			.box-overlay {
				background-color: rgba(0, 0, 0, 0.5);
				width: 320px;
				height: 170px;
				@include flexoo(row, wrap, center, center);
				.eye {
					@include fontoo(28px, normal, #ddd);
					opacity: 0;
					transition: all 0.3s ease 0.15s;
				}
			}
			.pro-tech {
				width: 320px;
				height: 100px;
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
			width: 320px;
			height: 100px;
			padding: 16px;
			background: $lgPORTO;
			text-align: left;
			h4 {
				@include fontoo(24px, 700, $wclr);
				transition: 0.5s ease;
				margin-bottom: 8px;
				font-family: 'Raleway', sans-serif;
				text-transform: capitalize;
			}
			p {
				@include fontoo(18px, 400, #ddd);
				transition: 0.5s ease;
				margin: 8px 0;
				text-transform: capitalize;
			}
		}
		.pro-image {
			width: 320px;
			height: 170px;
			img {
				width: 320px;
				height: 170px;
				background-position: center;
				background-size: cover;
			}
		}
		&:hover {
			.overlay {
				top: 0;
				.eye {
					opacity: 1;
					transform: rotateZ(360deg);
				}
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
