<template>
  <div class="main-contain">
    <div class="left">
      <div class="head">
        <div class="head-img"></div>
        <div class="head-text">
          <ul>
            <li>昵称：随心</li>
            <li>年龄：18</li>
            <li>性别：男</li>
            <li>QQ：3477925517</li>
            <li style="color: green; font-size: 22px">
              Nothing is impossiable!
            </li>
          </ul>
        </div>
      </div>
      <div class="left-nav">
        <div class="left-span">收藏</div>
        <div class="left-span">爱好</div>
        <div class="left-span">音乐</div>
        <div class="left-span">首页</div>
        <div class="left-span">文章</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
    
    <script setup>
</script>
    
<style lang="scss" scoped>
@keyframes turn {
    0% {
        transform: rotate(0deg);
    }

    40% {
        transform: rotate(144deg);
    }

    80% {
        transform: rotate(288deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.main-contain {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  margin-top: 50px;
  .left {
    width: 500px;
    height: 500px;
    border-radius: 5%;
    background-color: #fff;
    .head {
      position: relative;
      margin-left: 20px;
      top: 20px;
      display: flex;
      .head-img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-image: url("./assets/imgs/head.jpeg");
        background-size: cover;
        background-position: center;
      &:hover {
        // 执行一次
        animation: turn 2s linear ;
        animation-iteration-count: 1;
      }
      }
      .head-text {
        margin-left: 20px;
        li {
          list-style: none;
          font-size: 20px;
          margin-top: 10px;
        }
      }
    }
    .left-nav {
      margin-top: 60px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      .left-span {
        width: 100px;
        height: 60px;
        border-radius: 20px;
        text-align: center;
        line-height: 60px;
        font-size: 22px;
        color: wheat;
        cursor: pointer;
        margin-right: 15px;
        margin-bottom: 20px;
        background-color: skyblue;
        &:hover{
          color: red;
        }
      }
    }
  }
}
</style>