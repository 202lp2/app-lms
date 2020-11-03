<template>
  <div class="hello">
    
    <p> 
      {{ list }}
    </p> 
    <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in list" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ d.Name }}</td>
              <td>{{ d.Age }}</td>
              
              
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Person',
  data: function() {
    return {
      list: ""
    }
  },   

  methods: {
    getBooks: function() {
      const path = 'http://localhost:8085/v1/persons';
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
      const path = 'http://localhost:5001/books';
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