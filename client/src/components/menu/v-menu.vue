<template>
  <div class="nav_component">
    <ul>
      <li
        class="item_link "
        :class="{item_link_active: index === isActive}"
        v-for="(item, index) in links"
        :key="item"
        @click="handleItemActive(index)"
      >
        <router-link :to="item.link">
          <fa :icon="item.icon" />
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "vMenu",
  components: {},
  data() {
    return {
      isActive:0,
      links: [
        { icon: ["fas", "home"], title: "Главная", link: "/" },
        { icon: ["fas", "bell"], title: "Уведомление", link: "/notice" },
        { icon: ["fas", "envelope"], title: "Сообщение", link: "/message" },
        { icon: ["fas", "bookmark"], title: "Закладки", link: "/bookmark" },
        { icon: ["fas", "list-alt"], title: "Список", link: "/list" },
        { icon: ["fas", "user"], title: "Профиль", link: "/profile" },
      ],
    };
  },
  methods: {
    handleItemActive(index: any): void {
      this.isActive = index
    },
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
.item_link {
  display: inline-block;
  
  border-radius: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
  a {
    transition: color ease-in-out 0.2s;
    padding: 8px 15px;
  display: block;
  }
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    a {
      color: @color_blue;
    }

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
  &_active {
    background-color: rgba(29, 161, 242, 0.1);
    a {
      color: @color_blue;
    }
    svg {
      color: @color_blue;
    }
  }
}
</style>
