<script>
import skills from '../../data/skills';
import SkillSingle from './SkillSingle.vue';

export default {
	components: { SkillSingle },
	data: () => {
		return {
			skills,
			skillsHeading: 'Skills',
		};
	},
};
</script>

<template>
	<!-- Skills grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Skills grid title -->
		<div class="text-center" style="padding-bottom: 20px">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ skillsHeading }}
			</p>
		</div>

		<div
			class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mt-6 sm:gap-8"
		>
			<SkillSingle
				v-for="skill in skills"
				:key="skill.id"
				:skill="skill"
			/>
		</div>
	</section>
</template>

<style scoped></style>
