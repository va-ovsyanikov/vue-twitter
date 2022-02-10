<template>
  <div :id="id" ref="modal" class="modal modal_component" :class="{ light: isLight }">
    <div class="modal-content">
      <div class="modal_top">
        <fa :icon="['fab', 'twitter']" />
        <a href="#!" class="modal-close waves-green btn-flat" >x</a>
      </div>
      <h5><slot name="head"></slot></h5>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  props: {
    id: String,
    isLight: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    (window as any).M.Modal.init(this.$refs.modal);
  },

});
</script>
<style lang="less" scoped>
.modal_component {
  background-color: #000;
  border-radius: 15px;
  max-width: 600px;
}
.light {
  background-color: #fff;
  .fa-twitter {
    display: none;
  }
  .modal-close {
    color:#000;
  }
}
h5 {
  color: #fff;
  margin-bottom: 35px;
}
.modal-content {
  overflow: hidden;

}
.modal_top {
  display: flex;
  margin-bottom: 30px;
}
.fa-twitter {
  color: #fff;
  font-size: 35px;
  margin: auto;
}

.modal-close {
  color: #fff;
  font-size: 20px;
}
</style>
