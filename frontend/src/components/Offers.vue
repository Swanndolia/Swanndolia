<template>
  <div id="offer-container">
    <article></article>
    <article></article>
    <article></article>
  </div>
</template>

<script>
export default {
  name: "Offers",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#offer-container {
  height: calc(100% - 80px - 14vh);
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
article {
  border-radius: 20px;
  background: #e5e5e5;
  border: 2px solid #fca311;
  margin: 5vh 1vw 0;
  flex: 1;
}
</style>
