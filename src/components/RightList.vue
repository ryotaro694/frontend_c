<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const rightItems = computed(() => store.state.rightItems);

const moveItemLeft = () => {
	store.commit('moveItemLeft')
}
</script>

<template>
	<div class="list-container">
		<div class="list-card">
			<ul class="list-card__ul">
				<div class="list-card__box" v-for='(item, index) in rightItems' :key='index'>
					<li class="list-card__li">{{ item }}</li>
					<hr class="list-card__hr">
				</div>
			</ul>
		</div>
		<div class="list-button__box">
			<button class="list-card__button" @click="moveItemLeft()">
				左へ移動
			</button>
		</div>
	</div>
</template>

<style scoped>
.list-container {
	width: 300px;
}

.list-card {
	min-height: 600px;
	border: solid 1px navy;
}

.list-card__ul {
	text-align: center;
	padding-inline-start: 0;
}

.list-card__box {
	padding-bottom: 3px;
}

.list-card__li {
	padding-bottom: 4px;
	list-style: none;
}

.list-card__hr {
	height: 1px;
	background-color: navy;
	width: 80%;
	border: none;
}

.list-button__box {
	text-align: center;
}

.list-card__button {
	margin-top: 30px;
	background-color: navy;
  border: none;
  color: white;
	font-size: 16px;
	height: 40px;
	width: 140px;
	display: inline-block;
}
</style>