<template>
  <div class="status__component">
    <img class="avatar" src="img/avatar2.jpg" alt="alt" />
    <div class="names">
      <span class="fullname">{{ USER.fullname }}</span>
      <span class="username">{{ USER.username }}</span>
    </div>
    <div class="dropdown__user__status">
      <v-dropdown
        :onClick1="handleClickProfile"
        :onClick2="handleClickLogout"
        title_top="Профиль"
        title_bottom="Выйти"
      ></v-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import vDropdown from "../dropdown/v-dropdown.vue";
export default defineComponent({
  name: "vUserStatus",
  components: {
    vDropdown,
  },
  computed: {
    ...mapGetters(["USER"]),
  },
  methods: {
    ...mapActions(["USER_FETCH", "LOG_OUT"]),
    handleClickProfile() {
      this.$router.push("/profile");
    },
    handleClickLogout() {
      this.LOG_OUT();
    },
  },
  mounted() {
    this.USER_FETCH();
  },
});
</script>

<style lang="less" scoped>
.status__component {
  position: relative;
  display: flex;
  margin-top: auto;
  margin-bottom: 40px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fullname {
  font-weight: bold;
}
.dropdown__user__status {
  margin-left: auto;
}
</style>
