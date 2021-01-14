<template>
<div class="card-preview" @click="flip" v-bind:class="{flip: flipped}">
  <div class="card front">
    <div class="card-content">
      <div class="tag">{{card.tag}}</div>
      <div class="idea" v-html="ideaHtml"></div>
      <a class="curator" :href="card.curator_link" target="_blank">{{card.curator}}</a>
    </div>
  </div>
  <div class="card back">
    <div class="card-content">
      <div class="note" v-html="noteHtml"></div>
      <a class="url" :href="card.url" target="_blank"> 相关链接 > </a>
    </div>
  </div>
</div>
</template>

<script>
import marked from 'marked';

export default {
  props: ['card'],
  data() {
    return {
      flipped: false,
    }
  },
  filters: {
    marked: marked,
  },
  computed: {
    ideaHtml: {
      get() {
        return marked(this.card.idea);
      }
    },
    noteHtml: {
      get() {
        return marked(this.card.note);
      }
    }
  },
  created: function () {
    let renderer = new marked.Renderer();
    const doNothing = (text) => {
      return text; 
    }
    renderer.code = doNothing;
    renderer.blockquote = doNothing;
    // renderer.html = doNothing;
    // renderer.heading = doNothing;
    renderer.hr = doNothing;
    renderer.list = doNothing;
    renderer.listitem = doNothing;
    // renderer.checkbox = doNothing;
    // renderer.paragraph = doNothing;
    // renderer.table = doNothing;
    // renderer.tablerow = doNothing;
    // renderer.tablecell = doNothing;

    renderer.link = doNothing;
    renderer.image = doNothing;
    marked.setOptions({ renderer })
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    },

  }
}
</script>

<style lang="less">

blockquote {
  font-family: 'Noto Serif SC', 'Source Han Serif', serif;
  font-weight: 700;
  padding: 10px 10px 30px 10px;
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  vertical-align: -0.4em;
}

.card-preview {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 50px auto;
  width: 620px;
  height: 420px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;

  .card {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 24px;
    box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  }

  .front {
    background-image: url("../assets/80lb-Smooth-White.jpg");
    .card-content {
      .card-content();
    }
  }

  .back {
    transform: rotateY(180deg);
    background-image: url("../assets/100lb-Smooth-White.jpg");
    .card-content {
      .card-content();
    }
  }
}

.card-content {
  display: block;
  padding: 46px;
  color: #a2a2a2;
  font-size: 18px;
  font-weight: 400;

  .tag {
    display: block;
    font-size: 0.7em;
    height: 1em;
    font-weight: normal;
    color: #3ECF8E;
    margin-bottom: 10px;
  }

  .idea {
    display: block;
    margin-bottom: 20px;
    height: 15em;
    line-height: 1.5em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: auto;
  }
    
  .note {
    display: block;
    padding: 20px 0 20px 0;
    height: 16em;
    line-height: 1.5em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: auto;
  }

  .curator {
    display: block;
    font-size: 0.7em;
    color: #d4d4d4;
    text-align: right;
    text-decoration : none;
  }

  .url {
    display: block;
    font-size: 0.9em;
    text-align: center;
    color: #a2a2a2;
  }
}

.flip {
  transform: rotateY(180deg);
}
</style>
