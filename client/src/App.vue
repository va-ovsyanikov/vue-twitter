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
  // methods:{
  //   router(){
  //     if(this.IS_AUTH){
  //       this.$router.push('/')
  //     }
  //   }
  // },
  // mounted(){
  //   if(this.IS_AUTH){
  //     this.$router.push('/')
  //   }
  // },
  //  mounted() {
  //   if (localStorage.token) {
  //     this.token = localStorage.token;
  //   }
  // },
  // created() {
  //     window.addEventListener('storage', () => {
  //       console.log(12324);
  //     })
  //   },
  watch: {
    NOTIFICATION: function () {
      this.$notify({
        type: `${this.NOTIFICATION.status}`,
        text: `${this.NOTIFICATION.message}`,
      });
    },
    //  token() {
    //   this.$router.push('/')
    // }
    // IS_AUTH:function(){
    //   this.$router.push('/')
    // }
  },
});
</script>
<style lang="less">
.overlay {
    position: relative;
  &:after {
    content:'';
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 5;

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
