<script setup>
import LeftList from './components/LeftList.vue'
import RightList from './components/RightList.vue'

</script>

<template>
  <div class="container">
    <div class="list-group">
      <LeftList />
      <RightList />
    </div>
  </div>
</template>

<style scoped>
.container {
	padding-top: 30px;
	width: 100%;
}

.list-group {
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 600px;
}
</style>