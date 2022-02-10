<template>
  <div>
    <v-loading v-if="LOADING"></v-loading>
    <div class="page_component" v-else>
      <div class="top">
        <div class="avatar">
          <img :src="TWEET.avatarUrl" alt="alt" />
        </div>
        <div class="names">
          <a class="fullname" href="/">
            <span>{{ TWEET.fullname }}</span>
          </a>
          <a href="" class="username">
            <span>{{ TWEET.username }}</span>
          </a>
        </div>
      </div>
      <div class="text">
        <p>{{ TWEET.text }}</p>
      </div>
      <div class="date">
        <span>{{
          TWEET.createdAt &&
          format(new Date(TWEET.createdAt), "H:mm", { locale: ruLang })
        }}</span>
        <br />
        <span>{{
          TWEET.createdAt &&
          format(new Date(TWEET.createdAt), "dd MMM yyy г.", { locale: ruLang })
        }}</span>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="item in list" :key="item">
            <a href="">
              <fa :icon="item.icon" />
            </a>
            <span>13453</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import vLoading from "../loading/v-loading.vue";
import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";
export default defineComponent({
  name: "vTweetPage",
  components: {
    vLoading,
  },
  data() {
    return {
      format,
      ruLang,
      list: [
        { icon: ["far", "comment"] },
        { icon: ["far", "share-square"] },
        { icon: ["far", "heart"] },
        { icon: ["far", "clone"] },
      ],
    };
  },
  computed: {
    ...mapGetters(["TWEET", "LOADING"]),
  },
  methods: {
    ...mapActions(["TWEET_FETCH_ONE"]),
  },
  mounted() {
    this.TWEET_FETCH_ONE(this.$route.params.id);
  },
});
</script>
<style lang="less" scoped>
.page_component {
  border-top: 1px solid rgb(239, 243, 244);
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 15px;
}
.avatar {
  width: 11%;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
}
.names {
  display: flex;
  flex-direction: column;
  width: 89%;
}
.fullname {
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
}
.username {
  color: @color_darkened_gray;
  font-size: 14px;
}
.date {
  color: @color_darkened_gray;
  margin-top: 30px;
  margin-bottom: 15px;
  &:hover {
    text-decoration: underline;
  }
}
.top {
  display: flex;
}
.text {
  p {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
