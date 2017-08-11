<template>
  <div>
    <vue-count-up :start="23.00" :end="2013.14" :duration="2.5" :decimal="2" :options="{useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '￥',
            suffix: ''}"></vue-count-up>
  </div>
</template>

<script>
import VueCountUp from './componments/vueCountUp.vue';
export default {
  name: 'app',
  data() {
    return {
      autoplay: false
    }
  },
  components: { VueCountUp },
  methods: {
  }
}
</script>