<template>
  <div class="questions">
    <div class="questions_list">
      <questionItem
      v-bind:question_data="QUESTIONS"
      />
    </div>
  </div>
</template>

<script>
    import questionItem from './questionItem.vue'
    import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'questions',
  components: {
    questionItem,
  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'QUESTIONS',
    ])
  },
  methods: {
    ...mapActions([
      'GET_QUESTIONS_FROM_API',
    ])
  },
  mounted() {
    this.GET_QUESTIONS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arrived');
      }
    })
  }
}
</script>

<style>

</style>
