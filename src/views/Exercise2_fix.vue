<script setup lang="ts">
import { onMounted, ref } from 'vue';

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
        <p>You searched for: {{ searchQuery }}</p>
        <ul>
            <li v-for="(result, index) in results" :key="index">{{ result }}</li>
        </ul>
    </div>
</template>

<style scoped>
.search-results {
    display: flex;
    min-width: 75vw;
    flex-direction: column;
    gap: 1em;
    min-width: 75vw;
    margin: 2rem 0;
}
</style>