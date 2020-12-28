<template>
<div class="card-preview" @click="flip" v-bind:class="{flip: flipped}">
  <div class="card front">
    <div class="card-content">
      <div class="tag">{{card.tag}}</div>
      <div class="idea" v-html="ideaHtml"></div>
<!--       <div class="author">{{card.author}}</div>-->
<!--       <div class="intro">{{card.intro}}</div>-->
      <a class="curator" :href="card.curator_link" target="_blank">{{card.curator}}</a>
    </div>
  </div>
  <div class="card back">
    <div class="card-content">
      <div class="note" v-html="noteHtml"></div>
<!--      <a class="url" :href="card.url" target="_blank"> 相关链接 > </a>-->
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

<style lang="less" scoped>
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
    // background-color: #f4f4f4;
    .card-content {
      .card-content();
    }
  }

  .back {
    transform: rotateY(180deg);
    // background-color: #f4f4f4;
    // background-color: #f5f7fa;
    background-image: url("../assets/100lb-Smooth-White.jpg");
    .card-content {
      .card-content();
    }
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 46px;
  color: #a2a2a2;

  .tag {
    font-size: 12px;
    color: #3ECF8E;
    margin-bottom: 10px;
  }

  .idea {
    font-family: 'Noto Serif SC', 'Source Han Serif', serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    height: 260px;
    line-height: 1.5em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
    
  .note {
    font-family: 'Noto Serif SC', 'Source Han Serif', serif;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 30px;
    height: 250px;
    line-height: 1.5em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .author {
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    margin-bottom: 2px;
  }

  .intro {
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    margin-bottom: 10px;
  }

  .curator {
    font-size: 12px;
    font-weight: 400;
    color: #d4d4d4;
    text-align: right;
    text-decoration : none;
  }

  .url {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #a2a2a2;
  }
}

.flip {
  transform: rotateY(180deg);
}
</style>
