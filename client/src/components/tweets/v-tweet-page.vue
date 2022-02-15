<template>
  <div>
    <v-loading v-if="LOADING"></v-loading>
    <div class="tweet__page__component" v-else>
      <div class="top">
        <div class="avatar">
          <img src="img/avatar2.jpg" alt="alt" />
        </div>
        <div class="names">
          <a class="fullname" href="/">
            <span>{{TWEET.user && TWEET.user.fullname }}</span>
          </a>
          <a class="username" href="/">
            <span>{{TWEET.user && TWEET.user.username }}</span>
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
        }}
        </span>
           <span class="dot"> · </span>
        <span>{{
          TWEET.createdAt &&
          format(new Date(TWEET.createdAt), "dd MMM yyy г.", { locale: ruLang })
        }}
        </span>
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
.tweet__page__component {
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
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
}
.dot {
  margin: 0 5px;
  color: @color_darkened_gray;
}
.top {
  display: flex;
  margin-bottom: 30px;
}
.text {
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(239, 243, 244);
  p {
    font-size: 24px;
    line-height: 28px;
  }
}
.bottom {
  margin-top: 20px;
  padding-top: 16px;
 border-top: 1px solid rgb(239, 243, 244);
 }
ul {
  display: flex;
  justify-content: space-between;
  li {
    cursor: pointer;
    a {
      padding: 10px;
      border-radius: 50%;
      transition: @bacground_trs;
      color: @color_dark_gray;
      font-size: 20px;
    }
    &:hover {
      a {
        background-color: @color_blue_hover_transparent;
        color: @color_blue;
      }
      span {
        color: @color_blue;
      }
    }
  }
  span {
    margin-left: 5px;
    font-size: 12px;
    transition: color ease-in-out 0.2s;
  }
}
</style>
