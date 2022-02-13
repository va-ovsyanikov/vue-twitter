<template>
  <div class="user_component">
    <div class="user_avatar">
      <img src="img/avatar1.jpg" alt="avatar" />
    </div>
    <div class="user_content">
      <div class="input-field user_field_component">
        <textarea
          type="text"
          class="materialize-textarea text_input"
          placeholder="Что тут происходит?"
          v-model="text"
        >
        </textarea>
      </div>
      <div class="preview_main">
        <div class="preview" v-for="(file, key) in files" :key="key">
          <fa
            :icon="['far', 'times-circle']"
            @click="removePreview(file.name)"
          />
          <img :ref="'image' + parseInt(key)" />
        </div>
      </div>

      <div class="user_bottom">
        <div class="file-field">
          <fa :icon="['far', 'file-image']" @click="addFiles()" />
          <input
            type="file"
            accept="image/*"
            ref="file"
            multiple
            @change="uploadImage()"
          />
        </div>
        <div></div>
        <v-button
          :isButtonUser="true"
          :isBlue="true"
          title="Твитнуть"
          :disabled="!text"
          :onClick="handleAddTweet"
        ></v-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
interface FileInterface {
  name: string;
  size: number;
  type: string;
}
import { defineComponent } from "vue";
import vButton from "../button/v-button.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "vUser",
  components: {
    vButton,
  },
  data() {
    return {
      uploadedFiles: "",
      files: [] as FileInterface[],
      text: "",
    };
  },
  computed: {
    ...mapGetters(["LOADING_TWEET_ADD", "TWEETS"]),
  },
  methods: {
    ...mapActions(["TWEET_ADD"]),
    // uploadImage(): void {
    //   const el = this.$refs.file as HTMLFormElement;
    //   this.file = el.files[0];
    //   console.log(this.file);
    // },
    addFiles() {
      const el = this.$refs.file as HTMLFormElement;
      el.click();
    },

    uploadImage(): void {
      const uploadedFiles = this.$refs.file as HTMLFormElement;
      this.uploadedFiles = uploadedFiles.files;
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        this.files.push(this.uploadedFiles[i] as never);
      }
      this.getImagePreviews();
    },

    getImagePreviews() {
      const el = this.$refs as HTMLFormElement;
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();
          reader.addEventListener(
            "load",
            function () {
              el["image" + i][0].src = reader.result;
            }.bind(this),
            false
          );
          reader.readAsDataURL(this.files [i] as any);
        }
      }
    },

    removePreview(name: string) {
      // this.files.splice(key, 1)
      // console.log(name);
      // const index = this.files.findIndex((el) => {
      //      console.log(  el.name);
      // return  el.name === name

      // });
      // console.log(index);
      // if (index !== -1) {
      //   this.files.splice(index, 1);
      // }
      this.files = this.files.filter((elem) => elem.name !== name);
    },

    handleAddTweet(): void {
      const obj = {
        message: this.text,
      };
      this.TWEET_ADD(obj);
      this.text = ''
    },
  },
});
</script>
<style lang="less" scoped>
.preview_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.preview {
  margin-right: 10px;
  position: relative;
  img {
    width: 150px;
    height: 150px;
  }
  .fa-times-circle {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}
.fa-file-image {
  font-size: 25px;
  color: @color_blue;
  cursor: pointer;
}
.file-field {
  padding: 10px 15px;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  transition: @bacground_trs;
  &:hover {
    background-color: @color_blue_hover_transparent;
  }
}
.user_content {
  width: 89%;
}
.user_component {
  display: flex;
  padding: 15px;
  // box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, .1);
  // margin-bottom: 10px;
}
.user_avatar {
  width: 11%;
  img {
    width: 48px;
    border-radius: 50%;
  }
}
.user_bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
}
.input-field {
  margin: 0;
  ::-webkit-input-placeholder {
    color: @color_dark_gray;
    font-size: 18px;
  }
  ::-moz-placeholder {
    color: @color_dark_gray;
    font-size: 18px;
  }
  :-moz-placeholder {
    color: @color_dark_gray;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: @color_dark_gray;
    font-size: 18px;
  }
}

.text_input {
  border: 0;
  &:focus:not([readonly]) {
    border: 0;
    box-shadow: none;
  }
}
</style>
