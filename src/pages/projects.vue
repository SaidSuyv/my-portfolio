<script setup>
import AdviceGeneratorImage from '@/assets/advice-generator.png'
import CalculatorImage from '@/assets/my_calculator.png'
import ProjectItem from '@/components/project-item.vue'
import { ref } from 'vue'

const projects = [
	{
		title: 'Advice generator',
		description:
			'Un proyecto que consta de el consumo de APIs de terceros utilizando frameworks front',
		image: AdviceGeneratorImage,
	},
	{
		title: 'Calculator',
		description: 'Un proyecto que consta de una calculadora con tecnologías web',
		image: CalculatorImage,
	},
]

const isModalOpen = ref(false)
const selectedItem = ref({})
const selectedIndex = ref(null)

const openModal = (item, index) => {
	console.log('ITEM & INDEX', item, index)
	selectedItem.value = item
	selectedIndex.value = index
	isModalOpen.value = true
}
</script>
<template>
	<div class="h-full flex flex-col items-center justify-center gap-8">
		<p class="text-secondary text-xl">Mis proyectos</p>
		<div class="w-full overflow-x-auto flex items-center gap-4">
			<ProjectItem
				v-for="(project, index) in projects"
				:key="index"
				:item="project"
				:index="index"
				:onClick="openModal"
			/>
		</div>
	</div>
</template>
