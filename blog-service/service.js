const express = require('express');
const app = express();
const port = 3000;

// 引入控制器
const sentencesController = require('./controllers/sentencesController.js');
const poetryController = require('./controllers/poetryController.js');

// 相关路由
// 获取所有句子
app.route('/sentences')
  .get(sentencesController.getAllSentences)

// 获取诗文
app.route('/poetry')
.get(poetryController.getPoetry)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});