import {ref, watch} from 'vue'
import { defineStore } from 'pinia'

const storeName = "message"

export const useContactStore = defineStore(storeName, () => {
    const messages = ref(JSON.parse(localStorage.getItem(storeName) || '[]'));
    const id = ref(JSON.parse(localStorage.getItem("id") || 0))
    const add = (data) =>
        messages.value.push({
            id: id.value++,
            ...data,
        });

    watch(messages, (cur) => {
        if (messages.value.length === 0) {
            id.value = 0;
        }
        localStorage.setItem(storeName, JSON.stringify(cur));
    }, {deep: true});
    watch(id, (cur) => localStorage.setItem("id", cur));

    return { add }
})