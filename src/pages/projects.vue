<script setup>

import AdviceGeneratorImage from '@/assets/advice-generator.png'
import CalculatorImage from '@/assets/my_calculator.png'

const projects = [
    { title: "Advice generator", description: "Un proyecto que consta de el consumo de APIs de terceros utilizando frameworks front", image: AdviceGeneratorImage },
    { title: "Calculator", description: "Un proyecto que consta en construir una calculadora con tecnologías web", image: CalculatorImage }
];

</script>
<template>
    <div class="h-full flex flex-col items-center justify-center gap-8">
        <p class="text-secondary text-xl">Proyectos más destacados</p>
        <div class="w-full overflow-auto flex items-center justify-center gap-4">
            <div
                class="group h-[250px] w-[250px] bg-gray-400 rounded-3xl shrink-0 overflow-hidden flex justify-center relative"
                v-for="project in projects"
            >
                <img :src="project.image" alt="Image Project" class="h-full max-w-none">
                <div class="bg-black/60 backdrop-blur-xs absolute inset-0 flex flex-col justify-end p-5 text-primary opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <p class="font-bold">{{ project.title }}</p>
                    <p class="font-medium">{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
