<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Portfolio',
			author: 'Dhaval Patel',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}
			<span
				class="font-general-medium hover:underline hover:text-pink-600 dark:hover:text-pink-300 duration-500"
			>
				{{ projectName }}
	</span>
			- developed by
			<span
				class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-pink-600 dark:hover:text-pink-300 duration-500"
				>{{ author }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
