<script setup>
	import { onMounted } from "vue";
	import { useMainStore } from "@/stores/MainStore.js";
	const store = useMainStore();
	const links = [
		{
			id: 1,
			name: "Home",
			iclass: "fa-solid fa-house-chimney",
			url: "/",
		},
		{
			id: 2,
			name: "About",
			iclass: "fa-solid fa-circle-info",
			url: "/about",
		},
		{
			id: 3,
			name: "Portfolio",
			iclass: "fa-regular fa-folder-open",
			url: "/portfolio",
		},
		{
			id: 4,
			name: "Contact",
			iclass: "fa-solid fa-message",
			url: "/contact",
		},
	];
	onMounted(() => {
		store.mytimer();
	});
</script>

<template>
	<header :style="{ width: store.headerWidth }">
		<nav>
			<div class="logo">
				<div class="zname">
					<span class="z">Z</span>
					<transition name="diplayNone">
						<span class="name" v-show="!store.collapsed">akaria Ali</span>
					</transition>
				</div>
				<transition name="diplayNone">
					<div class="desc" v-show="!store.collapsed">
						<span>Web Developer</span>
					</div>
				</transition>
			</div>
			<div class="main-links">
				<ul>
					<li v-for="link in links">
						<RouterLink :key="link.id" :to="link.url">
							<i :class="link.iclass"></i>
							<transition name="diplayNone">
								<span v-show="!store.collapsed">{{ link.name }}</span>
							</transition>
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="toggleb">
				<div @click="store.toggleS" class="toggleBtn">
					<i
						class="fa-solid"
						:class="store.collapsed ? `fa-chevron-right` : `fa-chevron-left`"
					></i>
				</div>
			</div>
			<div class="social">
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/zakaria-ali-java/"
							target="_blank"
						>
							<i class="bx bxl-linkedin-square"></i
						></a>
					</li>
					<li>
						<a href="https://github.com/Zakaria9375" target="_blank">
							<i class="bx bxl-github"></i
						></a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
<style lang="scss">
	header {
		background: $lgHEAD;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		bottom: 0;
		transition: $ctrans;
		font-family: 'Roboto', sans-serif;
		nav {
			@include flexoo(column, nowrap, space-between, center);
			height: 100%;
			width: 100%;
			padding: 30px 10px;
			.logo {
				@include flexoo(column, nowrap, center, center);
				@include show(0.5s, 0.2s, 0.5s, 0.2s, 135px);
				height: 100px;
				font-family: 'Raleway', sans-serif;
				.zname {
					transition: $mtrans;
					span.z {
						display: inline-block;
						padding: 4px;
						@include fontoo(42px, 700, $gclr);
						animation: bouncing 7.5s infinite;
						font-family: 'Raleway', sans-serif;
					}
					span.name {
						letter-spacing: 0.5px;
						display: inline-block;
						max-height: 59px;
						padding-top: 32px;
						overflow: hidden;
						@include fontoo(28px, bold, $wclr);
						font-family: 'Raleway', sans-serif;
					}
				}
				.desc {
					padding: 10px;
					span {
						display: block;
						letter-spacing: 1px;
						max-height: 28px;
						overflow: hidden;
						@include fontoo(18px, 600, #eee);
					}
				}
			}
			.main-links {
				@include show(0.5s, 0.2s, 0.5s, 0.2s, 101px);
				ul {
					padding: 10px;
					min-height: 260px;
					@include flexoo(column, nowrap, space-between, center);
					li {
						width: 100%;
						a {
							border-radius: 10px;
							@include flexoo(row, nowrap, space-between, center);
							i {
								@include fontoo(28px, bold, white);
								padding: 10px;
							}
							span {
								width: 115px;
								@include fontoo(22px, 500, white);
								padding: 10px;
								overflow: hidden;
							}
						}
					}
					li a.active,
					li:hover a {
						cursor: pointer;
						background-color: $bclr;
						span,
						i {
							color: $rclr;
						}
					}
				}
			}
			.toggleb {
				position: relative;
				width: 40px;
				height: 40px;
				.toggleBtn {
					width: 40px;
					height: 40px;
					margin: 5px;
					position: absolute;
					transform: translate(-5px, -5px);
					background-color: $rclr;
					border-radius: 50%;
					cursor: pointer;
					z-index: 103;
					@include flexoo(row, nowrap, center, center);
					i {
						@include fontoo(20px, 700, white);
					}
				}
				&:before {
					content: "";
					border: 8px solid rgba(55, 140, 63, 0.6);
					border-radius: 50%;
					height: 40px;
					width: 40px;
					position: absolute;
					top: -8px;
					left: -8px;
					animation: pulsate 7.5s ease-out infinite;
					z-index: 101;
				}
			}
			.social {
				padding: 8px;
				li:first-child {
					margin-bottom: 16px;
				}
				li {
					a {
						@include fontoo(36px, bold, white);
						&:hover {
							i {
								scale: 1.3;
								color: $rclr;
							}
						}
					}
				}
			}
		}
	}
</style>
