<script setup>
import { AnimatePresence, motion } from 'motion-v'
</script>
<template>
	<AnimatePresence>
		<motion.div
			class="flex flex-col justify-center h-full w-full overflow-hidden"
			:initial="{ opacity: 0, scale: 0.5 }"
			:animate="{ opacity: 1, scale: 1 }"
			:exit="{ opacity: 0, scale: 0 }"
			:transition="{ duration: 1 }"
		>
			<div class="sm:relative sm:-left-30">
				<p class="m-0 text-xl text-secondary sm:text-center">Hola,</p>
			</div>
			<p class="m-0 text-3xl text-primary sm:text-center">
				Soy Said Ian Ramses Suybate Vidal
			</p>
			<div class="sm:relative sm:-right-20">
				<p class="m-0 text-xl text-secondary sm:text-center">Desarrollador Full Stack</p>
			</div>
		</motion.div>
	</AnimatePresence>
</template>
