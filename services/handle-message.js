const config = require('../config/line');
const { sendFlexCovidInfo } = require('./send-flex-covid-info');
const { sendImage } = require('./send-image');
const { sendImageMap } = require('./send-imagemap');
const { sendText } = require('./send-text');

exports.handleMessage = async (event) => {
    let msg;

    switch (event.message.text.toLowerCase().trim()) {
        case "image":
            msg = sendImage();
        break;
        case "imagemap":
            msg = sendImageMap();
        break;
        case "covid":
            msg = await sendFlexCovidInfo();
        break;
        default:
            msg = sendText(event);
    }
    
    return config.client.replyMessage(event.replyToken, msg);
}