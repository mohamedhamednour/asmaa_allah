<template>
  <div class="getData">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input v-model="searchQuery" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-[18px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ابحث عن اسم الله " required>
    </div>
    <div :class="alldata.length <= 2 ? 'sm:grid-cols-1 w-[80%] mt-3 ': ' sm:grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3' " class="relative grid m-auto w-full">
        <div  v-for="item in alldata" :key="item.name">
         <div class="p-3 m-2 min-h-[250px]  text-blue-500 border border-gray-300 ">
         <h1 class="text-[30px]"> {{ item.name }}</h1>
         <h1 class="text-[22px] sm:h-[130px] md:h-[125px]"> {{ item.details }}</h1>

         
          <button class="bg-blue-500 mt-3 text-white p-2  rounded-md" @click="()=>sendidx(item.id)">Datils</button>

         </div>
        </div>
      

    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  name: "App",
  data() {
    return {
      arr: [],
      value: [],
      valePagnation: 20,
      searchQuery: null,
    };
  },
  methods: {
   
    sendidx(idx) {
      this.$store.dispatch("filtred", idx);
      this.$router.push("/idpage");
    },
  },
  computed: {
    ...mapGetters(["namesAllah" , 'filtred']),

    alldata() {
      if (this.searchQuery) {
                return this.namesAllah.filter((item) => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => item.name.toLowerCase().includes(v));
                });
           
            } else {
              return JSON.parse(JSON.stringify(this.namesAllah.slice(0, this.valePagnation)));
            }
        
    },
  },
  async mounted()  {
 
     await axios.get('https://api.aladhan.com/v1/timingsByCity?country=egy&city=cairo',{
  headers: {
    'X-RapidAPI-Key': 'ed11e19b61msh775d43f114b67aap1f35d3jsn47d4555c396d',
    'X-RapidAPI-Host': 'aladhan.p.rapidapi.com',
   
  }


}).then((re)=>{
   this.arr =  re.data
  console.log(this.arr , 'jjjjjjjjjjjjjjjjj')
})


    console.log(this.filtred);
  },
};
</script>
