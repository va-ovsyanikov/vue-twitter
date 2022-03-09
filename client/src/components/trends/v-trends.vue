<template>
  <div class="trends__component">
    <h3>Актуальные темы</h3>
    <div class="trends__content">
      <ul>
        <v-trends-item
          v-for="trend in TRENDS"
          :key="trend"
          :trend="trend"
        >
        {{TRENDS}}
  
        </v-trends-item>
      </ul>
    </div>
  
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vTrendsItem from "./v-trends-item.vue";
import {mapActions, mapGetters} from 'vuex';


export default defineComponent({
  components: {
    vTrendsItem,
  },
  data() {
    return {
      trends: [
        { title: "Санкт-Петербург", quantity: 23454 },
        { title: "#короновирус", quantity: 834 },
        { title: "Беларусь", quantity: 334454 },
      ],
    };
  },
  computed:{
    ...mapGetters(['TRENDS'])
  },
  methods:{
    ...mapActions(['FETSH_TRENDS_ALL'])
  },
  mounted(){
    this.FETSH_TRENDS_ALL()
  }
});
</script>

<style lang="less" scoped>
.trends__component {
  width: 350px;
  background-color: @color_gray;
  border-radius: 10px;
  padding-bottom: 15px;
  ul{
      list-style-type: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    margin: 15px;
  }
}
</style>
