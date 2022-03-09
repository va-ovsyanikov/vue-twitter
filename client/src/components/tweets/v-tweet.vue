<template>
  <div class="tweet__component" @click="handleFetchOneTweet(_id)">
    <div class="avatar">
      <img src="img/avatar2.jpg" alt="avatar" />
    </div>
    <div class="content">
      <div class="content__top">
        <div class="names">
          <a class="fullname" href="/">
            <span>{{ fullname }}</span>
          </a>
          <span class="dot"> · </span>
          <a href="" class="username">
            <span>{{ username }}</span>
          </a>
        </div>
        <span class="dot"> · </span>
        <span class="date">{{
          createdAt &&
          formatDistance(new Date(createdAt), new Date(), { locale: ruLang })
        }}</span>
        <v-dropdown
          :onClick2="handleClickRemoveTweet"
          :onClick1="handleClickEditTweet"
          title_top="Редактировать"
          title_bottom="Удалить"
        ></v-dropdown>
      </div>
      <div class="text">
        <p>{{ text }}</p>
      </div>
      <div class="content__bottom">
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
import { formatDistance } from "date-fns";
import ruLang from "date-fns/locale/ru";
import vDropdown from "../dropdown/v-dropdown.vue";
import { mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "vTweet",
  components: {
    vDropdown,
  },
  props: {
    fullname:  {
      type:String,
      default: ""
    },
    username:  {
      type:String,
      default: ""
    },
    createdAt: {
      type:String,
      default: ""
    },
    text:  {
      type:String,
      default: ""
    },
    _id:  {
      type:String,
      default: ""
    },
  },
  data() {
    return {
      formatDistance,
      ruLang,
      list: [
        { icon: ["far", "comment"] },
        { icon: ["far", "share-square"] },
        { icon: ["far", "heart"] },
        { icon: ["far", "clone"] },
      ],
    };
  },
  methods: {
    ...mapActions(["TWEET_DELETE", "TWEET_EDIT"]),
    handleFetchOneTweet(_id: any): void {
      this.$router.push({ path: `/tweet/${_id}`, params: _id });
    },
    handleClickRemoveTweet() {
      this.TWEET_DELETE(this._id);
    },
    handleClickEditTweet(_id:any) {
      this.TWEET_EDIT(this._id);
    },
  },
});
</script>

<style lang="less" scoped>
.tweet__component {
  border-top: 1px solid rgb(239, 243, 244);
  border-bottom: 1px solid rgb(239, 243, 244);
  display: flex;
  padding: 15px;
  transition: background-color ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 248, 250);
  }
}
.avatar {
  width: 11%;
  img {
    width: 48px;
    border-radius: 50%;
  }
}
.content__top {
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  position: relative;
}
.fullname {
  font-weight: bold;
  font-size: 14px;
}
.username {
  color: @color_darkened_gray;
  font-size: 14px;
}
.names {
  &:hover {
    .fullname {
      text-decoration: underline;
    }
  }
}
.dot {
  margin: 0 5px;
  color: @color_darkened_gray;
}
.date {
  color: @color_darkened_gray;
}
.content {
  width: 90%;
}
.content__bottom {
  margin-top: 20px;
  width: 83%;
  margin-left: -20px;
}
ul {
  display: flex;
  justify-content: space-between;
  li {
    cursor: pointer;
    padding: 0 10px;
    a {
      padding: 10px;
      border-radius: 50%;
      transition: @bacground_trs;
      color: @color_dark_gray;
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
.dropdown__component {
  margin-left: auto;
}
</style>
