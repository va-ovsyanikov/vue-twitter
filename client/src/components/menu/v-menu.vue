<template>
  <div class="nav_component">
    <ul>
      <v-menu-link
        v-for="itemLink in links"
        :key="itemLink"
        :title="itemLink.title"
        :icon="itemLink.icon"
        :link="itemLink.link"
      >
      </v-menu-link>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vMenuLink from "./v-menu-link.vue";
export default defineComponent({
  components: {
    vMenuLink,
  },
  data() {
    return {
      links: [
        { icon: ["fas", "home"], title: "Главная", link: "/" },
        { icon: ["fas", "search"], title: "Поиск", link: "/" },
        { icon: ["fas", "bell"], title: "Уведомление", link: "/" },
        { icon: ["fas", "envelope"], title: "Сообщение", link: "/" },
        { icon: ["fas", "bookmark"], title: "Закладки", link: "/" },
        { icon: ["fas", "list-alt"], title: "Список", link: "/" },
        { icon: ["fas", "user"], title: "Профиль", link: "/" },
      ],
    };
  },
});
</script>
<style lang="less" scoped>
.nav_component {
  margin-top: 30px;

  ul {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
