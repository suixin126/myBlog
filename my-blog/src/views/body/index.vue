<template>
  <div class="body-contain">
    <div class="body-header">
      <div class="body-header-top"><h2>随心的博客</h2></div>
      <div class="body-header-nav">
        <span class="body-header-nav-item" @click.prevent="handleRoute('index')">
          <i class="icon iconfont icon-faxian-copy"></i>
          <a href="#">首页</a>
        </span>
        <span class="body-header-nav-item" @click.prevent="handleRoute('articles')">
          <i class="icon iconfont icon-yuedu"></i>
          <a href="#">文章</a>
        </span>
        <span class="body-header-nav-item" @click.prevent="handleRoute('mine')">
          <i class="icon iconfont icon-a-wodedefuben2"></i>
          <a href="#">我的</a>
        </span>
        <span class="body-header-nav-item" @click.prevent="handleRoute('about')">
          <i class="icon iconfont icon-guanyu"></i>
          <a href="#">关于</a>
        </span>
      </div>
    </div>
    <div class="body-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import router from '../../router';
// 路由跳转
const handleRoute = (name) => {
  router.push(`/body/${name}`);
}

</script>

<style lang="scss" scoped>
@import url('./assets/icons/inconfont/iconfont.css');
.body-contain {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)), url('./assets/imgs/background.jpg') no-repeat 0% 20%/ cover;
  overflow-x: hidden;
}
.body-header {
  height: 200px;
  .body-header-top {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
    font-weight: 700;
    h2 {
      background: linear-gradient(
        to right,
        #ff0000,
        #ffff00
      ); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
      -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
      -webkit-text-fill-color: transparent; /*给文字设置成透明*/
    }
  }
  .body-header-nav {
    height: 60px;
    margin-top: 10px;
    // background-color: pink;
    text-align: center;
    a{
      text-decoration: none;
      color: purple;
      font-size: 28px;
      font-weight: 700;
      &:hover {
        color: aqua;
      }
    }
   .body-header-nav-item {
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      font-weight: 700;
      margin-right: 60px;
    }

  }
}
</style>