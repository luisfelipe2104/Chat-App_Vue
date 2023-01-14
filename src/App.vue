<template>
  <div class="view login" v-if="!state.username">
    <form @submit.prevent="Login" class="login-form">
      <div class="form-inner">
        <h1>Login to Chat</h1>
        <label for="username">Username</label>
        <input v-model="inputUsername"  type="text" placeholder="Enter your username">
        <input type="submit" value="Login">
      </div>
    </form>
  </div>

  <div v-else class="view chat">
    <header>
      <button @click="Logout" class="logout">Logout</button>
      <h1>Welcome, {{ state.username }}</h1>
    </header>

    <section class="chat-box">
      <div 
        v-for='message in state.messages' 
        :key='message.key' 
        :class="(message.username == state.username ? 'message current-user' : 'message')"
      >
      <div class="message-inner">
        <div class="username">{{ message.username }}</div>
        <div class="content">{{ message.content }}</div>
      </div>
      </div>
    </section>

    <footer>
      <form @submit.prevent="SendMessage">
        <input v-model='inputMessage' type="text" placeholder="Write a message...">
        <input type="submit" value="Send">
      </form>
    </footer>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue';
import db from './db.js'
export default {
  setup() {
    const inputUsername = ref('')
    const inputMessage = ref('')
    const state = reactive({
      username: "",
      messages: []
    })
    const Login = () => {
      if (inputUsername.value) {
        state.username = inputUsername.value
        inputUsername.value = ''
      }
    }

    const Logout = () => {
      state.username = ''
    }

    const SendMessage = () => {
      const messagesRef = db.database().ref('messages')

      if (inputMessage.value) {
        const message = {
          username: state.username,
          content: inputMessage.value
        }  
        messagesRef.push(message)
        inputMessage.value = ''
      }
    }

    onMounted(() => {
      const messagesRef = db.database().ref('messages')

      messagesRef.on('value', snapshot => {
        const data = snapshot.val()
        let messages = []

        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          })
        })
        state.messages = messages // updates the messages state
      })
    })

    return {
      inputUsername,
      inputMessage,
      Login,
      state,
      SendMessage,
      Logout
    }
  },
  name: 'App',
  components: {
    
  }
}
</script>


<style>

</style>
