<template>
<div>
  <div class="home">
    <h2>Главная</h2>
    <v-user></v-user>
    <v-loading sizes="big" v-if="LOADING"></v-loading>
    <v-tweet
      v-else
      v-for="tweet in TWEETS"
      :key="tweet._id"
      :createdAt="tweet.user.createdAt"
      :_id="tweet._id"
      :text="tweet.text"
      :fullname="tweet.user.fullname"
      :username="tweet.user.username"
   
    />
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import vTweet from "../components/tweets/v-tweet.vue";
import vUser from "../components/user/v-user-tweet.vue";
import vLoading from "../components/loading/v-loading.vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    vTweet,
    vUser,
    vLoading,
  },
  computed: {
    ...mapGetters(["TWEETS", "LOADING"]),
  },
  methods: {
    ...mapActions(["TWEET_FETCH_ALL"]),
  },
  mounted(): void {
    this.TWEET_FETCH_ALL();
  },

});
</script>
<style lang="less" scoped>
.home {
  h2 {
    border-bottom: 1px solid @color_gray;
    font-size: 20px;
    font-weight: 900;
    margin: 0;
    padding: 15px;
  }
}
</style>
