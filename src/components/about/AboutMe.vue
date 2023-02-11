<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a creative and curious individul, who loves programming and technologies   that  sorrounds   it.   I   find  exploring   new technologies and  new domains, an interesting  learning process, and often myself  find trying out technologies  that are totally different from  my skillset, which  allows me to  understand the concepts better and evolve as a professional.',
				},
				{
					id: 2,
					bio:
						'I believe programming and  developing technologies in general as creative as  art, and sometimes find  myself exploring paradigms that  affects better  development process.  I also  love writing about technolgy, movies, books and on rare ocassions psychology.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<!--
		<div class="w-full sm:w-2/3 mb-7 sm:mb-0">
			
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div> 
		-->

		<!-- About details -->
		<div class="w-full sm:w-2/3 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				style="text-align:justify"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>

		<div class="w-full sm:w-1/3 mb-7 sm:mb-0">
		</div> 
	</div>
</template>
