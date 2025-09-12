<script setup>
import projects from '@/data/projects'

import ProjectItem from '@/components/project-item.vue'
import ProjectModal from '@/components/project-modal.vue'
import { ref } from 'vue'

import { motion } from 'motion-v'

const isModalOpen = ref(false)
const selectedItem = ref({})
const selectedIndex = ref(null)

const openModal = (item, index) => {
	console.log('ITEM & INDEX', item, index)
	selectedItem.value = item
	selectedIndex.value = index
	isModalOpen.value = true
}

const containerVar = {
	appear: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
	hide: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}
</script>
<template>
	<div class="h-full flex flex-col items-center justify-center gap-8">
		<p class="text-secondary text-xl">Mis proyectos</p>
		<motion.div
			initial="hide"
			animate="appear"
			:variants="containerVar"
			class="w-full overflow-x-auto overflow-y-hidden py-5 flex items-center gap-4"
		>
			<ProjectItem
				v-for="(project, index) in projects"
				:key="index"
				:item="project"
				:index="index"
				:onClick="openModal"
			/>
		</motion.div>
	</div>
	<ProjectModal
		@update:isOpen="($event) => (isModalOpen = $event)"
		:isOpen="isModalOpen"
		:item="selectedItem"
		:index="selectedIndex"
	/>
</template>
