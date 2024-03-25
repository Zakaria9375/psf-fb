<script setup></script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="36"
		height="36"
		viewBox="0 0 64 64"
		id="code"
	>
		<defs>
			<mask id="cutout-mask">
				<rect width="100%" height="100%" class="svg-clr" />
				<path
					fill="black"
					d="M39.214 13.132a2 2 0 0 0-2.582 1.154l-13 34a2 2 0 1 0 3.736 1.428l13-34a2 2 0 0 0-1.154-2.582M54.14 28.852l-10.631-6.554a1.999 1.999 0 1 0-2.099 3.404l10.123 6.241a.22.22 0 0 1 0 .114L41.41 38.298a2 2 0 1 0 2.099 3.404l10.631-6.554.165-.165a4.225 4.225 0 0 0 0-5.966l-.165-.165"
				></path>
				<path
					fill="black"
					d="m22.59 38.298-10.123-6.241a.22.22 0 0 1 0-.114l10.123-6.241a2 2 0 1 0-2.099-3.404L9.86 28.852l-.165.165a4.225 4.225 0 0 0 0 5.966l.165.165 10.631 6.554a1.999 1.999 0 0 0 2.099-3.404"
				></path>
				<path
					fill="black"
					d="m54.305 34.983-.165.165-10.631 6.554a1.999 1.999 0 0 1-2.099-3.404l10.123-6.241a.22.22 0 0 0 0-.114L41.41 25.702a2 2 0 1 1 2.099-3.404l10.631 6.554.165.165a4.225 4.225 0 0 1 0 5.966z"
				></path>
			</mask>
		</defs>
		<circle
			cx="32"
			cy="32"
			r="32"
			mask="url(#cutout-mask)"
			class="svg-clr"
		></circle>
	</svg>
</template>
<style lang="scss">
	
</style>
