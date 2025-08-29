<script setup>
import { AnimatePresence, motion } from 'motion-v'
import { onMounted, ref } from 'vue';

const pages = [
    `Me llamo <span class="text-secondary">Said Ian Ramses Suybate Vidal</span> y soy un <span class="text-secondary">Desarrollador web Full Stack</span>, llevo toda mi carrera dedicandome al desarrollo con gran entusiasmo y demostrando mi gran eficiencia en el ámbito laboral.`,
    `Cuento con <span class="text-secondary">fuertes conocimientos</span> en distintos lenguajes que me da la versatilidad de escoger lo que más conviene a los proyectos que se me otorgan, tomando en cuenta los requerimentos y casuísticas dadas antes, durante y después de la fase de desarrollo.`,
    `<span class="text-secondary">Lleno de vida</span> y <span class="text-secondary">entusiasmo</span>, espero con muchas ansias poder trabajar en proyectos nuevos y establecer una diferencia en el mercado.`
];

const currentIndex = ref(0)
let interval = null;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % pages.length;
}

const goToSlide = (index) => {
    currentIndex.value = index;
    clearInterval(interval)
    interval = setInterval(nextSlide, 6000)
}

onMounted(() => {
    interval = setInterval(nextSlide, 5000);
})

</script>
<template>
        <motion.div class="h-full flex flex-col items-center justify-center gap-4 max-w-[500px] sm:max-w-[800px] m-auto" layout>
            <motion.p class="text-secondary text-xl sm:text-lg">Un poco sobre mí</motion.p>
            <motion.div class="min-h-[240px] flex items-center justify-center">
                <motion.div
                    class="text-xl px-4"
                    :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :exit="{ opacity: 0, y: -20 }"
                    :transition="{ duration: 0.5 }"
                    :key="currentIndex"
                >
                    <p class="text-primary text-center text-2xl sm:text-4xl" v-html="pages[currentIndex]"></p>
                </motion.div>
            </motion.div>
            <div class="mt-4 flex justify-center gap-4" >
                <motion.span
                    v-for="(page, index) in pages"
                    :key="index"
                    class="w-[24px] h-[4px] rounded-[2px] cursor-pointer"
                    :class="{ 'bg-white': index === currentIndex, 'bg-white/40': index !== currentIndex }"
                    @click="goToSlide(index)"
                    :transition="{ backgroundColor: 0.3, transform: 0.3 }"
                ></motion.span>
            </div>
        </motion.div>
</template>
