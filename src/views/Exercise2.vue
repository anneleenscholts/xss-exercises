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
.comment-section {
    display: flex;
    flex-direction: row;
    gap: 2em;
    min-width: 75vw;
    margin: 2rem 0;
}

.comment-block {
    width: 50%;
}

textarea {
    width: 100%;
    height: 100px;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    max-width: fit-content;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.comment {
    padding: 0.5rem;
}

.codeblock {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
}

.solution-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}
</style>