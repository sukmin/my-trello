<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>Api result: <pre>{{apiRes}}</pre></div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      loading: false,
      apiRes: '돈냉면'
    }
  },
}
</script>

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->

