<script setup>
import { AtSign, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { motion } from 'motion-v'

const contVar = {
	appear: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
	hide: { transition: { staggerChildren: 0.05, staggerDirecction: -1 } },
}

const itemVar = {
	appear: {
		opacity: 1,
		y: 0,
	},
	hide: {
		opacity: 0,
		y: 30,
	},
}
</script>
<template>
	<motion.div
		initial="hide"
		animate="appear"
		:variants="contVar"
		class="flex flex-col items-center justify-center gap-5 h-full"
	>
		<motion.p class="text-white" :variants="itemVar"
			>Si tiene una idea, no dude ni espere más</motion.p
		>
		<div class="flex items-center gap-10">
			<motion.a
				:variants="itemVar"
				class="text-primary"
				href="https://github.com/SaidSuyv"
				target="_blank"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-github-icon lucide-github"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/>
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
			</motion.a>
			<motion.p
				class="p-2 rounded-md border-2 border-white text-white flex items-center gap-3"
				:variants="itemVar"
			>
				<ChevronLeft :size="30" />
				<span>Contactame</span>
				<ChevronRight :size="30" />
			</motion.p>
			<motion.a
				:variants="itemVar"
				class="text-primary"
				href="mailto:sirsuyvi@gmail.com"
				target="_blank"
			>
				<AtSign />
			</motion.a>
		</div>
	</motion.div>
</template>
