<template>
  <div id="portfolio-container">
    <span
      ><figure>
        <h3>Title1</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" />
      </figure>
      <figure>
        <h3>Title2</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" />
      </figure>
      <figure>
        <h3>Title3</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" /></figure></span
    ><span
      ><figure>
        <h3>Title4</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" />
      </figure>
      <figure>
        <h3>Title5</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" />
      </figure>
      <figure>
        <h3>Title5</h3>
        <figcaption>Short desciption</figcaption>
        <img src="../assets/logo.png" class="preview" /></figure
    ></span>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
span {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  flex-wrap: wrap;
  flex-direction: row;
}
figure {
  margin: 0;
  width: 20vw;
  & img {
    width: 10vw;
    border: 2px solid;
    border-radius: 5%;
    padding: 2vmin;
  }
}
#portfolio-container {
  justify-content: center;
  position: relative;
  display: flex;
  top: calc(50% - 80px);
  transform: translateY(-50%);
  flex-direction: column;
}
@media screen and (max-width: 800px) {
  span {
    justify-content: center;
  }
  #portfolio-container {
    flex-direction: row;
    margin: 5vh 20%;
  }
  figure img {
    width: 13vw;
  }
}
</style>
