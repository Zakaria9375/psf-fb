<script setup>
	import { ref, reactive } from "vue";
	import axios from "axios";
	const submitted = ref(false);
	const endPoint = "https://getform.io/f/fb169e9a-78d4-4723-89be-3a0c44098563";
	const form = reactive({ name: "", email: "", message: "" });
	function handleSubmit() {
		axios
			.post(endPoint, form, {
				headers: {
					Accept: "application/json",
				},
			})
			.then(function (response) {
				submitted.value = true;
				console.log("Response:", response.data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}
</script>
<template>
	<div class="contact">
		<div class="main-heading">
			<h2>Contact me</h2>
			<p>
				Thank you for visiting my portfolio. Your ideas and inquiries are
				important to me. Feel free to reach me out using the contact form below,
				or through email or phone.
			</p>
		</div>
		<div class="content">
			<div class="info">
				<h4>Get in touch</h4>
				<span class="by-phone">+371 28012310</span>

				<h4>Send a message</h4>
				<div class="by">
					<a href="mailto:alizakaria9375@email.com"> by <span>Email</span> </a>
					<a
						href="http://www.linkedin.com/in/zakaria-ali-java/"
						target="_blank"
						rel="noopener noreferrer"
					>
						by <span>Linkedin</span>
					</a>
				</div>
			</div>
			<div class="form" v-if="!submitted">
				<form @submit.prevent="handleSubmit" method="POST">
					<input
						type="text"
						name="name"
						v-model="form.name"
						id="name"
						class="form-input"
						placeholder="ENTER YOUR NAME"
						required
					/>
					<input
						type="text"
						name="email"
						v-model="form.email"
						id="email"
						class="form-input"
						placeholder="ENTER YOUR EMAIL"
						required
					/>
					<textarea
						name="message"
						v-model="form.message"
						id="message"
						class="form-input"
						placeholder="ENTER YOUR MESSAGE"
						required
					></textarea>
					<button type="submit"><span>send message</span></button>
				</form>
			</div>
			<div class="form" v-if="submitted">
				<div class="thanks">
					<h2>Your message has been recieved</h2>
					<h2>Thank you</h2>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@use "@/assets/global.scss" as *;

	.contact {
		padding: 30px;
		margin-bottom: auto;
		margin-top: auto;
		.main-heading {
			text-align: center;
			h2 {
				@include fontoo(42px, 800, $wclr);
				margin-bottom: 30px;
				opacity: 0.8;
				text-transform: uppercase;
			}
			p {
				@include fontoo(20px, 400, $wclr);
				line-height: 1.8;
				max-width: 798px;
				margin: 0 auto 30px;
			}
		}
	}
	.content {
		@include more($smS) {
			@include flexoo(row, wrap, space-evenly, flex-start);
		}
		@include less($smS) {
			@include flexoo(column-reverse, nowrap, center, center);
		}
	}
	.form {
		flex-basis: 65%;
		@include less($smS) {
			width: 100%;
			padding: 20px;
		}
		.thanks {
			margin-top: 16px;
			margin-bottom: 16px;
			text-align: center;
			h2 {
				padding: 16px;
				@include fontoo(24px, normal, $gclr);
			}
		}
		.form-input {
			padding: 20px;
			display: block;
			border: 1px solid #ccc;
			border-radius: 10px;
			margin-bottom: 30px;
			width: 100%;
			min-width: 270px;
			background-color: rgb(28, 40, 73);
			@include fontoo(16px, normal, $wclr);
			&:focus {
				border-color: $rclr;
			}
		}
		textarea.form-input {
			height: 200px;
			resize: none;
		}
		button[type="submit"] {
			color: $wclr;
			background-color: transparent;
			border: 2px solid $rclr;
			padding: 25px;
			display: flex;
			position: relative;
			margin-left: auto;
			text-transform: uppercase;
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
				z-index: 1;
			}
		}
	}
	.info {
		flex-basis: 25%;
		@include less($smS) {
			width: 100%;
			padding: 20px;
		}
		@include more($smS) {
			padding: 10px 20px 30px 0;
		}
		h4 {
			text-transform: uppercase;
			@include fontoo(22px, 600, $wclr);
			@include more($smS) {
				margin-bottom: 40px;
				@include more($smS);
				&:nth-of-type(2) {
					margin-top: 100px;
				}
			}
			@include less($smS) {
				margin: 30px 0;
			}
		}
		> span {
			@include fontoo(18px, normal, $wclr);
			letter-spacing: 1px;
			display: block;
			@include less($smS) {
				text-align: center;
			}
		}
		a {
			display: block;
			padding-bottom: 10px;
			@include fontoo(18px, normal, $wclr);

			span {
				display: inline-block;
				@include fontoo(22px, normal, $rclr);
				font-style: italic;
			}
		}
	}
	.by {
		@include less($smS) {
			@include flexoo(row, wrap, space-evenly, flex-start);
		}
	}
</style>
