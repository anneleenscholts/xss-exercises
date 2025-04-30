<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('Route params:', route.params);
</script>

<template>
    <div class="welcome-page">
        <h1>Welcome, {{ route.params.name }}!</h1>
    </div>
</template>