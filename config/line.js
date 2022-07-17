const line = require("@line/bot-sdk");

const lineConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(lineConfig);

module.exports = {
  line,
  lineConfig,
  client,
};
