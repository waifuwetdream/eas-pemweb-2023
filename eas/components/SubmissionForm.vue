<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="school">Sekolah asal:</label>
        <input type="text" id="school" v-model="formData.school" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          school: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          // Assuming you've configured Axios in your Nuxt.js project
          const response = await this.$axios.post('/form-submission', this.formData);
          console.log('Form Submitted:', response.data);
          // Optionally, show success message or perform further actions upon successful submission
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle errors - show error message or perform appropriate actions
        }
      }
    }
  };
  </script>
  