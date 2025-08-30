<script setup>
import { motion } from 'motion-v'
import { ref } from 'vue'

const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
	item: {
		type: Object,
		required: true,
	},
	onClick: {
		type: Function,
		required: true,
	},
})

const expandItem = () => {
	props.onClick(props.item, props.index)
}

const activeProject = ref(null)

const delegateClick = () => {
	expandItem()
}
</script>

<template>
	<motion.div
		class="group h-[250px] w-[250px] bg-gray-400 rounded-3xl shrink-0 overflow-hidden flex justify-center relative"
		@click="delegateClick"
		:layout-id="`project-${props.index}`"
	>
		<img :src="props.item.image" alt="Image Project" class="h-full max-w-none" />
		<div
			class="bg-black/60 backdrop-blur-xs absolute inset-0 flex flex-col justify-end p-5 text-primary opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"
		>
			<p class="font-bold">{{ props.item.title }}</p>
			<p class="font-medium">{{ props.item.description }}</p>
		</div>
	</motion.div>
</template>
