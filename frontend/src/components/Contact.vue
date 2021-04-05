<template>
  <div id="contact-container">
    <div class="panel">
      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label for="reason">Motif</label>
        <select id="reason" name="reason">
          <option value="Devis">Devis</option>
          <option value="Informations">Informations</option>
          <option value="Autre">Autre</option>
        </select>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div class="panel">
      <a href=""><img src="../assets/logo.png" /></a>
      <a href=""><img src="../assets/logo.png" /></a>
      <a href=""><img src="../assets/logo.png" /></a>
      <a href=""><img src="../assets/logo.png" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#contact-container {
  height: calc(100% - 80px);
  display: flex;
  flex-direction: row;
  position: relative;
  top: calc(50% - 80px);
  transform: translateY(-50%);
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.panel {
  margin: 0 3vw;
  width: 47%;
  justify-content: center;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input[type="text"],
select,
textarea {
  width: 100%;
  min-width: 320px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
textarea {
  height: 15vh;
}
input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: #e5e5e5;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
label {
  color: #e5e5e5;
}
img {
  width: 9vw;
  min-width: 80px;
  margin: 2vw;
}
@media screen and (max-width: 800px) {
  .panel {
    width: 100%;
  }
  #contact-container {
    flex-wrap: wrap;
  }
}
</style>
