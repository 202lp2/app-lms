<template>
  <div class="container">
    
     <div class="row">
      <div class="col-sm-10">
        <h1>Persons</h1>
        <hr><br><br>
        <alert :message=message v-if="showMessage"></alert>
        <button type="button" class="btn btn-success btn-sm" v-on:click="nuevo()">Add Person</button>
        <br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in list" :key="index">
              <td>{{ d.Name }}</td>
              <td>{{ d.Age }}</td>

              <td>
                <div class="btn-group" role="group">
                  <button
                          type="button"
                          class="btn btn-warning btn-sm"
                          v-b-modal.book-update-modal
                          @click="editBook(d)">
                      Update
                  </button>
                  <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          @click="onDeleteBook(d)">
                      Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert.vue';

export default {
  name: 'Person',
  data: function() {
    return {
      list: [],
      message: '',
      showMessage: false,
    }
  },   
components: {
    alert: Alert,
  },
  methods: {
    editar(id) {
            this.$router.push('/editar/' + id);
        },
        nuevo() {
            this.$router.push('/persons/form');
        },
    getBooks: function() {
      const path = 'http://localhost:8081/v1/persons';
      axios.get(path)
        .then((res) => {
          this.list = res.data.r;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
        
    },
    addBook: function(payload) {
      const path = 'http://localhost:8081/books';
      console.log(path+payload);
    },
    editBook: function(cad) {
      console.log("edit "+cad+": "+this.message);

    },
  },

  created: function() {
    this.getBooks();
  }, 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
color: #42b983;
}
</style>