module.exports.divination = divination;

function divination(context) {
  let dNum = getRandom(12);
  context.sendText("回覆");
  context.sendText(dNum);
  switch (dNum) {
    case 0:
      context.sendText("大吉");
      break;
    case 1:
      context.sendText("中吉");
      break;
    case 2:
      context.sendText("小吉");
      break;
    case 3:
      context.sendText("吉");
      break;
    case 3:
      context.sendText("半吉");
      break;
    case 4:
      context.sendText("末吉");
      break;
    case 5:
      context.sendText("末小吉");
      break;
    case 6:
      context.sendText("凶");
      break;
    case 7:
      context.sendText("小凶");
      break;
    case 8:
      context.sendText("半凶");
      break;
    case 9:
      context.sendText("末凶");
      break;
    case 10:
      context.sendText("大凶");
      break;
  }
}
function getRandom(x) {
  return Math.floor(Math.random() * x) + 1;
}
