<script setup>
import SectionWithDecor from '@/components/section/SectionWithDecor.vue';
import Form from '@/components/form/Form.vue';
import FormTextArea from '@/components/form/FormTextArea.vue';
import FormInput from '@/components/form/FormInput.vue';
import Text from '@/components/Text.vue';
</script>

<template>
  <main>
      <SectionWithDecor
          title="Send us a message"
      >
          <Form textConfirm="submit">
              <Text class="text_large-size text_large-height">
                  Feel free to fill out the form and reach to us. We will get back to you shortly.
              </Text>
              <FormInput placeholder="First Name"/>
              <FormInput placeholder="Last Name"/>
              <FormInput placeholder="Email" type="email"/>
              <FormInput placeholder="Phone" type="phone"/>
              <FormTextArea placeholder="Message"/>
          </Form>
      </SectionWithDecor>
  </main>
</template>
