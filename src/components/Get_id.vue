<template>


<div class="relative grid   sm:grid-cols-1  w-full">
        <div   v-for="item in findItem" :key="item.name">
         <div class="p-3  w-[100%] text-blue-500 border border-gray-300 ">
          <h1 class="text-[30px]"> {{ item.name }}</h1>
         <h1 class="text-[20px]"> {{ item.details }}</h1>
         <div class="w-[80%] m-auto">
          <YouTube 
          width="100%"
          height="350px"
          class="m-auto mt-6 " 
        :src='item.video' 
        @ready="onReady"
        ref="youtube" />
         </div>
         </div>
        </div>
      

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import YouTube from 'vue3-youtube'

export default {
  data() {
    return {
      accountId: 1,
      arrivingArabicName: "",
    };
  },
  methods: {
    onReady() {
            this.$refs.youtube.playVideo()
        },
  },

  computed: {
    ...mapGetters(["namesAllah", "filtred"]),
    findItem() {
      const idx = this.namesAllah.filter(object => object.id == this.filtred)
      console.log(idx , 'here' , this.filtred)
      return idx
    },
  },
  mounted() {
    console.log(this.filtred, this.namesAllah);
  },
  components: { YouTube },

};
</script>

<style>
form {
  border: 1px solid blue;
  padding: 20px;
}
</style>
