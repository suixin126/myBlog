<template>
  <div class="home-contain">
    <div class="video-box">
      <video
        class="video-background"
        preload="auto"
        loop
        playsinline
        autoplay
        src="./assets/video/test.mp4"
        tabindex="-1"
        muted="muted"
      ></video>
      <div class="layer">
        <div class="slogan">
          <div class="subtitle">随心的博客</div>
          <div class="title">书写博客，丰富生活</div>
          <div class="try-btn" @click.prevent="toBlog">立即进入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const toBlog = () => {
  router.push('/body')
}
</script>

<style lang="scss" scoped>
.video-box {
  font-family: Gilroy Semi Bold, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  position: relative;
  height: 100vh;
  background-color: #c1cff7;
  /*进行视频裁剪*/
  overflow: hidden;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 800px;
}

.layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(19, 60, 154, 0.2);
}

.layer img {
  margin-top: 15px;
  margin-left: 100px;
}

.slogan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 684px;
  color: white;
  text-align: center;
}

.slogan .subtitle {
  font-weight: 550;
  font-size: 20px;
  letter-spacing: 10px;
  margin: 0 0 16px;
}

.slogan .title {
  font-weight: 550;
  font-size: 56px;
  margin: 0 0 16px;
}

.slogan .try-btn {
  position: relative;
  left: 50%;
  width: 156px;
  height: 54px;
  line-height: 54px;
  margin-top: 40px;
  margin-left: -78px;
  color: #3370ff;
  background: white;
  text-align: center;
  border-radius: 100px;
  font-weight: 600;
}
.try-btn:hover {
  cursor: pointer;
  color: red;
}

</style>