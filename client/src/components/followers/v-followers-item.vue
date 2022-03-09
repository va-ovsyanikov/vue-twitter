<template>
  <li>
    <router-link class="followers__item" to="/">
      <img :src="img" alt="alt" />
      <div class="followers__item__title">
        <h4>{{ title }}</h4>
        <span>{{ nickname }}</span>
      </div>
      <fa :icon="['fas', 'user-plus']" />
    </router-link>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    nickname: {
      type: String,
      default: "",
    },
  },
});
</script>
<style lang="less" scoped>
.followers__item {
  padding: 15px;
  transition: background-color ease-in-out 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    background-color: @color_gray_hover;
  }
  h4 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 12px;
  }
  img {
    margin-right: 10px;
  }
  .fa-user-plus {
    margin-left: auto;
    margin-right: 20px;
    color: @color_blue;
  }
}
</style>
