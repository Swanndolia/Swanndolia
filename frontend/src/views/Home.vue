<template>
  <main>
    <header id="header">
      <span id="title">
        <img id="logo" src="../assets/logo.png" alt="logo" />
        <h1 class="white">Web<span class="orange">Elit</span></h1></span
      >
      <nav id="nav">
        <a
          id="who-am-i-link"
          class="underline link"
          @click="scrollTo('who-am-i')"
          >Qui suis-je ?</a
        >
        <a class="link" id="services-link" @click="scrollTo('services')"
          >Services</a
        >
        <a class="link" id="offers-link" @click="scrollTo('offers')">Offres</a>
        <a class="link" id="portfolio-link" @click="scrollTo('portfolio')"
          >Portfolio</a
        >
        <a class="link" id="contact-link" @click="scrollTo('contact')"
          >Contact</a
        >
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
    <!-- <section id="offers" class="page">
      <h2 class="white">Offres</h2>
      <Offers />
      <img
        @click="scrollTo('portfolio')"
        class="arrow"
        src="../assets/arrow-circle-down-solid.svg"
      />
    </section> -->
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
      cooldown: false,
      i: 0,
    };
  },
  methods: {
    scrollTo(elementId) {
      let pages = document.getElementsByClassName("page");
      this.i = [].slice
        .call(pages)
        .map((e) => e.id)
        .indexOf(elementId);
      this.setHeaderColor(this.i);
      document
        .getElementsByClassName("underline")[0]
        .classList.remove("underline");
      document.getElementById(elementId + "-link").classList.add("underline");
      window.scrollTo({
        top: document.getElementById(elementId).offsetTop - this.height,
        behavior: "smooth",
      });
    },
    setHeaderColor(i) {
      if (i == 0 || i == 4) {
        document.getElementById("header").style.background = "#14213d";
        document.getElementsByClassName("link").forEach((element) => {
          element.classList.remove("scrolled-underline");
          element.classList.add("default-underline");
        });
      } else {
        document.getElementById("header").style.background = "rgb(19, 19, 19)";
        document.getElementsByClassName("link").forEach((element) => {
          element.classList.remove("default-underline");
          element.classList.add("scrolled-underline");
        });
      }
    },
  },
  mounted() {
    let that = this,
      pages = document.getElementsByClassName("page");
    that.scrollTo(pages[0].id);
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
    document.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.cooldown == false) {
          that.cooldown = true;
          setTimeout(() => {
            that.cooldown = false;
          }, 400);
          if (e.deltaY > 0) {
            if (that.i < pages.length - 1) {
              that.scrollTo(pages[++that.i].id);
            } else {
              that.scrollTo(pages[that.i].id);
            }
          } else if (e.deltaY < 0) {
            if (that.i > 0) {
              that.scrollTo(pages[--that.i].id);
            } else {
              that.scrollTo(pages[that.i].id);
            }
          }
        }
        return false;
      },
      {
        passive: false,
      }
    );
  },
};
</script>

<style lang="scss" scoped>
#title {
  display: flex;
  align-items: center;
}
h1 {
  margin: 0;
  font-size: 2.5vmax;
}
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
  justify-content: space-between;
  align-items: center;
  background: #14213d;
  z-index: 9999999;
  transition: 0.5s;
}
#logo {
  height: 4vmax;
  margin: 0 3vw;
}
nav {
  display: flex;
  flex-wrap: wrap;
  flex: 0.7;
  gap: 20px;
  margin: 0 3vw;
  justify-content: space-between;
  & a {
    font-weight: 900;
    font-size: 2.2vmin;
    cursor: pointer;
    padding: 5px 0px;
    color: #e5e5e5;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      border-color: #fca311;
    }
  }
}
.underline {
  border-color: #fca311 !important;
}
.default-underline {
  border-bottom: 3px solid #14213d;
}
.scrolled-underline {
  border-bottom: 3px solid rgb(19, 19, 19);
}
.page {
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
  animation: pulse 1s infinite, slide 1.5s alternate infinite,
    blink 1.5s alternate infinite;
  transform: translate3d(0, 0, 0);
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
