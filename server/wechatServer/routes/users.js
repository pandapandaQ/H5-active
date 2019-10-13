var express = require('express');
var router = express.Router();
var OAuth = require('co-wechat-oauth');
let WechatAPI = require('co-wechat-api');

/* GET users listing. */
router.get('/', async function(req, res, next)  {
  try {
    const { code } = req.query
    let client = new OAuth('wx4e31314f63c6e1be', '20c59c24bd4d9f946fe3bd3d79880ee7');
    let token = await client.getAccessToken(code);
    let openid = token.data.openid;
    let userInfo = await client.getUser(openid);
    console.log(userInfo)
    res.json({code:0,data:userInfo})
  } catch (e) {
    console.log('get users error', e)
    res.json({code:-100,data:{}})
    return null;
  }
});

router.post('/jsconfig', async function(req, res, next)  {
  try {
    const { jsApiList, url, debug } = req.body
    let param = {jsApiList, url, debug}
    console.log(req.body)
    let api = new WechatAPI('wx4e31314f63c6e1be', '20c59c24bd4d9f946fe3bd3d79880ee7');
    let jsConfig = await api.getJsConfig(param);
    res.json({code:0,data:jsConfig})
  } catch (e) {
    console.log('jsconfig error', e)
    res.json({code:-100,data:{}})
    return null;
  }
});

module.exports = router;
