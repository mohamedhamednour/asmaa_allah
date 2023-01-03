<template>
    <div class="getData">
      
      <center class="m-6 text-[30px]">وعي</center>

      <div class="relative grid m-auto sm:grid-cols-1 md:grid-cols-2 mt-2  w-full">
          <div  v-for="item in budcastwaay" :key="item.name">
           <div class="p-3 m-2  text-blue-500 border border-gray-300 ">
           <h1 class="text-[30px] text-red-500"> {{ item.name }} </h1>
          <div class="justify-center ml-10">
            <YouTube 
          width="89%"
          height="300px"
          class=" mt-6 " 
        :src='item.video' 
        @ready="onReady"
        ref="youtube" />
          </div>
  
           </div>
          </div>
        
  
      </div>
  <center class="m-6 text-[30px]">كنوز</center>

  <div class="relative grid m-auto sm:grid-cols-1 md:grid-cols-2 mt-2  w-full">
          <div  v-for="item in budcastknoze" :key="item.name">
           <div class="p-3 m-2  text-blue-500 border border-gray-300 ">
           <h1 class="text-[30px] text-red-500"> {{ item.name }} </h1>
          <div class="justify-center ml-10">
            <YouTube 
          width="89%"
          height="300px"
          class=" mt-6 " 
        :src='item.video' 
        @ready="onReady"
        ref="youtube" />
          </div>
  
           </div>
          </div>
        
  
      </div>
 
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import YouTube from 'vue3-youtube'

  export default {
    name: "App",
    data() {
      return {
        arr: [],
   
      };
    },
  
    computed: {
      ...mapGetters(['budcastwaay' , 'budcastknoze']),
  
   
  
    },
    components: { YouTube },

    mounted() {
  
      console.log(this.budcastwaay , 'jjjjjjjjj');
    },
  };
  </script>
  