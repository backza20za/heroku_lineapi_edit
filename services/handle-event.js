const service = require('./handle-message');
// event handler
exports.handleEvent = (event) => {
    switch (event.type) {
        case "message":
            switch (event.message.type) {
                case "text":
                    service.handleMessage(event);
                    break;
                case "sticker":
                    console.log('sticker message');
                    break;
                default:
                    throw new Error("Unknown message " + JSON.stringify(event.message.type));
            }
            break;
        case "postback":
            console.log('postback')
            break;
        default:
            throw new Error("Unknown event " + JSON.stringify(event));
    }
}

