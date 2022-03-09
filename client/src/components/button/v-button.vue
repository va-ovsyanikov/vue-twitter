<template>
  <button
    :class="{ blue: isBlue, button_user: isButtonUser, pulse: isPulse }"
    @click="onClick"
    class="btn"
  >
    {{ title }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    onClick: {
      type: Function,
      default: Function
    },
    title: {
      type: String,
      default:''
    },
    isBlue: {
      type: Boolean,
      default: false,
    },
    isButtonUser: {
      type: Boolean,
      default: false,
    },
    isPulse: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="less" scoped>
button {
  width: 100%;
  background-color: #ebe7e7;
  border-radius: 25px;
  transition: background-color 0.35s;
  text-transform: none;
  height: 45px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 18px;
  color: #000;
  &:hover {
    background-color: #bbb9b9;
  }
}
.blue {
  background-color: @color_blue;
  color: #fff;
  &:hover {
    background-color: @color_blue_hover !important;
  }
}
.button_user {
  width: 150px;
  font-size: 14px;
  height: 35px;
  margin-bottom: 10px;
}
</style>
