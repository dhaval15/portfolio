<script>
export default {
	props: ['skill'],
};
</script>

<template>
    <div>
		<div style="background-color: #99330022; border-radius: 50%; padding: 16%; aspect-ratio: 1; alignment:center">
			<img
				:src="skill.icon"
				:alt="skill.name"
				class="rounded-t-l border-none"
				style="display: block"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ skill.name }}
			</p>
		</div>
		</div>
</template>

<style lang="scss" scoped>
</style>
