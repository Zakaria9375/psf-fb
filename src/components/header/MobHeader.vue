<script setup>
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
</script>
<template>
	<div class="smallHeader">
		<ul>
			<li v-for="link in links">
				<RouterLink :key="link.id" :to="link.url">
					<i :class="link.iclass"></i>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>
<style lang="scss">
	.smallHeader {
		background: $lgHEAD;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		right: 0;
		transition: $ctrans;
		@include flexoo(row, nowrap, center, center);
		ul {
			@include flexoo(row, nowrap, space-between, center);
			padding: 10px;
			width: 70%;
			li {
				width: fit-content;
				a {
					border-radius: 10px;
					@include flexoo(row, nowrap, space-between, center);
					i {
						@include fontoo(24px, bold, white);
						padding: 10px;
					}
					span {
						width: 101px;
						@include fontoo(20px, 500, white);
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
</style>
