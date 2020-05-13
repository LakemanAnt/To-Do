<template>
  <div>
    <label><input class="form-control" type="text" v-model="task.name"/></label>
    <button class="btn btn-info" @click="changeTask()">Change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: { id: '', name: '' },
    }
  },
  props: {
    tasks: Array,
  },
  created() {
    const { id } = this.$route.params
    this.task = this.tasks.find(item => item.id === id)
  },
  methods: {
    changeTask() {
      this.$emit('onChangeTask', this.task)
      this.$router.push('/')
    },
  },
}
</script>
