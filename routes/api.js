/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-04-24 14:05:52
 * @LastEditTime: 2020-05-20 09:40:19
 */
const router = require('koa-router')();
const api = require('../controllers/api');
const multer = require('koa-multer');
const upload = multer({
	dest: './public/uploadImg/' // 文件存储地址
})
const one = upload.single('file')
router.post('/empty-item/api/uploadImg', one, api.uploadImg);
router.post('/empty-item/general/chartList', api.queryChart);
module.exports = router;