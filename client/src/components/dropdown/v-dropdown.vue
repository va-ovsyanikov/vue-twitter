<template>
  <div class="dropdown_component drop">
    <div class="dropdown_trigger" @click.stop="isVisibleDropdown">
      <fa :icon="['fas', 'circle']" />
      <fa :icon="['fas', 'circle']" />
      <fa :icon="['fas', 'circle']" />
    </div>
    <ul class="dropdown_content" ref="dropdown" v-if="isVisible">
      <li @click.stop="onClick1">{{ title_top }}</li>
      <li @click.stop="onClick2">{{ title_bottom }}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "vDropdown",
  props: {
    onClick1: Function,
    onClick2: Function,
    title_top: String,
    title_bottom: String,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    ...mapMutations(["IS_VISIBLE_DROPDOWN"]),
    isVisibleDropdown() {
      this.isVisible = true;
      this.IS_VISIBLE_DROPDOWN(this.isVisible);
    },
    hendleOutsideClick(event) {
      const path = event.path;
      if (!path.includes(this.$refs.dropdown)) {
        this.isVisible = false;
        this.IS_VISIBLE_DROPDOWN(this.isVisible);
      }
    },
  },
  mounted() {
    document.body.addEventListener("click", this.hendleOutsideClick);
  },
};
</script>

<style lang="less" scoped>
.dropdown_trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 10px;
  border-radius: 20px;
  transition: @bacground_trs;

  .fa-circle {
    font-size: 4px;
    color: @color_darkened_gray;
  }
  .fa-circle + .fa-circle {
    margin-left: 3px;
  }
  &:hover {
    background-color: @color_blue_hover_transparent;
    .fa-circle {
      color: @color_blue_hover;
    }
  }
}
.dropdown_content {
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  width: 150px;
  z-index: 7;
  background-color: #fff;
  li {
    cursor: pointer;
    padding: 10px;
    transition: @bacground_trs;
    &:hover {
      background-color: @color_gray_hover;
    }
  }
}
</style>
