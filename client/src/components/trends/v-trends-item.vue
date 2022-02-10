<template>
  <li>
    <router-link class="trends_item" :to="`/trends/:${trend.name}`">
      <h4>{{ trend.name }}</h4>
      <span>Твитов: {{ trend.count }}</span>
    </router-link>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType} from "vue";
import {TrendType} from '../../types/trends';
export default defineComponent({
  props: {
    trend:Object as PropType<TrendType>
  },
});
</script>

<style lang="less" scoped>
.trends_item {
  padding: 15px;
  display: block;
  transition: background-color ease-in-out 0.3s;
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
    color:@color_darkened_gray;
  }
}
</style>
