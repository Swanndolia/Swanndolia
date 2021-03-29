<template>
  <div>
    <figure id="me">
      <figcaption>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </figcaption>
      <img src="../assets/logo.png" />
    </figure>
    <figure id="skills">
      <img src="../assets/logo.png" />
      <figcaption>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "WhoAmI",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  height: calc(100% - 80px);
  position: relative;
  display: flex;
  flex-direction: column;
}
#me {
  top: 0;
  position: absolute;
  margin: 8vh 10vw;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 40vh;
  width: 40vw;
  & figcaption {
    font-size: 2.3vmin;
    color: rgb(19, 19, 19);
  }
  & img {
    width: 15vmin;
  }
}
#skills {
  margin: 20vh 10vw;
  bottom: 0;
  position: absolute;
  max-height: 40vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  & figcaption {
    font-size: 2.3vmin;
    color: #e5e5e5;
  }
  & img {
    width: 15vmin;
  }
}
</style>
