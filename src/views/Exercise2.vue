<script setup lang="ts">
import { useHint } from '@/services/hintService';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const showHint = ref(false);
const toggleHint = () => {
    showHint.value = !showHint.value;
}
const router = useRouter();
const { hints2 } = useHint();

const searchQuery = ref('');
const results = ref(['Result 1', 'Result 2', 'Result 3']);

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    searchQuery.value = urlParams.get('q') || '';
});
</script>

<template>
    <div class="exercise">
        <h2>Exercise 2</h2>
        <div>
            <p>In deze oefening gaat het over XSS via URL parameters. Kijk in de code eens naar
                <b>Exercise2.vue</b>. Wat denk je dat het probleem is?
            </p>
            <h3 class="subheader">Probeer zelf eens misbruik te maken van de vulnerabiliteit.</h3>
            <p>Als je een hint wil kan je op "Toggle Hint" klikken en dan krijg je een hint te zien.</p>

            <h3 class="subheader">Probeer zelf eens de vulnerabiliteit te fixen</h3>
            <p>Je kan via de "Go to solution" knop navigeren naar een component die er hetzelfde uitziet maar waar de
                vulnerabiliteit niet bestaat. Wat is er anders in de code?</p>
        </div>
    </div>
    <div class="search-results">
        <h2>Search Results</h2>
        <!-- Vulnerable: Directly reflecting URL parameters as HTML -->
        <p v-html="`You searched for: ${searchQuery}`"></p>
        <ul>
            <li v-for="(result, index) in results" :key="index">{{ result }}</li>
        </ul>
    </div>
    <div class="solution-section">
        <button @click="toggleHint">Toggle Hint</button>
        <div class="codeblock" v-if="showHint">
            <div v-for="(hint, index) in hints2" :key="index">
                <p>{{ hint }}</p>
            </div>
        </div>
        <button @click="() => router.push({ name: 'exercise2-fix' })">Go to solution</button>
    </div>
</template>

<style scoped>
.search-results {
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-width: 75vw;
    margin: 2rem 0;
}
</style>