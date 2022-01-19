<template>
  <div class="person">
    <div>
      <br />ПІБ: {{ person.name }}<br />
      Адрес: {{ person.addres }}<br />
      Курс: {{ person.course }}<br />
      Група:{{ person.group }}<br />
      Середній бал:{{ person.averageMark }} <br /><br />
      <button @click="deleteperson" class="gradient-button">
        Видалити студента
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PersonItem",
  props: {
    person: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["deletePerson"]),
    deleteperson() {
      this.deletePerson(
        this.person.name,
        this.person.addres,
        this.person.course,
        this.person.group,
        this.person.averageMark
      );
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="css" scoped>
.person {
  width: 400px;
  color: black;
  border: 2px solid blue;
  margin: 3px;
  border-radius: 4px;
}
.gradient-button {
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: gideon roman regular;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}
.gradient-button:hover {
  background-position: right center;
}
</style>