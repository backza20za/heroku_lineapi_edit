exports.sendText = (event) => {
  let msg;

  let msgText = event.message.text.toLowerCase().trim();

  if (msgText === "promotion") {
    msg = { type: "text", text: "first promotion" };
  } else if (msgText === "555") {
    msg = { type: "text", text: "555" };
  } else {
    msg = { type: "text", text: "unknow promotion" };
  }
  return msg;
};
