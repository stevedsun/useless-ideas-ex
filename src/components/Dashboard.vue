<template>
  <el-container>
    <el-aside id="editor-aside">
      <el-tabs v-model="cardSide" @tab-click="handleClick" style="padding: 5px 10px 5px 10px">
        <el-tab-pane label="卡片正面" name="front">
          <card-form-front />
        </el-tab-pane>
        <el-tab-pane label="卡片背面" name="back">
          <card-form-back />
        </el-tab-pane>
      </el-tabs>
    </el-aside>
    <el-main>
<!--      <button @click="createCard"/>-->
      <card-preview />
    </el-main>
    <el-aside id="list-aside">
      <div class="list-container">
        <card-list v-bind:cards="cards" />
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import CardList from "@/components/CardList.vue";
import CardFormFront from "@/components/CardFormFront.vue";
import CardFormBack from "@/components/CardFormBack.vue";
import CardPreview from "@/components/CardPreview.vue";

export default {
  name: "Dashboard",
  components: {
    CardFormFront,
    CardFormBack,
    CardList,
    CardPreview,
  },
  data() {
    return {
      dialogVisible: false,
      cards: [],
    };
  },
  mounted() {
    chrome.storage.local.get(['savedCards'], function(result) {
      console.log('saved cards: ' + result.value);
      if (result.value !== undefined) {
        this.$store.commit("refresh", result.value);
        this.cards = this.$store.state.unsaved;
      }
    });
  },
  computed: {
    cardSide: {
      get() {
        return this.$store.state.param.cardSide;
      },
      set(v) {
        this.$store.commit("flip", v);
      },
    },
  },
  methods: {
    handleClick(tab) {
      this.$store.commit("flip", tab.name);
    },
    createCard() {
      let newCard = {
        idea: "",
        author: "",
        intro: "",
        note: "",
        tag: "",
        collection: "Default",
        url: "",
        curator: this.$store.state.userInfo.name,
        curator_link: this.$store.state.userInfo.homepage,
      };
      this.$store.commit("update", newCard);
      this.$store.commit("add", newCard);
      console.log(this.$store.state.currCard);
    },
    importNote() {
      console.log("import but clicked");
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="less">
#editor-aside {
  min-width: 20%;
  padding: 12px;
  background-color: #f4f4f4;
  color: #333;
  text-align: left;
  box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  border-radius: 0 24px 24px 0;
}

#list-aside {
  min-width: 20%;
  background-color: #f4f4f4;
  color: #333;
  text-align: left;
  box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  border-radius: 24px 0 0 24px;
  padding: 30px 15px 30px 15px;

  .list-container {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    padding: 0 0 10px 0;
  }
}

.el-main {
  margin: auto;
}

</style>
