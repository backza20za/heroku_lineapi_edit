exports.sendText = (event) => {
  let msg;

  let msgText = event.message.text.toLowerCase().trim();

  if (msgText === "promotion") {
    msg = { type: "text", text: "มีโปรโมชั่นวัคซีน ราคา 1,500 บาท" };
  } else if (msgText === "555") {
    msg = { type: "text", text: "ฮ่าๆๆ" };
  } else if (msgText === "love") {
    msg = {
      type: "sticker",
      packageId: "789",
      stickerId: "10856",
    };
  } else {
    msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" };
  }

  return msg;
};
