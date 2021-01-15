<template>
<div class="card-entry" @click="select(value)">
  <el-card class="box-card" v-bind:class="{highlight: value.created_at === card.created_at}">
    {{ value.idea }}
  </el-card>
</div>
</template>

<script>
export default {
  name: "CardEntry",
  props: ["value"],
  data() {
    return {
    }
  },
  computed: {
    card: {
      get() {
        return this.$store.state.currCard.info;
      },
    }
  },
  methods: {
    select(value) {
      this.$store.commit("toEdit", value);
    },
  }
}
</script>

<style lang="less">

.card-entry {
  padding: 0 15px 0 10px;
	.highlight {
		background: #f4f4f4;
		border-color:  black;
	}

  .box-card {
    margin-bottom: 10px;
    border-radius: 24px;
    font-size: 14px;

		:hover {
			background: #f4f4f4;
		}

    .el-card__body {
			padding: 15px;
		}
  }
}

</style>
