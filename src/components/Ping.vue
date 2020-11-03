<template>
  <div>
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>
<script>
export default {
  name: 'Ping',
  data: function() {
    return {
      msg: "ping"
    }
  },   
  methods: {
    getMessage: function() {
      const path = 'Pong';
      console.log(path);
    },
  },
  created: function() {
    this.getMessage();
  }, 
}
</script>