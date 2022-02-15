<template>
  <div class="wrapper">
    <div class="sidebar__left" v-fixed>
      <router-link to="/"><fa :icon="['fab', 'twitter']" /></router-link>
      <v-menu></v-menu>
      <a class="register__btn modal-trigger" href="#modal__tweet">
        <v-button :isBlue="true" title="Твитнуть"> </v-button>
      </a>
      <v-modal id="modal__tweet" :isLight="true">
        <template v-slot:content>
       <v-user-tweet></v-user-tweet>
        </template>
      </v-modal>
      <v-user-status></v-user-status>
    </div>

    <div class="main__content">
      <router-view />
    </div>
    <div class="sidebar__right" v-fixed>
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
import vUserTweet from '../components/user/v-user-tweet.vue'

export default defineComponent({
  components: {
    vMenu,
    vSearch,
    vModal,
    vButton,
    vTrends,
    vFollowers,
    vUserStatus,
    vUserTweet
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
h5{
  display: none;
}
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
.main__content {
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
  padding: 0 0 100px 0;
  width: 600px;
}
.sidebar__left {
  width: 290px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}
.sidebar__right {
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0;
}
</style>
