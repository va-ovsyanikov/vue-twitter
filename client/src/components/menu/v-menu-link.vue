<template>
  <li>
    <router-link  class="item_link" :to="link">
      <fa :icon="icon" />
      {{ title }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title:String,
    icon:Array,
    link:String
  },
});
</script>
<style lang="less" scoped>
.item_link {
  display: inline-block;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 20px;
  // color: rgba(0, 0, 0, 0.72);
  margin-bottom: 10px;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: @color_blue;
    svg {
      color: @color_blue;
    }
  }
  svg {
    font-size: 20px;
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.8);
    transition: color ease-in-out 0.2s;
  }
}
</style>
