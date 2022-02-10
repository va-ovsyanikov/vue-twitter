<template>
  <div class="status_component">
      <img class="avatar" src="img/avatar2.jpg" alt="alt" />
    <div class="names">
      <span class="fullname">Виталий</span>
      <span class="username">@Vitas546749</span>
    </div>
    <div class="dropdown">fghf</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="less" scoped>
.status_component {
  display: flex;
  margin-top: auto;
  margin-bottom: 30px;
  align-items: center;
  cursor: pointer;
  transition: @bacground_trs;
  padding: 10px 12px;
  border-radius: 50px;
  &:hover {
    background-color: @color_gray_hover;
  }
}
  img {
    width: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
.names {
  display: flex;
  flex-direction: column;
}
.fullname {
  font-weight: bold;
}
.dropdown {
  margin-left: auto;
}
</style>
