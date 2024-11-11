<template>
  <div class="index-contain">
    <div class="content-box">
      <div class="content-en">{{ sentence.en }}</div>
      <div class="content-ch">{{ sentence.ch }}</div>
    </div>
  </div>
</template>
  <script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { bodyIndexStore } from "../../store/modules/bodyIndex";
const indexStore = bodyIndexStore();
const sentence = ref(indexStore.sentences[0]);
const timer = ref(null);

// 在组件挂载后
onMounted(() => {
  // 获取所有句子
  indexStore.getAllSentences();
  // 随机显示句子
  sentence.value =
    indexStore.sentences[
      Math.floor(Math.random() * indexStore.sentences.length)
    ];
  // 定时器，每10秒切换一次句子
  timer.value = setInterval(() => {
    sentence.value =
      indexStore.sentences[
        Math.floor(Math.random() * indexStore.sentences.length)
      ];
  }, 10000);
});

// 在组件卸载前清除定时器
onBeforeUnmount(() => {
  console.log("清除定时器");
  clearInterval(timer);
});
</script>
      
  <style lang="scss">
.index-contain {
  .content-box {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-family: Arial, sans-serif;
    font-weight: 700;
    background: linear-gradient(
      to right,
      #ffa200b3,
      #ff0000
    ); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
    -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
    -webkit-text-fill-color: transparent; /*给文字设置成透明*/
    animation: 10s fade infinite alternate;
  }
}

// 定义动画效果
@keyframes fade {
  0% {
    opacity: 0; /* 初始状态为完全透明 */
  }
  10% {
    opacity: 0.3;
  }
  20% {
    opacity: 0.6;
  }
  30% {
    opacity: 0.9;
  }
  50% {
    opacity: 1; /* 中间状态为完全不透明 */
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0; /* 最终状态又变回完全透明 */
  }
}
</style>