<template>
  <div id="services-container">
    <div id="line-one">
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
      <p class="info">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </div>
    <div id="line-two">
      <p class="info">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
      <figure class="skill">
        <figcaption>"Lorem ipsum dolor sit amet.</figcaption>
        <img src="../assets/logo.png" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.info {
  flex: 1;
  color: #e5e5e5;
  font-size: 2vmin;
  text-align: center;
}
#services-container {
  height: calc(100% - 80px - 14vh);
  position: relative;
  margin: 5vmin 0;
  display: flex;
  flex-direction: column;
}
#line-one {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10vmin 20vw 0 3vmax;
  max-height: 30vh;
}
#line-two {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 15vmin 3vmax 0 20vw;
  max-height: 30vh;
}
.skill {
  & figcaption {
    font-size: 2.3vmin;
    color: #e5e5e5;
    margin-bottom: 2vmin;
  }
  & img {
    width: 8vmin;
  }
}
@media screen and (max-width: 1032px) {
  #services-container {
    flex-direction: row;
  }
}
</style>
