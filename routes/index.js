var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1606113026',
    channelSecret: 'b5fc986662eebdccf92299cfbab67fee',
    channelAccessToken: 'wdinfJmfUuk8xey78LY3dCxh7+R9YuxeFW5oCszWGVI8saDW0DiLRHI7ijYcNijvw3i2w/HDYVhc5kl8dvyzyzXTFmNGk+W9GqiVNL64nzhO1lYzjiLnHEYLMcVFjJSBBc/6gAoXVsEQ6saw8PkFCQdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
    if (event.message.type = 'text') {
        var msg = event.message.text;
        //收到文字訊息時，直接把收到的訊息傳回去
        event.reply(msg).then(function(data) {
            // 傳送訊息成功時，可在此寫程式碼 
            console.log(msg);
        }).catch(function(error) {
            // 傳送訊息失敗時，可在此寫程式碼 
            console.log('錯誤產生，錯誤碼：' + error);
        });
    }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log('目前的port是', port);
});