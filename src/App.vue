<template>
  <div id="app">
    <nav
      class="bg-white mt-[-58px] mb-3 border border-blue-500 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div class="container flex flex-wrap justify-between mx-auto">
        <div class="p-2">
          <router-link to="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >ولله الاسماء الحسني</span
            >
          </router-link>
        </div>

        <div class="p-2 flex">
          <div class="dropdown">
            <button
              class="p-2 m-1 rounded-md text-blue-500 border-b-2 hover:mr-2 border-blue-500 text-[19px] dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              وعي
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <router-link
                  class="p-2 m-1 rounded-md text-blue-500  hover:ml-2  text-[19px]"
                  to="/budcast"
                  >بودكاست
                </router-link>
              </li>
            </ul>
          </div>
          <router-link
            class="p-2 m-1 rounded-md text-blue-500 border-b-2 hover:mr-2 border-blue-500 text-[19px]"
            to="/azkar"
            >أذكار اليوم
          </router-link>
        </div>
      </div>
    </nav>
    <notifications />
    <router-view></router-view>
  </div>
</template>

<script>
// import Post_data from './components/Post_data.vue'

export default {};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
::-webkit-scrollbar-thumb {
  background: #063388;
  border-radius: 10px;
}
</style>
