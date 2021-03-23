<template lang="">
  <div>
    <div class="row">
       <div class="col">
<b-card
    title="Item 1"

  >
    <b-card-text class="text-danger">
 <b>  {{prix1}} </b>
    </b-card-text>
<br>
    <b-button variant="primary" @click="AddCard(prix1)">Add</b-button>
  </b-card>

   </div>
      <div class="col">
<b-card
    title="Item 2"

  >
    <b-card-text>

 {{prix2}}
    </b-card-text>
<br>
    <b-button variant="primary" @click="AddCard(prix2)">Add</b-button>
  </b-card>

   </div>
      <div class="col">
<b-card
    title="Item 3"

  >
    <b-card-text>
 {{prix3}}
 </b-card-text>
<br>
    <b-button variant="primary" @click="AddCard(prix3)">Add</b-button>
  </b-card>

   </div>
  
   
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prix1: this.$store.state.prix1,
      prix2: this.$store.state.prix2,
      prix3: this.$store.state.prix3,
    };
  },
  methods: {
    AddCard(prix) {
      this.$store.commit("AddCard", prix);
    },
  },
};
</script>
<style lang="">
</style>