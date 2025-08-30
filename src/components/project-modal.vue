<script setup>
import { AnimatePresence, motion } from 'motion-v'
import { ref, onMounted } from 'vue'

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
	item: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
})

const emit = defineEmits(['update:isOpen'])

const closeModal = () => emit('update:isOpen', false)

onMounted(() => {
	console.log('INDEX', props.index)
})
</script>

<template>
	<motion.div
		:initial="{ opacity: 0 }"
		:animate="{ opacity: 1 }"
		:layout-id="`project-${props.index == null ? '' : props.index}`"
		class="h-[250px] w-[250px] bg-gray-400 rounded-3xl shrink-0 overflow-hidden flex justify-center fixed inset-1/2 -translate-1/2"
	>
		<img :src="props.item.image" alt="Image Project" class="h-full max-w-none" />
		<div
			class="bg-black/60 backdrop-blur-xs absolute inset-0 flex flex-col justify-end p-5 text-primary"
		>
			<p class="font-bold">{{ props.item.title }}</p>
			<p class="font-medium">{{ props.item.description }}</p>
			<button @click="closeModal">Cerrar</button>
		</div>
	</motion.div>
</template>
