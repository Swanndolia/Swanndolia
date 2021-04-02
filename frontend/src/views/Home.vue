<template>
  <main>
    <header id="header">
      <img id="logo" src="../assets/logo.png" alt="logo" />
      <nav id="nav">
        <a id="who-am-i-link" class="underline" @click="scrollTo('who-am-i')"
          >Qui suis-je ?</a
        >
        <a id="services-link" @click="scrollTo('services')">Services</a>
        <a id="offers-link" @click="scrollTo('offers')">Offres</a>
        <a id="portfolio-link" @click="scrollTo('portfolio')">Portfolio</a>
        <a id="contact-link" @click="scrollTo('contact')">Contact</a>
      </nav>
    </header>
    <div id="container">
      <section id="who-am-i" class="page">
        <h2>Qui suis-je ?</h2>
        <WhoAmI />
        <img
          @click="scrollTo('services')"
          class="arrow"
          src="../assets/arrow-circle-down-solid.svg"
        />
      </section>

      <section id="services" class="page">
        <h2 class="white">Services</h2>
        <Services />
        <img
          @click="scrollTo('offers')"
          class="arrow"
          src="../assets/arrow-circle-down-solid.svg"
        />
      </section>
    </div>
    <section id="offers" class="page">
      <h2 class="white">Offres</h2>
      <Offers />
      <img
        @click="scrollTo('portfolio')"
        class="arrow"
        src="../assets/arrow-circle-down-solid.svg"
      />
    </section>

    <section id="portfolio" class="page">
      <h2 class="orange" style="background: rgb(19, 19, 19)">Portfolio</h2>
      <Portfolio />
      <img
        style="border-color: rgb(19, 19, 19)"
        @click="scrollTo('contact')"
        class="arrow"
        src="../assets/arrow-circle-down-solid.svg"
      />
    </section>

    <section id="contact" class="page">
      <h2 class="white">Contact</h2>
      <Contact />
      <img
        @click="scrollTo('who-am-i')"
        class="arrow"
        src="../assets/arrow-circle-up-solid.svg"
      />
    </section>
  </main>
</template>

<script>
import WhoAmI from "../components/WhoAmI.vue";
import Services from "../components/Services.vue";
import Offers from "../components/Offers.vue";
import Portfolio from "../components/Portfolio.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  components: { WhoAmI, Contact, Services, Offers, Portfolio },
  data() {
    return {
      height: 80,
    };
  },
  methods: {
    scrollTo(elementId) {
      document
        .getElementsByClassName("underline")[0]
        .classList.remove("underline");
      document.getElementById(elementId + "-link").classList.add("underline");
      window.scrollTo({
        top: document.getElementById(elementId).offsetTop - this.height,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    let that = this,
      i = 0,
      pages = document.getElementsByClassName("page");
    window.addEventListener("resize", function () {
      that.height = document.getElementById("header").offsetHeight;
      document.getElementsByClassName("page").forEach((element) => {
        element.style.height = "calc(100vh - " + that.height + "px)";
      });
      document.getElementById("container").style.marginTop = this.height + "px";
    });
    this.height = document.getElementById("header").offsetHeight;
    document.getElementById("container").style.marginTop = this.height + "px";
    document.getElementsByClassName("page").forEach((element) => {
      element.style.height = "calc(100vh - " + that.height + "px)";
    });

    that.scrollTo(pages[0].id);
    document.addEventListener("wheel", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0) {
        if (i < pages.length - 1) {
          that.scrollTo(pages[++i].id);
        } else {
          that.scrollTo(pages[i].id);
        }
      } else if (e.deltaY < 0) {
        if (i > 0) {
          that.scrollTo(pages[--i].id);
        } else {
          that.scrollTo(pages[i].id);
        }
      }
      return false;
    });
  },
};
</script>

<style lang="scss" scoped>
#container {
  background: linear-gradient(
    220deg,
    #fca311 calc(50vmax - 1px),
    rgb(19, 19, 19) 50vmax
  );
}
h2 {
  color: rgb(19, 19, 19);
  font-weight: 900;
  font-size: 4.7vmin;
  padding: 10px;
  margin: 0;
  align-items: center;
}
.white {
  color: #e5e5e5;
}
.orange {
  color: #fca311;
}
header {
  min-height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #14213d;
  z-index: 9999999;
}
#logo {
  height: 60px;
  margin: 5px;
}
nav {
  display: flex;
  flex-wrap: wrap;
  flex: 0.5;
  gap: 20px;
  justify-content: space-evenly;
  & a {
    font-weight: 900;
    font-size: 2.2vmin;
    cursor: pointer;
    padding: 5px 0px;
    color: #e5e5e5;
    text-decoration: none;
    border-bottom: 3px solid #14213d;
    &:hover {
      border-color: #fca311;
    }
  }
}
.underline {
  border-color: #fca311;
}
.page {
  height: calc(100vh - 80px);
  position: relative;
}
.arrow {
  margin-left: -32px;
  position: absolute;
  bottom: 50px;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 50%;
  background: transparent;
  animation: slide 1.5s alternate infinite, blink 1.5s alternate infinite;
  transform: translate3d(0, 0, 0);
  &:hover {
    animation: pulse 1s infinite, slide 1.5s alternate infinite;
  }
}
#offers {
  background: rgb(19, 19, 19);
}
#portfolio {
  background: #e5e5e5;
}
#contact {
  background: #14213d;
  border-top: 2px solid #fca311;
}
@keyframes slide {
  0% {
    -webkit-transform: translateY(0px);
  }
  100% {
    -webkit-transform: translateY(40px);
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(#fca311, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
