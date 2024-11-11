<template>
  <div class="articles-contain">
    <div class="left-nav">
      <ul>
        <li @click.prevent="handleComponentId('poetry')">诗文</li>
        <li @click.prevent="handleComponentId('qianduan')">前端</li>
        <li @click.prevent="handleComponentId('houduan')">后端</li>
        <li @click.prevent="handleComponentId('jiqixuexi')">机器学习</li>
      </ul>
    </div>
    <div class="right-body">
      <component :is="componentId"></component>
    </div>
  </div>
</template>
      
  <script setup>
import Poetry from "./components/Poetry.vue";
import { shallowRef } from "vue";
const componentId = shallowRef(Poetry);

// 切换组件
const handleComponentId = (name) => {
  // 选中对应导航，改变导航样式
  let navList = document.querySelectorAll(".left-nav ul li");
  if (name === "poetry") {
    componentId.value = Poetry;
    console.log(navList);
    navList.forEach((item) => {
      item.classList.remove("active");
    });
    navList[0].classList.add("active");
  }
};
</script>
      
  <style lang="scss">
.articles-contain {
  display: flex;
  width: 100%;
  .left-nav {
    width: 200px;
    text-align: center;
    font-size: 26px;
    font-family: "Courier New", Courier, monospace;
    color: purple;
    ul {
      list-style: none;
      li {
        margin: 20px 0;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
  }
  .right-body {
    flex: 1;
  }
}
.active{
  color: red;
}
</style>