<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <p class="contacts__text">Если у Вас есть пожелания и предложения по улучшению сервиса, пожалуйста, напишите нам</p>
    <form @submit.prevent="handleSubmit" class="contacts__form">
      <InputApp type="text" placeholder="Введите ваше имя" v-model="formData.name" :error-message="errorMessage"/>
      <InputApp type="email" placeholder="Введите ваш e-mail" v-model="formData.email" :error-message="errorMessage"/>
      <TextareaApp placeholder="Введите ваше сообщение" v-model="formData.message" :error-message="errorMessage"/>

      <ButtonApp type="submit">Отправить</ButtonApp>
    </form>
  </div>
</template>

<script>
import ButtonApp from '../ButtonApp.vue'
import InputApp from '../InputApp.vue'
import TextareaApp from '../TextareaApp.vue';
export default {
  components: { ButtonApp, InputApp, TextareaApp },
  name: 'ContactsPage',

  data() {    
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isError: false
    }
  },
  methods: {
    handleSubmit() {      
      if(this.validateForm) {
        console.log('click', this.formData);
      alert('Ваше сообщение отправлено')
      } else {
        this.isError = true
      }
      
    },
    validateForm() {
      if (this.formData.name && this.formData.email && this.formData.message) {
        this.isError = false
        return true
      } else {
        this.isError = true
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  .contacts {
    padding: 40px 0 120px;

    &__text {
      margin-bottom: 40px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>