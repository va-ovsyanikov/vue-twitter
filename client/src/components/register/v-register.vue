<template>
  <form @submit.prevent="handleSubmit" ref="passwordChangeForm">
    <div class="input-field">
      <input
        id="email"
        type="text"
        class="reg_input browser-default"
        v-model.trim="email"
        @blur="v$.email.$touch"
      />
      <label for="email">Email</label>
      <span v-if="v$.email.$error" class="helper-text">{{
        v$.email.$errors[0].$message
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="username"
        type="text"
        class="reg_input browser-default"
        v-model.trim="username"
        @blur="v$.username.$touch"
      />
      <label for="username">Username</label>
      <span v-if="v$.username.$error" class="helper-text">{{
        v$.username.$errors[0].$message
      }}</span>
    </div>

    <div class="input-field">
      <input
        id="fullname"
        type="text"
        class="reg_input browser-default"
        v-model.trim="fullname"
        @blur="v$.fullname.$touch"
      />
      <label for="fullname">Fullname</label>
      <span v-if="v$.fullname.$error" class="helper-text">{{
        v$.fullname.$errors[0].$message
      }}</span>
    </div>
    <!-- <v-input type="text" id="name" inputText="Имя"></v-input>
    <v-input type="email" id="email" inputText="Email"></v-input> -->
    <div class="input-field">
      <input
        id="password"
        type="password"
        class="reg_input browser-default"
        v-model.trim="password"
        @blur="v$.password.$touch"
      />
      <label for="password">Пароль</label>
      <span
        v-if="v$.password.$error"
        class="helper-text"
        data-error="wrong"
        data-success="right"
        >{{ v$.password.$errors[0].$message }}</span
      >
    </div>

    <div class="input-field">
      <input
        id="confirm"
        type="password"
        class="reg_input browser-default"
        v-model.trim="confirm"
        @blur="v$.confirm.$touch"
      />
      <label for="confirm">Повторите пароль</label>
      <span v-if="v$.confirm.$error" class="helper-text">{{
        v$.confirm.$errors[0].$message
      }}</span>
    </div>

    <v-button
      :isBlue="true"
      title="Создать"
      submit
      :disabled="LOADING_AUTH"
    ></v-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "../button/v-button.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
  sameAs,
} from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import {RegisterDataInterface} from '../../types/auth';
export default defineComponent({
  name: "vLogin",
  components: {
    VButton,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      username: "",
      fullname: "",
      password: "",
      confirm: "",
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage(
          "Поле обязательное для заполнения",
          required
        ),
        email: helpers.withMessage("Введите корректный Email", email),
      },

      username: {
        required: helpers.withMessage(
          "Поле обязательное для заполнения",
          required
        ),
        minLength: helpers.withMessage(
          ({ $params }: any) => `Минимальная длина поля  ${$params.min}`,
          minLength(2)
        ),
        maxLength: helpers.withMessage(
          ({ $params }: any) => `Максимальная длина поля  ${$params.max}`,
          maxLength(40)
        ),
      },

      fullname: {
        required: helpers.withMessage(
          "Поле обязательное для заполнения",
          required
        ),
        minLength: helpers.withMessage(
          ({ $params }: any) => `Минимальная длина поля  ${$params.min}`,
          minLength(2)
        ),
        maxLength: helpers.withMessage(
          ({ $params }: any) => `Максимальная длина поля  ${$params.max}`,
          maxLength(40)
        ),
      },

      password: {
        required: helpers.withMessage(
          "Поле обязательное для заполнения",
          required
        ),
        minLength: helpers.withMessage(
          ({ $params }: any) => `Минимальная длина поля  ${$params.min}`,
          minLength(6)
        ),
      },
      confirm: {
        required: helpers.withMessage(
          "Поле обязательное для заполнения",
          required
        ),
        sameAs: helpers.withMessage(
          "Пароли не совподают",
          sameAs(this.password)
        ),
      },
    };
  },
  computed: {
    ...mapGetters(["LOADING_AUTH"]),
  },
  methods: {
    ...mapActions(["REGISTER"]),
    resetForm(): void {
      const elem = this.$refs.passwordChangeForm as HTMLFormElement;
      elem.reset();
    },
    handleSubmit(): void {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      } else {
        const formData: RegisterDataInterface = {
          email: this.email,
          username:this.username,
          fullname:this.fullname,
          password: this.password
        };
        this.REGISTER(formData);
        // this.email = "";
        // this.password = "";
        this.resetForm();
      }
    },
  },
});
</script>

<style lang="less" scoped></style>
