<template>
  <div class="app">
    <div class="list">
      <ul>
        <li v-for="(k, index) in newObject" :key="index">
          <img :src="k.img" />
          <p>{{ k.one }}</p>
          <p>{{ k.two }}</p>
          <p>{{ k.three }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Arrar: 0,
      object: [
        {
          img: require("../images/对.png"),
          one: 10,
          two: 0,
          //   three: ,
          //   four:
        },
      ],
      newObject: [],
    };
  },
  mounted() {
    this.Arrar = 5;
    for (let i = 0; i < this.Arrar; i++) {
      for (let j = 0; j < this.object.length; j++) {
        if (this.object[j].two!=0) {
          let newText = this.object[j].one / this.object[j].two;
          this.newObject.push({
            img: this.object[j].img,
            one: this.object[j].one,
            two: this.object[j].two,
            three: newText,
          });
        } else {
          this.newObject.push({
            img: this.object[j].img,
            one: this.object[j].one,
            two: this.object[j].two,
            three:'数值错误'
          });
        }
      }
    }
    console.log(this.newObject);
  },
};
</script>
<style scode>
.list ul li {
  width: 200px;
  height: 200px;
  border: 1px black solid;
}
.list ul li img {
  width: 100px;
  height: 100px;
}
</style>