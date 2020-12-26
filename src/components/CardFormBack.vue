<template>
<div class="card-form-back">
  <el-form ref="card-back-form" :model="card">
    <el-form-item label="链接">
      <el-input type="url" v-model="card.url" placeholder="卡片相关的链接地址" show-word-limit></el-input>
    </el-form-item>
    <el-form-item label="背面文字">
      <el-input type="textarea" placeholder="背面可以记录相关的链接，字谜的谜底，单词的释义等等" :rows="15" v-model="card.note"
       maxlength="300" resize=none show-word-limit></el-input>
    </el-form-item>
      <div class="tool-box">
        <el-button @click="onSubmit" class='black-btn full-btn' type="info" round>保存</el-button>
        <el-button @click="onSubmit" class='white-btn full-btn' type="info" round>删除</el-button>
      </div>
  </el-form>
</div>
</template>

<script>
export default {
  name: "card-form-back",
  data() {
    return {
      form: {
        note: '',
      }
    }
  },
  computed: {
    card: {
      get() {
        return this.$store.state.currCard;
      },
      set(v) {
        this.$store.commit("update", v);
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="less" scoped>
.card-form-back {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
