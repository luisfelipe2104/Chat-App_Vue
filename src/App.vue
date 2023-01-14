<template>
  <div class="view login">
    <form class="login-form">
      <div class="form-inner">
        <h1>Login to Chat</h1>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter your username">
        <input type="submit" value="Login">
      </div>
    </form>
  </div>

  <div class="view chat">
    <h1>Chat View</h1>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue';
import db from './db.js'

export default {
  setup() {
    return {

    }
  },
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
