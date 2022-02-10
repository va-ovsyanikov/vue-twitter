<template>
  <div class="button_history_component">
    <fa :icon="['fas', 'arrow-left']" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.button_history_component {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 20px;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color:  @color_blue_hover;
  }
}
.fa-arrow-left {
  font-size: 18px;
  color: @color_blue;
}
</style>
