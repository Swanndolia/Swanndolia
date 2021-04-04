<template>
  <div id="services-container">
    <div id="line-one">
      <span>
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
          <img src="../assets/logo.png" /></figure
      ></span>
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
      <span>
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
          <img src="../assets/logo.png" /></figure
      ></span>
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
span {
  display: flex;
  flex: 1;
}
.info {
  flex: 1;
  color: #e5e5e5;
  font-size: 2.4vmin;
  text-align: center;
}
#services-container {
  justify-content: center;
  position: relative;
  margin: 5vmin 0;
  display: flex;
  flex-direction: column;
}
#line-one {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8vh 20vw 0 3vmax;
  max-height: 30vh;
}
#line-two {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: auto 3vmax 0 20vw;
  max-height: 30vh;
}
.skill {
  & figcaption {
    font-size: 3vmin;
    color: #e5e5e5;
    margin-bottom: 2vmin;
  }
  & img {
    width: 8vmin;
  }
}
p {
  min-width: 250px;
}

@media screen and (max-width: 1578px) {
  #services-container {
    gap: 5vmin;
  }
  #line-two {
    margin: auto 3vw;
    flex-wrap: wrap;
  }
  #line-one {
    margin: auto 3vw;
    flex-wrap: wrap;
  }
}
</style>
