<template>
  <div class="image2d">
    <h3>{{ msg }}</h3>
    <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input" >
    <img src={{URL}}>   

  </div>
</template>

<script>
import DataService from '@/services/dataService'
import axios from 'axios';
export default {
  name: 'image2D',
  data(){
     return  { 
      msg : "Welcome to image processing and deep learning world!",
      fnm: "",
      result : []
     }
  },
  methods:{
    uploadImage(event) {
      console.log(event.target.files[0].name)
      const URL = 'http://localhost/upload/'+event.target.files[0].name; 

      let data = new FormData();
      data.append('name', 'my-picture');
      data.append('file', event.target.files[0]); 

      let config = {
         header : {
         'Content-Type' : 'image/png'
         }
      }

      axios.put(
         URL, 
         data,
         config
      ).then(
         response => {
         console.log('image upload response > ', response)
         }
      )
    },
    getData(){
      DataService.getData().then( 
        (response) =>{
             this.result = response.data;
      });
     }              
  },
  created(){
   this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
