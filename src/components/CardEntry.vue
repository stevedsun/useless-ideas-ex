<template>
<!-- <div class="card-entry" @click="select(value)" @mouseover="preview(value)"> -->
<div class="card-entry" @click="select(value)">
  <el-card class="box-card" v-bind:class="{highlight: card.id === value.id}">
    {{ value.idea }}
  </el-card>
</div>
</template>

<script>
export default {
  name: "CardEntry",
  props: ["value"],
  computed: {
    card: {
      get() {
        return this.$store.state.currCard;
      },
    }
  },
  methods: {
    select(value) {
      this.$store.commit("update", value);
      if (this.$store.state.currCard.id !== value.id) {
        this.$store.state.currCard = {};
      }
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
