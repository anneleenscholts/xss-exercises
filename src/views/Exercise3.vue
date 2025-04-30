<script setup lang="ts">
import { useHint } from '@/services/hintService';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const showHint = ref(false);
const toggleHint = () => {
    showHint.value = !showHint.value;
}

const { hints3 } = useHint();
</script>

<template>
    <div class="exercise">
        <h2>Exercise 3</h2>
        <div>
            <p>In deze oefening gaat het over XSS via router parameters. Kijk in de code eens naar
                <b>Exercise3.vue</b>. Wat denk je dat het probleem is?
            </p>
            <h3 class="subheader">Probeer zelf eens misbruik te maken van de vulnerabiliteit.</h3>
            <p>Als je een hint wil kan je op "Toggle Hint" klikken en dan krijg je een hint te zien.</p>

            <h3 class="subheader">Probeer zelf eens de vulnerabiliteit te fixen</h3>
            <p>Je kan via de "Go to solution" knop navigeren naar een component die er hetzelfde uitziet maar waar de
                vulnerabiliteit niet bestaat. Wat is er anders in de code?</p>
        </div>
    </div>
    <div class="welcome-page">
        <h1 v-html="`Welcome, ${route.params.name}!`"></h1>
    </div>
    <div class="solution-section">
        <button @click="toggleHint">Toggle Hint</button>
        <div class="codeblock" v-if="showHint">
            <div v-for="(hint, index) in hints3" :key="index">
                <p>{{ hint }}</p>
            </div>
        </div>
        <button @click="() => router.push({ name: 'exercise3-fix', params: { name: 'anneleen' } })">Go to
            solution</button>
    </div>
</template>

<style scoped>
.welcome-page {
    display: flex;
    min-width: 75vw;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}
</style>