<template>
<div class="card-preview" @click="flip" v-bind:class="{flip: flipped}" v-show="display">
  <div class="card front">
    <div class="card-content">
      <div class="tag">{{card.tag}}</div>
      <div class="idea" v-html="card.ideaHtml"></div>
      <a class="curator" :href="card.curator_link" target="_blank">本内容由 {{card.curator}} 提供</a>
    </div>
  </div>
  <div class="card back">
    <div class="card-content">
      <div class="note" v-html="card.noteHtml"></div>
      <a class="url" :href="card.url" target="_blank"> 相关链接 > </a>
    </div>
  </div>
</div>
</template>

<script>
import marked from 'marked';

export default {
  data() {
    return {
    }
  },
  filters: {
    marked: marked,
  },
  created: function () {
    var renderer = new marked.Renderer();
    var doNothing = (text) => { 
      return text; 
    }
    // renderer.code = doNothing;
    // renderer.blockquote = doNothing;
    renderer.html = doNothing;
    renderer.heading = doNothing;
    // renderer.hr = doNothing;
    // renderer.list = doNothing;
    // renderer.listitem = doNothing;
    renderer.checkbox = doNothing;
    // renderer.paragraph = doNothing;
    renderer.table = doNothing;
    renderer.tablerow = doNothing;
    renderer.tablecell = doNothing;
    renderer.link = doNothing;
    renderer.image = doNothing;
    marked.setOptions({ renderer })
  },
  computed: {
    card: {
      get() {
        let curr = this.$store.state.currCard.info;
        if (curr.idea) {
          curr.ideaHtml = marked(curr.idea)
        }

        if (curr.note) {
          curr.noteHtml = marked(curr.note)
        }
        return curr;
      }
    },
    display: {
      get() {
        return this.$store.state.currCard.info.collection !== undefined;
      }
    },
    flipped: {
      get() {
        return !this.$store.state.currCard.isFront;
      }
    }
  },
  methods: {
    flip() {
      this.$store.commit("flip" );
    },

  }
}
</script>

<style lang="less">
</style>
