<template>
  <form @submit.prevent="handleSubmit" ref="passwordChangeForm">
    <div class="input-field input_component">
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
    <!-- <v-input type="text" id="name" inputText="Имя"></v-input>
    <v-input type="email" id="email" inputText="Email"></v-input> -->
    <div class="input-field input_component">
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
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import {LoginDataInterface} from '../../types/auth';
export default defineComponent({
  name: "vLogin",
  components: {
    VButton,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
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
    };
  },
  computed: {
    ...mapGetters(["LOADING_AUTH", "IS_AUTH"]),
  },
  methods: {
    ...mapActions(["LOGIN_IN"]),
    resetForm(): void {
      const elem = this.$refs.passwordChangeForm as HTMLFormElement;
      elem.reset();
    },
    handleSubmit(): void {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      } else {
    
        const formData:LoginDataInterface = {
          email: this.email,
          password: this.password,
        };
        this.LOGIN_IN(formData);
        this.resetForm();
      }
    },
  },
});
</script>

<style lang="less" scoped></style>
