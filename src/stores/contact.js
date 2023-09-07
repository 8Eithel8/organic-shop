import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid';

const storeName = "message"

export const useMessagesStore = defineStore(storeName, () => {
    const messages = ref(JSON.parse(localStorage.getItem(storeName) || '[]'));
    const add = (data) =>
        messages.value.push({
            id: nanoid(),
            ...data,
        });

    watch(messages, (cur) => {
        localStorage.setItem(storeName, JSON.stringify(cur));
    }, {deep: true});

    return { add };
})