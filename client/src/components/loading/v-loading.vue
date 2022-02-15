<template>
  <div :class="sizes" class="preloader-wrapper  active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    sizes:{
      type:String
    }
  }
})
</script>
<style lang="less" scoped>
.preloader-wrapper{
  margin: 100px auto;
  display: block;
}



</style>
