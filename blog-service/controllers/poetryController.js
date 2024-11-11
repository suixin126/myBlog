// 连接数据池
const pool = require('../mysql/db.js');
// 获取所有句子
const getPoetry = async (req, res) => {
    pool.query('SELECT * FROM poetry', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            console.log(err)
        } else {
            res.status(200).json(results);
        }
    });
};

// 导出控制器
module.exports = {
    getPoetry,
};