<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <p class="contacts__text">
      Если у Вас есть пожелания и предложения по улучшению сервиса, пожалуйста, напишите нам
    </p>
    <form @submit.prevent="handleSubmit" class="contacts__form">
      <InputApp
        type="text"
        placeholder="Введите ваше имя"
        v-model="formData.name"
        :error-message="errorMessages.name"
      />
      <InputApp
        type="email"
        placeholder="Введите ваш e-mail"
        v-model="formData.email"
        :error-message="errorMessages.email"
      />
      <TextareaApp
        placeholder="Введите ваше сообщение"
        v-model="formData.message"
        :error-message="errorMessages.message"
      />

      <ButtonApp type="submit" width="140">Отправить</ButtonApp>
    </form>
    <ModalApp v-if="isModalVisible" :is-visible="isModalVisible" @close="closeModal">
      <template #title>Ваше сообщение отправлено!</template>
      <template #default>Мы свяжемся с Вами ближайшее время</template>
    </ModalApp>
  </div>
</template>

<script>
import ButtonApp from '/src/shared/components/ButtonApp.vue'
import InputApp from '/src/shared/components/InputApp.vue'
import ModalApp from '/src/entities/ModalApp.vue'
import TextareaApp from '/src/shared/components/TextareaApp.vue'
export default {
  components: { ButtonApp, InputApp, TextareaApp, ModalApp },
  name: 'ContactsPage',

  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      errorMessages: {
        name: '',
        email: '',
        message: '',
      },
      isValid: false,
      isModalVisible: false,
    }
  },
  methods: {
    handleSubmit() {
      this.validateForm()
      if (this.isValid) {
        console.log('click', toString(this.formData))
        this.openModal()
        this.formData.name = ''
        this.formData.email = ''
        this.formData.message = ''
        this.errorMessages.name = ''
        this.errorMessages.email = ''
        this.errorMessages.message = ''
        this.isValid = false
      } else {
        this.isError = true
      }
    },
    validateForm() {
      if (!this.formData.name.trim()) {
        this.errorMessages.name = 'Введите Ваше имя'
        this.isValid = false
      }

      if (!this.formData.email.trim()) {
        this.errorMessages.email = 'Введите Ваш Email'
        this.isValid = false
      }

      if (!this.formData.message.trim()) {
        this.errorMessages.message = 'Введите Ваше сообщение'
        this.isValid = false
      } else {
        this.isValid = true
      }
    },
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 40px 0 120px;

  &__text {
    margin-bottom: 40px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>