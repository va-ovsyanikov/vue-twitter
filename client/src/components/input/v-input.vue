<template>

    <div class="input-field input_component">
      <input
        :id="`${id}`"
        :type="`${type}`"
        class="validate reg_input browser-default"
        data-length="20"
        ref="input_count"
        :class="{ search: isSearch }"
        :placeholder="placeholder"
      />
      <label :class="{ search_label: isSearchLabel }" :for="`${id}`">{{
        inputText
      }}</label>
      <span class="helper-text" data-error="wrong" data-success="right"
        >Helper text</span
      >
    </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type:  {
      type:String,
      default: ""
    },
    inputText:  {
      type:String,
      default: ""
    },
    id:  {
      type:String,
      default: ""
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    isSearchLabel: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type:String,
      default: ""
    },
  },
});
</script>

<style lang="less" scoped>

  .input-field.input_component {
    // .character-counter {
    //   color: #fff !important;
    //   background: #fff;
    // }

    ::-webkit-input-placeholder {
      color: @color_dark_gray;
      font-size: 16px;
    }
    ::-moz-placeholder {
      color: @color_dark_gray;
      font-size: 16px;
    }
    :-moz-placeholder {
      color: @color_dark_gray;
      font-size: 16px;
    }
    :-ms-input-placeholder {
      color: @color_dark_gray;
      font-size: 16px;
    }
    > label.search_label {
      opacity: 0;
    }

    > label {
      transform: translateY(20px);
      margin-left: 7px;
      color: @color_blue;
    }
    > label:not(.label-icon).active {
      transform: translateY(7px) scale(0.8);
      color: @color_blue;
    }
  }
  .reg_input {
    width: 100%;
    border: 0;
    padding-top: 30px;
    padding-left: 7px;
    padding-bottom: 7px;
    border: 1px solid @color_dark_gray;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    outline: 0;
    &:focus {
      border-color: @color_blue;
      box-shadow: 0px 0px 0px 1px @color_blue;
      outline: 0;
    }
  }
  .search {
    height: 45px;
    border: none;
    background-color: @color_gray;
    border-radius: 40px;
    width: 350px;
    padding-top: 0px;
    color: @color_dark_gray;
    padding-bottom: 0;
    padding-left: 60px;
    position: relative;
    &:focus {
      box-shadow: none;
      background-color: #fff;
      border: 1px solid @color_blue;
    }
  }
  .input-field .helper-text {
    display: none;
  }

</style>
