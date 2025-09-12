<script setup>
import { AnimatePresence, motion } from 'motion-v'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
	<motion.div class="flex justify-around md:justify-center gap-4 md:gap-20">
		<AnimatePresence mode="popLayout">
			<motion.div
				v-if="route.path !== '/home'"
				:initial="{ opacity: 0, y: -10 }"
				:animate="{ opacity: 1, y: 0 }"
				:exit="{ opacity: 0, y: -10 }"
				:transition="{ duration: 0.3 }"
				:key="'home'"
			>
				<RouterLink class="text-primary p-2" to="/home">Inicio</RouterLink>
			</motion.div>

			<motion.div
				class="min-w-[65px]"
				v-if="route.path !== '/about'"
				:initial="{ opacity: 0, y: -10 }"
				:animate="{ opacity: 1, y: 0 }"
				:exit="{ opacity: 0, y: -10 }"
				layout
				:transition="{ duration: 0.3 }"
				:key="'about'"
			>
				<RouterLink class="text-primary p-2" to="/about">Sobre mí</RouterLink>
			</motion.div>

			<motion.div
				v-if="route.path !== '/projects'"
				:initial="{ opacity: 0, y: -10 }"
				:animate="{ opacity: 1, y: 0 }"
				:exit="{ opacity: 0, y: -10 }"
				layout
				:transition="{ duration: 0.3 }"
				:key="'projects'"
			>
				<RouterLink class="text-primary p-2" to="/projects">Proyectos</RouterLink>
			</motion.div>

			<motion.div
				v-if="route.path !== '/contact'"
				:initial="{ opacity: 0, y: -10 }"
				:animate="{ opacity: 1, y: 0 }"
				:exit="{ opacity: 0, y: -10 }"
				layout
				:transition="{ duration: 0.3 }"
				:key="'contact'"
			>
				<RouterLink class="text-primary p-2" to="/contact">Contacto</RouterLink>
			</motion.div>
		</AnimatePresence>
	</motion.div>
</template>
