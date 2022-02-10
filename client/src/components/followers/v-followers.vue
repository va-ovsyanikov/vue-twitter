<template>
  <div class="followers_component">
    <h3>Кого читать</h3>
    <div class="followers_content">
      <ul>
        <v-followers-item
          v-for="follower in followers"
          :key="follower"
          title="follower.title"
          nickname="follower.nickname"
          img="follower.img"
        >
        </v-followers-item>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vFollowersItem from "../followers/v-followers-item.vue";
export default defineComponent({
  components: {
    vFollowersItem,
  },
  data() {
    return {
      followers: [
        {
          img: "https://eu.ui-avatars.com/api/?name=John+Doe",
          title: "Dock Of Shama",
          nickname: "@DockOfShama",
        },
        {
          img: "https://eu.ui-avatars.com/api/?name=John+Doe",
          title: "Dock Of Shama",
          nickname: "@DockOfShama",
        },
        {
          img: "https://eu.ui-avatars.com/api/?name=John+Doe",
          title: "Dock Of Shama",
          nickname: "@DockOfShama",
        },
        {
          img: "https://eu.ui-avatars.com/api/?name=John+Doe",
          title: "Dock Of Shama",
          nickname: "@DockOfShama",
        },
      ],
    };
  },
});
</script>
<style lang="less" scoped>
.followers_component {
margin-top: 20px;
  width: 350px;
  background-color: @color_gray;
  border-radius: 10px;
  padding-bottom: 15px;
  ul {
    list-style-type: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    margin: 15px;
  }
}
</style>
