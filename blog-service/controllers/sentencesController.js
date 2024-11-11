
// 连接数据池
const pool = require('../mysql/db.js');
// 获取所有句子
const getAllSentences = async (req, res) => {
    pool.query('SELECT * FROM sentences', (err, results) => {
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
    getAllSentences,
};