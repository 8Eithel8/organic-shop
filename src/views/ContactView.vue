<script setup>
import SectionWithDecor from '@/components/section/SectionWithDecor.vue';
import Form from '@/components/form/Form.vue';
import FormTextArea from '@/components/form/FormTextArea.vue';
import FormInput from '@/components/form/FormInput.vue';
import Text from '@/components/Text.vue';
import { ref } from 'vue';
import { useMessagesStore } from '@/stores/contact';

const store = useMessagesStore();
const { add } = store;

const name = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const text = ref('');

const data = { name, lastName, email, phone, text }
</script>

<template>
  <main>
      <SectionWithDecor
          title="Send us a message"
      >
          <Form textConfirm="submit" :onSubmit="() => add(data)">
              <Text class="text_large-size text_large-height">
                  Feel free to fill out the form and reach to us. We will get back to you shortly.
              </Text>
              <FormInput v-model="name" placeholder="First Name"/>
              <FormInput v-model="lastName" placeholder="Last Name"/>
              <FormInput v-model="email" placeholder="Email" type="email"/>
              <FormInput v-model="phone" placeholder="Phone" type="phone"/>
              <FormTextArea v-model="text" placeholder="Message"/>
          </Form>
      </SectionWithDecor>
  </main>
</template>
