<script setup>
import { AnimatePresence, motion } from 'motion-v'
</script>
<template>
	<AnimatePresence>
		<motion.div
			class="flex flex-col justify-center h-full w-full overflow-hidden gap-5"
			:initial="{ opacity: 0, scale: 0.5 }"
			:animate="{ opacity: 1, scale: 1 }"
			:exit="{ opacity: 0, scale: 0 }"
			:transition="{ duration: 1 }"
		>
			<div class="sm:relative md:-left-70">
				<p class="m-0 text-2xl text-secondary md:text-center sm:text-4xl">Hola,</p>
			</div>
			<p class="m-0 text-4xl text-primary md:text-center sm:text-6xl">
				Soy Said Ian Ramses Suybate Vidal
			</p>
			<div class="sm:relative md:-right-40">
				<p class="m-0 text-xl text-secondary md:text-center sm:text-4xl">Desarrollador Full Stack</p>
			</div>
		</motion.div>
	</AnimatePresence>
</template>
