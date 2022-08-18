<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
         This web app provides simple image processing and data tools for everyone!<br>
    </p>
   
   <h3> Fun tools e.g.: </h3>
    <ul>
      <li>Toonify your image </li><br>
      <li>Make arts of your image! </li><br>
      <li>Make Japanese anime of your image! </li>
      <li>Change your voice! </li>
    </ul>
    <h3> Medical images tools e.g.  </h3>
    <ul>
      <li>Spine multi-class segmentation</li><br>
      <li>Resize a volume </li>
      <li>Resample a volume </li>
    </ul>
    <h3> Medical informatics tools e.g.  </h3>
    <ul>
      <li>Generate synthesis data </li><br>
      <li>Anonymize data using differntial privacy  </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
