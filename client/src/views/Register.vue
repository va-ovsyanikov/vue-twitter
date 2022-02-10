<template>
  <div class="register">
    <div class="row">
      <div class="col s12 m6 register_blue">
        <fa :icon="['fab', 'twitter']" />
      </div>

      <div class="col s12 m6 register_block">
        <div class="register_buttons">
          
          <a class="register_btn modal-trigger" href="#modal_register">
            <v-button title="Зарегистрироваться" :isBlue="true"></v-button>
          </a>
          <a class="register_btn modal-trigger" href="#modal_login">
            <v-button title="Войти"></v-button>
          </a>

        </div>

        <v-modal id="modal_register">
          <template v-slot:head> Создайте учетную запись </template>
          <template v-slot:content>
            <v-register></v-register>
          </template>
        </v-modal>

        <v-modal id="modal_login">
          <template v-slot:head> Войти </template>
          <template v-slot:content>
            <v-login></v-login>
          </template>
        </v-modal>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VModal from "../components/modal/v-modal.vue";
import VButton from "../components/button/v-button.vue";
import vLogin from "../components/login/v-login.vue";
import vRegister from '../components/register/v-register.vue';

export default defineComponent({
  components: {
    VModal,
    VButton,
    vLogin,
    vRegister
  },
  data() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.row {
  margin: 0;
}
.register_blue {
  background-color: @color_blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .fa-twitter {
    font-size: 230px;
    color: #fff;
  }
}
.register_block {
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register_buttons {
  max-width: 350px;
  width: 400px;
}
</style>
