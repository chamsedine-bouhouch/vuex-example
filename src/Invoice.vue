<template lang="">
  <div>
       <div class="col mt-5">
<b-card
    title="Checkout"

  >
    <b-card-text>
Total : {{total}}
    </b-card-text>


  </b-card>

   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    total() {
      return this.$store.state.total;
    },
  },
};
</script>
<style lang="">
</style>