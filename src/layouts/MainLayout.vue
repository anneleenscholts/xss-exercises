<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
</script>

<template>
    <div class="main-layout">
        <header>
            <h1 class="title">Security module exercises</h1>
        </header>
        <div class="nav">
            <button :class="{ active: route.name === 'exercise1' }"
                @click="() => router.push({ name: 'exercise1' })">Exercise
                1</button>
            <button :class="{ active: route.name === 'exercise2' }"
                @click="() => router.push({ name: 'exercise2' })">Exercise
                2</button>
            <button :class="{ active: route.name === 'exercise3' }"
                @click="() => router.push({ name: 'exercise3' })">Exercise
                3</button>
            <button :class="{ active: route.name === 'exercise4' }"
                @click="() => router.push({ name: 'exercise4' })">Exercise
                4</button>
        </div>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: bold;
}

.main-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button.active {
    background-color: #0056b3;
}
</style>