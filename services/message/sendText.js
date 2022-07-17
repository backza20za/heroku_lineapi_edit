exports.sendText = (event) => {
  let msg;

  let msgText = event.message.text.toLowerCase().trim();

  if (msgText === "promotion") {
    msg = { type: "text", text: "first promotion" };
  } else if (msgText === "555") {
    msg = { type: "text", text: "555" };
  } else if (msgText === "love") {
    msg = {
      type: "sticker",
      packageId: "789",
      stickerId: "10856",
    };
  } else if (msgText === "drink") {
    {
  "type": "image",
  "originalContentUrl": "https://brew.sh/assets/img/homebrew-256x256.png",
  "previewImageUrl": "https://brew.sh/assets/img/homebrew-256x256.png"
}
  } else {
    msg = { type: "text", text: "unknow promotion" };
  }
  return msg;
};
