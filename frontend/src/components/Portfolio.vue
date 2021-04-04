<template>
  <div id="offer-container">
    <span>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p>
      </article>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p>
      </article>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p>
      </article> </span
    ><span>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p>
      </article>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p>
      </article>
      <article>
        <h3>Title</h3>
        <span>Prix €</span>
        <button>Demander un devis</button>
        <p>
          Fonctionalité 1<br />Fonctionalité 2<br />Fonctionalité 3<br />Fonctionalité
          4<br />
        </p></article
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
  flex: 1;
}
#offer-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 3vmax;
  overflow: scroll;
}
article {
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: transparent;
  border: 2px solid #14213d;
  margin: 5vh 1vw 0;
  flex: 1;
  font-size: 4vmin;
  & > * {
    flex: 1;
    color: #14213d;
  }
}
button {
  min-width: fit-content;
  width: 30%;
  font-size: 2.5vmin;
  background: transparent;
  border: 2px solid #14213d;
  border-radius: 5vmin;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: lighten(#14213d, 10);
  }
}
</style>
