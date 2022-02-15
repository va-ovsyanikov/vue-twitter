<template>
  <div class="sub__page__layuot__component">
    <div class="sub__page__layuot__top">
      <v-button-history @click="$router.go(-1)"></v-button-history>
      <!-- <h2 v-if="$route.query.page === 'tweets'">Твиты</h2> -->
      <h2>Назад</h2>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vButtonHistory from "../components/button/v-button-history.vue";
export default defineComponent({
  name: "vSubPageLayout",
  components: {
    vButtonHistory,
  },
});
</script>
<style lang="less" scoped>
.sub__page__layuot__top {
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eff3f4;
  height: 50px;
  padding-left: 15px;
}
h2 {
  font-size: 18px;
  margin: 0;
  margin-left: 15px;
  font-weight: bold;
}
</style>
