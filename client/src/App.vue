<template>
  <div class="app" :class="{ overlay: IS_VISIBLE_DROPDOWN }">
    <component :is="layout"> </component>
    <notifications class="my_notification" position="top center" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import vAuthLayout from "./layouts/v-auth-layout.vue";
import vMainLayout from "./layouts/v-main-layout.vue";
// import vLoading from './components/loading/v-loading.vue';

export default defineComponent({
  components: {
    vAuthLayout,
    vMainLayout,
    // vLoading
  },
  computed: {
    ...mapGetters(["NOTIFICATION", "IS_VISIBLE_DROPDOWN"]),
    layout() {
      return this.$route.meta.layout + "-layout";
    },
  },
  data() {
    return {
      token: "",
    };
  },
 
  watch: {
    NOTIFICATION: function () {
      this.$notify({
        type: `${this.NOTIFICATION.status}`,
        text: `${this.NOTIFICATION.message}`,
      });
    },
  },
});
</script>
<style lang="less">
.overlay {
    position: relative;
  &:after {
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

  }
}
.my_notification {
  .vue-notification {
    border-left: 0;
  }
  .notification-content {
    font-size: 16px;
    text-align: center;
  }
}
</style>
