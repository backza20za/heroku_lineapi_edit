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
    msg = {
      type: "image",
      originalContentUrl: `${process.env.BASE_URL}/images/homebrew.png`,
      previewImageUrl: `${process.env.BASE_URL}/images/homebrew.png`,
    };
  } else {
    msg = { type: "text", text: "unknow promotion" };
  }
  return msg;
};
