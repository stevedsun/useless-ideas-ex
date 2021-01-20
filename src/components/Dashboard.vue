<template>
  <el-container>
    <el-aside id="editor-aside" v-show="showEditor">
      <el-tabs v-model="sideName" @tab-click="handleClick" style="padding: 5px 10px 5px 10px">
        <el-tab-pane label="卡片正面" name="front">
          <card-form-front />
        </el-tab-pane>
        <el-tab-pane label="卡片背面" name="back">
          <card-form-back />
        </el-tab-pane>
      </el-tabs>
      <div class="btn-bar">
        <el-switch
            v-model="isShared"
            active-text="公开">
        </el-switch>
        <el-button type="danger" round>删除卡片</el-button>
      </div>
    </el-aside>
    <el-main>
      <card-preview />
    </el-main>
    <el-aside id="list-aside">
      <div class="list-container">
        <card-list v-bind:cards="cards" />
      </div>
      <div class="create-btn" @click="createCard" > 新建卡片 </div>
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
      isShared: false,
    };
  },
  computed: {
    showEditor: {
      get() {
        return this.$store.state.status === "edit" ||
            this.$store.state.status === "create";
      },
    },
    sideName: {
      get() {
        return this.$store.state.currCard.isFront ? "front" : "back";
      },
      set() {
      },
    },
    cards: {
      get() {
        return this.$store.state.cardList;
      }
    }
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
        created_at: Date.now()
      };
      this.$store.commit("toCreate", newCard);
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
  .btn-bar .el-button {
    margin: 20px 20px 0 20px;
  }
  .btn-bar .el-switch {
    margin: 0 20px 0 20px;
  }
}

#list-aside {
  min-width: 20%;
  background-color: #f4f4f4;
  color: #333;
  text-align: left;
  box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  border-radius: 24px 0 0 24px;
  padding: 30px 15px 30px 15px;

  .create-btn {
    background-color: #3ECF8E;
    color: #fff;
    padding: 15px 15px 0 10px;
    height: 8%;
    width: 80%;
    margin: auto;
    text-align: center;
    border-radius: 24px;
    font-size: 18px;
    box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  }
  .create-btn:hover {
    box-shadow: none;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    height: 88%;
    padding: 0 0 10px 0;
  }
}

.el-main {
  margin: auto;
}

</style>
