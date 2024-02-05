<script setup>
	import { useFirestore, useCollection } from "vuefire";
	import { collection } from "firebase/firestore";
	const db = useFirestore();
	const skills = useCollection(collection(db, "skills"));
	const credits = useCollection(collection(db, "credits"));
</script>
<template>
	<div class="container">
		<div class="story">
			<div class="me">
				<h4>About me</h4>
				<p>
					I'm Zakaria, but you can call me Zica. Originally from Egypt. I'm more
					of a traveler than a stationary soul. Currently, residing in Riga,
					Latvia, pursuing my master degree in Computer Science.
				</p>
				<h4>personal skills</h4>
				<div class="ps">
					<span>Flexible</span>
					<span>Driven by Challenge</span>
					<span>Advice Listener</span>
					<span>Working hard to be Distinctive</span>
					<span>Collaborative Team Player</span>
				</div>
			</div>
			<div class="photo">
				<img src="/images/zico.jpg" alt="" />
			</div>
		</div>
		<div class="skills">
			<h1>Most used technologies</h1>
			<div class="skillContainer">
				<span v-for="skill in skills" :key="skill.idS" class="skill">
					<span class="skilllogo">
						<img :alt="skill.name" class="logo" :src="skill.source" />
					</span>
					<span class="svg">{{ skill.name }}</span>
				</span>
			</div>
		</div>
		<div class="credit">
			<h1>Credentials</h1>
			<div class="credentialContainer">
				<div v-for="credit in credits" class="credit">
					<h4>
						<a :href="credit.link" target="_blank" rel="noopener noreferrer">
							{{ credit.title }}

							<i class="fa-solid fa-paperclip"></i>
						</a>
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@use "@/assets/global.scss" as *;
	.container {
		margin-top: 30px;
		margin-bottom: 30px;
		@include flexoo(column, nowrap, center, center);
	}
	.story {
		max-width: 1060px;
		@include more($smS) {
			@include flexoo(row, wrap, space-between, center);
		}
		@include less($smS) {
			@include flexoo(column, wrap, center, center);
		}
		padding: 20px;
		margin-bottom: 10px;
		background: $about;
		.me {
			@include more($smS) {
				width: 60%;
			}
			h4 {
				@include fontoo(1.4rem, 600, $wclr);
				text-transform: uppercase;
				padding: 0 20px 10px;
				opacity: 0.5;
			}
			p {
				@include fontoo(1.25rem, 500, $wclr);
				line-height: 1.8;
				opacity: 0.9;
				padding-bottom: 1.25rem;
			}
			.ps {
				@include flexoo(row, wrap, space-evenly, center);
				margin-bottom: 1.25rem;
				padding-top: 12px;
				gap: 10px;
				span {
					padding: 0.8rem;
					text-align: center;
					width: fit-content;
					background-color: rgb(14 19 53 / 70%);
					border-radius: 1rem;
					@include fontoo(1.2rem, 500, $wclr);
					opacity: 0.95;
				}
			}
		}
		.photo {
			height: 80%;
			display: flex;
			align-items: center;
			justify-content: center;
			@include more($smS) {
				flex-basis: 35%;
				max-width: 350px;
			}
			@include less($smS) {
				width: min(400px, 100%);
			}
			img {
				max-width: 300px;
				max-height: 300px;
				width: 100%;
				aspect-ratio: 1;
				height: 100%;
				object-fit: cover;
				border-radius: 50%;
				filter: brightness(80%);
				filter: grayscale(20%);
			}
		}
	}
	.skills {
		padding: 16px;
		h1 {
			text-align: center;
			@include fontoo(1.8rem, 600, $wclr);
			margin-bottom: 1.8rem;
			margin-top: 0.5rem;
			text-transform: uppercase;
			opacity: 0.5;
		}
		.skillContainer {
			@include flexoo(row, wrap, center, center);
			gap: 1rem;
			.skill {
				.skilllogo {
					.logo {
						width: 1.5rem;
						height: 1.5rem;
						margin-right: 10px;
						margin-left: 10px;
					}
				}
				.svg {
					@include fontoo(1.6rem, normal, $wclr);
					opacity: 0.95;
				}
			}
		}
	}
	.credit {
		padding: 16px;
		h1 {
			text-align: center;
			@include fontoo(1.8rem, 600, $wclr);
			margin-bottom: 0.4rem;
			margin-top: 1.8rem;
			text-transform: uppercase;
			opacity: 0.5;
		}
		.credentialContainer {
			@include flexoo(column, wrap, center, center);
			gap: 1rem;
			.credit {
				h4 {
					text-align: center;
					line-height: 1.25;
					opacity: 0.85;
					a {
						text-decoration: none;
						cursor: pointer;
						@include fontoo(1.4rem, normal, #ddd);
						i {
							margin: 8px;
							font-size: 1.4rem;
							color: $gclr;
						}
						&:hover {
							i {
								transform: rotate(25deg);
							}
							color: #fff;
						}
					}
				}
			}
		}
	}
</style>
