<script setup>
import { X } from 'lucide-vue-next'
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
	<AnimatePresence>
		<motion.div
			v-if="props.isOpen"
			:initial="{ opacity: 0 }"
			:animate="{ opacity: 1 }"
			:exit="{ opacity: 0 }"
			class="bg-black/40 backdrop-blur-sm absolute top-0 left-0 h-full w-full z-40"
			@click="closeModal"
		></motion.div>
		<motion.div
			v-if="props.isOpen"
			:initial="{ opacity: 0, y: -30 }"
			:animate="{ opacity: 1, y: 0 }"
			:exit="{ opacity: 0, y: -30 }"
			class="w-full h-full bg absolute top-0 left-0 z-50 overflow-auto sm:w-[80%] sm:h-[90%] sm:inset-0 sm:m-auto sm:rounded-xl lg:max-w-[50%]"
		>
			<button
				class="absolute right-5 top-5 z-50 bg-black/40 p-2 rounded-full"
				@click="closeModal"
			>
				<X color="#fff" />
			</button>
			<div class="overflow-hidden">
				<div class="h-50 blur-xs overflow-hidden flex items-center justify-center sm:h-70">
					<img :src="props.item.image" alt="Project image" />
				</div>
			</div>
			<div class="py-5 px-8 flex flex-col gap-4 sm:px-15 overflow-auto">
				<div class="flex flex-col gap-4">
					<p class="text-3xl text-white font-semibold">
						{{ props.item.title }}
					</p>
					<p class="text-lg text-white">{{ props.item.description }}</p>
					<p class="text-white opacity-50">Publicado en {{ props.item.published_at }}</p>
				</div>
				<div class="flex flex-col gap-6">
					<div class="flex gap-4" v-if="props.item.links">
						<a
							v-for="link in props.item.links"
							:key="link.name"
							:href="link.url"
							target="_blank"
							class="text-white flex items-center gap-3 border-2 border-white rounded-full py-1 px-4 hover:bg-white hover:text-black transition-colors"
						>
							<component :is="link.icon" class="w-5 h-5" />
							<span>{{ link.name }}</span>
						</a>
					</div>
					<div class="flex gap-5 items-center" v-if="props.item.stack">
						<div v-for="tech in props.item.stack" :key="tech.name" class="flex gap-2">
							<img class="w-5 h-5" :src="tech.image" alt="Image" />
							<p class="text-white">{{ tech.name }}</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	</AnimatePresence>
</template>
