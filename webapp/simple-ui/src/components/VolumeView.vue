<template>
  <div class="image3d">
    <h3>{{ msg }}</h3>

  </div>
</template>

<script>
import DataService from '@/services/dataService'

export default {
  name: 'image3D',
  data(){
     return  { 
      msg : "Welcome to 3D images world!",
      result : []
     }
  },
  methods:{
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
