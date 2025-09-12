<script setup>
import { AtSign } from 'lucide-vue-next'
import AppFooter from './AppFooter.vue'
import AppNav from './AppNav.vue'
import { motion } from 'motion-v'
import { useRoute } from 'vue-router'
import router from '@/router'

const containerVariants = {
	appear: {
		transition: { staggerChildren: 0.2, delayChildren: 0.2 },
	},
	hide: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

const linksVariants = {
	appear: {
		opacity: 1,
		scale: 1,
	},
	hide: {
		opacity: 0,
		scale: 0.2,
	},
}

const route = useRoute()
</script>
<template>
	<AppNav />
	<RouterView />
	<AppFooter />
	<motion.div
		initial="hide"
		animate="appear"
		exit="hide"
		:variants="containerVariants"
		class="flex flex-col gap-4 fixed bottom-[20px]"
		v-if="route.path !== '/contact'"
	>
		<motion.a
			:variants="linksVariants"
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
		<motion.a
			:variants="linksVariants"
			class="text-primary"
			href="mailto:sirsuyvi@gmail.com"
			target="_blank"
		>
			<AtSign />
		</motion.a>
	</motion.div>
</template>
