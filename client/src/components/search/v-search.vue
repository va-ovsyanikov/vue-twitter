<template>
  <div class="search__component">
    <form action="">
      <v-input
        :type="text"
        id="search"
        placeholder="Search Twitter"
        :isSearch="true"
        :isSearchLabel="true"
      ></v-input>
       <fa :icon="['fas', 'search']" />
    </form>
  </div>
</template>
<script lang="ts">
import vInput from "../input/v-input.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    vInput,
  },
});
</script>
<style lang="less" scoped>
.search__component{
    form{
        position: relative;
    }
     .fa-search{
        position: absolute;
        top: 14px;
        left: 20px;
        font-size: 18px;
        z-index: 9;
        color: rgb(104, 103, 103);
    }
}
</style>
