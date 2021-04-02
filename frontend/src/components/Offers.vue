<template>
  <div id="offer-container">
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
    </article>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #14213d;
  border: 2px solid #fca311;
  margin: 5vh 1vw 0;
  flex: 1;
  font-size: 4vmin;
  & > * {
    flex: 1;
    color: #e5e5e5;
  }
}
button {
  width: 30%;
  font-size: 2.5vmin;
  background: transparent;
  border: 2px solid #e5e5e5;
  border-radius: 5vmin;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background: lighten(#14213d, 10);
  }
}
</style>
