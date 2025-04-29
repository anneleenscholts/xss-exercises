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

<!-- Attack Vector: -->
<!-- <img src="x" onerror="alert('XSS Attack!')"> -->
<!-- <div onmouseover="alert('XSS Attack!')">Hover over me</div> -->
<!-- <a href="javascript:alert('XSS Attack!')">Click Me</a>-->

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