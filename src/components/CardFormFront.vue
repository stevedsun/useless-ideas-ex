<template>
<div class="card-form-front">
  <el-form ref="card-form" :model="card">
    <el-form-item label="标签">
      <el-input v-model="card.tag" placeholder="多个标签用逗号分隔" maxlength="20" show-word-limit></el-input>
    </el-form-item>
    <el-form-item label="正面文字">
      <el-input type="textarea" placeholder="一段文字，可以是一段摘录、一个笔记、一个灵感，甚至是一个单词……" :rows="15" v-model="card.idea" maxlength="200" resize=none show-word-limit></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "card-form-front",
  data() {
    return {
    }
  },
  computed: {
    card: {
      get() {
        return this.$store.state.currCard.info;
      },
      set(v) {
        this.$store.commit("update", v);
      }
    }
  },
  methods: {
    // onSubmit() {
    //   console.log('submit!');
    //   // this.$store.commit("update", e.target.value);
    // }
  }
}
</script>

<style lang="less">
.card-form-front {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.el-input {
  input {
    padding: 15px;
    border-radius: 24px !important;
    -webkit-appearance: none;
    appearance: none;
  }
}

.el-textarea {
  textarea {
    padding: 15px;
    border-radius: 24px !important;
  }
}

.el-button {
  background: black;
  color: white;
  align-items: center;
}

.el-button:active {
  background: black;
  color: white;
  align-items: center;
}
</style>
