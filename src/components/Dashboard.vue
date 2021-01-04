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
      cards: [
        {
          idea:
            "一个人应该能够给孩子换尿布、计划一次侵略行动、杀猪、驾驶飞船、设计建筑物、写诗、做会计账目、砌墙、接合断骨、照顾临终的人、执行命令、下达命令、与人合作、独立行动、解方程式、分析一个新问题、施肥、编程、做一餐美味的饭、高效地战斗、勇敢地死去。专业化是为昆虫准备的。\n\n *罗伯特·海因莱恩*",
          author: "罗伯特·海因莱恩",
          intro: "美国科幻小说家",
          note:
            "海因莱恩在科幻作品《时间足够你爱》里写下的一句关于「完整的人」的描述。",
          tag: "完整的人, 教育",
          collection: "On Creativity",
          url: "https://q24.io/api/v1/idea/link/6",
          curator: "Bob Fu",
          curator_link: "https://q24.io/api/v1/idea/curator/6",
          id: 6,
        },
        {
          idea: "God finds himself by creating. \n\n —— 泰戈尔,《飞鸟集》",
          author: "泰戈尔",
          intro: "飞鸟集",
          note: "神从创造中找到他自己。",
          tag: "诗",
          url: "",
          collection: "",
          curator: "Steve Sun",
          curator_link: "https://sund.site",
          id: 48,
        },
        {
          idea:
            "理想工作环境：最重要的设备是一扇能关上的门（这不是我说的，是史蒂芬·金老师说的）。",
          author: "su27",
          intro: "豆瓣工程师、科幻作者",
          note: "su27，豆瓣工程师、科幻作者",
          tag: "工作环境",
          url: "https://q24.io/api/v1/idea/link/160",
          collection: "Idea Pump",
          curator: "Qin",
          curator_link: "https://q24.io/api/v1/idea/curator/160",
          id: 160,
        },
        {
          idea:
            "将创造和改进分开。你不可能在写做的同时进行编辑，也不可能在凿刻的同时进行打磨，更不可能在制造的同时进行分析。如果你这么做，求善之心就会打断创造之意。创新时就要忘掉已有方案；勾勒草图时就不能太着眼于细处。写作时，先打草稿而不要去抠细节。在新事物之初，创意的思想必须得到无拘无束的释放。",
          author: " 凯文·凯利（Kevin Kelly）（翻译：赵嘉敏）",
          intro: "作者，著有《失控》《科技想要什么》《必然》等",
          note:
            "凯文·凯利（Kevin Kelly）（翻译：赵嘉敏），作者，著有《失控》《科技想要什么》《必然》等",
          tag: "创作",
          url: "https://q24.io/api/v1/idea/link/99",
          collection: "68 Bits of Unsolicited Advice",
          curator: "Bob Fu",
          curator_link: "https://q24.io/api/v1/idea/curator/99",
          id: 99,
        },
        {
          idea:
            "- 任何媒体内容双向链接，可以在平行文本之间自由跳转，一直追溯到内容的源头\n\n- 拥有深度的版本管理，每次对文本的修改都以版本号记录下来，以便追溯变更历史\n\n- 版权授权机制，由于历史可追溯，所以内容理论上都可以追溯到原作者\n\n",
          note: "泰德尼尔森的超文本构想",
          author: "",
          intro: "",
          tag: "历史",
          url: "",
          collection: "Idea Pump",
          curator: "Steve Sun",
          curator_link: "https://q24.io/api/v1/idea/curator/161",
          id: 161,
        },
        {
          idea:
            "## 乌祖尔恐魔\n\n 面面面面面对加拉克苏斯！\n\n 亡语：将一张2/1的“迷失之魂”置入你的 手牌。 \n\n类型：随从 \n\n稀有度：普通",
          author: "",
          intro: "",
          note:
            " 系列：《恶魔猎手新兵》\n\n 职业：恶魔猎手\n\n 制作费用：40 / 400 (金卡)\n\n 分解的价值：5 / 50 (金卡)\n\n 画家：James Ryman",
          tag: "炉石传说",
          url: "",
          collection: "Game",
          curator: "Steve Sun",
          curator_link: "https://sund.site",
          id: 229,
        },
        {
          idea: "## 元気 \n [げんき] ",
          author: "",
          intro: "",
          note:
            "【名・形容动词/ナ形容词】 1.精神，精力（充沛），朝气，锐气。 【形容动词/ナ形容词】 1.身体健康；硬朗。",
          tag: "日语",
          url: "https://dict.hjenglish.com/jp/jc/%E5%85%83%E6%B0%94",
          collection: "",
          curator: "Steve Sun",
          curator_link: "https://sund.site",
          id: 223,
        },
      ],
      boxes: [
        {
          name: "testbox1",
          id: 1,
        },
        {
          name: "testbox2",
          id: 2,
        },
      ],
    };
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
      var newCard = {
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
