<script>
export default {
	
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2
				class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
			>
				Contact Details
			</h2>
			<ul class="font-general-regular">
				<li class="flex" :key="1">
					<i
						data-feather="map-pin"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<p
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						aria-label="Location"
					>
					Toronto-Ontario, Canada
				</p>
				</li>
				<li class="flex" :key="1">
					<i
						data-feather="mail"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="mailto:dhavalpatel32768@gmail.com"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						aria-label="Mail"
					>
					dhavalpatel32768@gmail.com
				</a>
				</li>
				<li class="flex" :key="1">
					<i
						data-feather="mail"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="https://www.linkedin.com/in/dhavalpatel1729"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						aria-label="Mail"
					>
					LinkedIn
				</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
