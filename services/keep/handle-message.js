const { text } = require("express");
const config = require("../../config/line");
const { sendText } = require("./message/sendText");

exports.handleMessage = (event) => {
  let msg;

  msg = sendText(event);

  return config.client.replyMessage(event.replyToken, msg);
};
