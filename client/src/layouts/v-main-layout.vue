<template>
  <div class="wrapper">
    <div class="sidebar_left" v-fixed>
      <router-link to="/"><fa :icon="['fab', 'twitter']" /></router-link>
      <v-menu></v-menu>
      <a class="register_btn modal-trigger" href="#modal_tweet">
        <v-button :isBlue="true" title="Твитнуть"> </v-button>
      </a>
      <v-modal id="modal_tweet" :isLight="true">
        <template v-slot:content>
          <div>Картинка</div>
          <v-button
            :isButtonUser="true"
            :isBlue="true"
            title="Твитнуть"
            :onClick="handleAddTweetModal"
            :disabled="!value"
          ></v-button>
        </template>
      </v-modal>
      <v-user-status></v-user-status>
    </div>

    <div class="main_content">
      <router-view />
    </div>
    <div class="sidebar_right" v-fixed>
      <v-search></v-search>
      <v-trends></v-trends>
      <v-followers></v-followers>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import vMenu from "../components/menu/v-menu.vue";
import vSearch from "../components/search/v-search.vue";
import vButton from "../components/button/v-button.vue";
import vModal from "../components/modal/v-modal.vue";
import vTrends from "../components/trends/v-trends.vue";
import vFollowers from "../components/followers/v-followers.vue";
import vUserStatus from "../components/user/v-user-status.vue";

export default defineComponent({
  components: {
    vMenu,
    vSearch,
    vModal,
    vButton,
    vTrends,
    vFollowers,
    vUserStatus,
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters(["LOADING_TWEET_ADD"]),
  },
  methods: {
    ...mapActions(["TWEET_ADD"]),
    handleAddTweetModal() {
      // const obj = {
      //   id: Math.floor(Math.random() * 1000),
      //   username: "ovsyanerrell ",
      //   avatarUrl: "https://source.unsplash.com/random/100X100?5",
      //   fullname: "vitaly ovsyanikov",
      //   text: this.value,
      // };

    },
  },
});
</script>
<style lang="less" scoped>
.fa-twitter {
  font-size: 30px;
  color: @color_blue;
  margin-left: 15px;
  margin-top: 15px;
}
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.main_content {
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
  padding: 0 0 100px 0;
  width: 600px;
}
.sidebar_left {
  width: 290px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}
.sidebar_right {
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0;
}
</style>
