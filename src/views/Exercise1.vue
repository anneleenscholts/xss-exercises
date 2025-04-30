<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useHint } from '@/services/hintService';

const newComment = ref('');
const comments = ref<string[]>([]);
const router = useRouter();
const showHint = ref(false);
const toggleHint = () => {
    showHint.value = !showHint.value;
}

const { hints1 } = useHint();

const addComment = () => {
    if (newComment.value.trim()) {
        const newComments = [...comments.value, newComment.value];
        comments.value = newComments;
        newComment.value = '';
    }
}
</script>

<template>
    <div class="exercise">
        <h2>Exercise 1</h2>
        <div>
            <p>In deze oefening gaat het over XSS rechtstreeks via een inputveld. Kijk in de code eens naar
                <b>Exercise1.vue</b>. Wat denk je dat het probleem is?
            </p>
            <h3 class="subheader">Probeer zelf eens misbruik te maken van de vulnerabiliteit.</h3>
            <p>Als je een hint wil kan je op "Toggle Hint" klikken en dan krijg je een hint te zien.</p>

            <h3 class="subheader">Probeer zelf eens de vulnerabiliteit te fixen</h3>
            <p>Je kan via de "Go to solution" knop navigeren naar een component die er hetzelfde uitziet maar waar de
                vulnerabiliteit niet bestaat. Wat is er anders in de code?</p>
        </div>
    </div>
    <div class="comment-section">
        <div class="comment-block">
            <h3>Add Comment</h3>
            <textarea v-model="newComment" placeholder="Enter your comment"></textarea>
            <button @click="addComment">Submit</button>
        </div>
        <div class="comment-block">
            <h3>Comments</h3>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
                <div v-html="comment"></div>
            </div>
        </div>
    </div>
    <div class="solution-section">
        <button @click="toggleHint">Toggle Hint</button>
        <div class="codeblock" v-if="showHint">
            <div v-for="(hint, index) in hints1" :key="index">
                <p>{{ hint }}</p>
            </div>
        </div>
        <button @click="() => router.push({ name: 'exercise1-fix' })">Go to solution</button>
    </div>
</template>

<style scoped>
.comment-section {
    min-width: 75vw;
    display: flex;
    flex-direction: row;
    gap: 2em;
    min-width: 75vw;
    margin: 2rem 0;
}

.comment-block {
    width: 50%;
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
</style>