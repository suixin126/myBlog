<template>
  <div class="poetry-contain">
    <div class="item" v-for="item in articles.poetry" :key="item.id">
      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="author">
        <span>{{ item.dynasty }}{{ item.author }}</span>
      </div>
      <div class="content" v-for="item2 in item.content" :key="item2">
        <p>
          {{ item2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { articlesStore } from '../../../store/modules/articles';
const articles = articlesStore();
onMounted(()=>{
  articles.getPoetry();
})
</script>

<style lang="scss">
.poetry-contain {
    position: relative;
    left: 20%;
    
 .item {
    padding: 20px;
    width: 600px;
    border-radius: 20px;
    text-align: center;
    font-size: 26px;
    font-family: "Courier New", Courier, monospace;
    background-color: #f0efe2;
    margin-bottom: 30px;
    .author {
    color: gray;
    text-align: right;
    }

  }
}
</style>