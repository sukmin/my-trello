<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key=b.id>
          <pre>{{b}}</pre>
        </div>
      </div>
    </div>
    
    <span>api 응답 결과 : </span><pre>{{ apiRes }}</pre>
  </div>
</template>

<script>
import {board} from '../api'

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      loading: false,
      boards: [],
      apiRes: '',
      error: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      board.fetch()
        .then(data => {
          this.apiRes = data
          this.boards = data.boards
        })
        .finally(_=> {
          this.loading = false
        })
    }
  }
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

