<template>
<div class="card-list" v-infinite-scroll="load" style="overflow:auto">
  <card-entry class="infinite-list-item" v-bind:value="card" v-for="(card, index) in cards" v-bind:key="index" />
</div>
</template>

<script>
import CardEntry from "@/components/CardEntry.vue"
export default {
  name: "CardList",
  props: ["cards"],
  components: { CardEntry },
  methods: {
    load() {
      console.log("load items");
    }
  }
}
</script>