<template>
  <figure>
    <figcaption>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </figcaption>
    <img src="../assets/logo.png" />
  </figure>
</template>

<script>
export default {
  name: "WhoAmI",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
figure {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  & figcaption {
    font-size: 2vmin;
    color: rgb(19, 19, 19);
    max-width: 500px;
  }
  & img {
    width: 20vmin;
  }
}
</style>
