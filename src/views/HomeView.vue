<script setup>
	import { useFirestore, useCollection } from "vuefire";
	import { collection } from "firebase/firestore";
	const db = useFirestore();
	const mainSkills = useCollection(collection(db, "mainSkills"));
</script>
<template>
	<div class="container">
		<div class="infoHome">
			<span>Hi, I'm</span>
			<h1><span>Z</span>akaria Ali</h1>
			<h2>a <span>Web Developer</span></h2>
			<div class="skills">
				<p>
					with deep knowledge and hands-on exerience with
					<span class="rec">
						<span class="technologies">
							<span class="techno" v-for="skill in mainSkills" :key="skill.idS">
								<span class="logoSVG">
									<img :alt="skill.name" class="logo" :src="skill.source" />
								</span>
								<span class="name">{{ skill.name }}</span>
							</span>
						</span>
					</span>
				</p>
			</div>
		</div>
		<div class="btnsHome">
			<div class="porto">
				<router-link :to="{ name: 'portfolio' }">
					<button>
						<span class="title">My portfolio</span>
					</button>
				</router-link>
			</div>
			<div class="contact">
				<router-link :to="{ name: 'contact' }">
					<button>
						<span>Get in touch</span>
					</button>
				</router-link>
			</div>
			<div class="about">
				<p>or learn more</p>
				<router-link :to="{ name: 'about' }">
					<span>about me.</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@use "@/assets/global.scss" as *;
	.infoHome {
		padding: 20px;
		margin-top: 36px;
		@include less($smS) {
			@include flexoo(columns, wrap, center, center);
			text-align: center;
			> span {
				padding-right: 10px;
			}
		}
		span {
			@include fontoo(36px, normal, $wclr);
		}
		h1 {
			@include fontoo(46px, bold, $gclr);
			span {
				@include fontoo(56px, bold, $gclr);
			}
		}
		h2 {
			@include fontoo(46px, bold, $wclr);
			span {
				@include fontoo(46px, bold, $rclr);
			}
		}
		.skills {
			p {
				@include fontoo(28px, normal, $pclr);
				padding-top: 20px;
				padding-bottom: 20px;
				line-height: 1.7;
				span.top {
					@include fontoo(28px, normal, $rclr);
					font-style: italic;
					text-transform: lowercase;
				}
				.rec {
					display: inline-block;
					position: relative;
					height: 48px;
					overflow: hidden;
					vertical-align: top;
					.technologies {
						@include flexoo(column, nowrap, center, flex-start);
						transition: transform $mtrans ease;
						animation: spinWords 8s ease infinite;
						.techno {
							@include flexoo(row, nowrap, flex-start, center);
							@include fontoo(28px, normal, $wclr);
							.logo {
								width: 28px;
								height: 28px;
								margin-right: 10px;
								margin-left: 10px;
							}
							.name {
								@include fontoo(28px, normal, $wclr);
							}
						}
					}
				}
			}
		}
	}
	.btnsHome {
		margin-bottom: 36px;
		@include flexoo(row, wrap, flex-start, center);
		@include less($smS) {
			@include flexoo(columns, wrap, center, center);
		}
		.porto,
		.contact {
			padding: 8px;
			a {
				cursor: pointer;
				button {
					background-color: transparent;
					border: 2px solid $rclr;
					color: white;
					width: 210px;
					height: 75px;
					position: relative;
					transition: 0.3s ease;
					cursor: pointer;
					&::after {
						content: "";
						position: absolute;
						transform-origin: 100% 100%;
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						transform: scale(0);
						transition: transform 0.3s ease;
						background-color: $rclr;
					}
					&:hover::after {
						transform: scale(1);
					}
					span {
						@include fontoo(22px, 600, $wclr);
						@include flexoo(row, nowrap, center, center);
						@include absoo(100%, 100%, 0, 0);
						z-index: 1;
					}
				}
			}
		}
		.about {
			p {
				@include fontoo(20px, normal, $wclr);
				display: inline-block;
				padding: 10px;
			}
			a {
				span {
					@include fontoo(22px, normal, $rclr);
					display: inline-block;
					font-style: italic;
				}
			}
		}
	}
</style>
