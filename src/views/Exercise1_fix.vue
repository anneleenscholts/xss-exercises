<script setup lang="ts">
import { ref } from 'vue';
import { sanitizeHTML } from '@/utils/util';

const newComment = ref('');
const comments = ref<string[]>([]);

const addComment = () => {
    if (newComment.value.trim()) {
        comments.value.push(newComment.value);
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
                <!-- <div>{{ comment }}</div> -->
                <div v-html="sanitizeHTML(comment)"></div>
            </div>
        </div>
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