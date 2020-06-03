var cheerio = require("cheerio");
var request = require("request");

module.exports = async function App(context) {
  await context.sendText(context.event.text);
};
//抽表特start
var beautyArr = [];
function getBeautyArr() {
  request(
    "https://www.ptt.cc/bbs/Beauty/index" +
      parseInt(1135 * Math.random() + 1300) +
      ".html",
    function (error, response, body) {
      var $ = cheerio.load(body);
      $(".r-ent .title a").each(function (i, elem) {
        beautyArr.push($(".r-ent .title a").eq(i).attr("href"));
      });
    }
  );
}

function getImages(post, callback) {
  request("https://www.ptt.cc" + post, (err, res, body) => {
    var imgArr = [];
    if (body) {
      var images = body.match(/imgur.com\/[0-9a-zA-Z]{7}/g);
      var randomImgArr = images;
      if (randomImgArr) {
        var tmpRandomImg =
          randomImgArr[parseInt(randomImgArr.length * Math.random())];

        callback(tmpRandomImg, post);
      } else {
        callback(false, post);
      }
    } else {
      callback(false, post);
    }
  });
}
//抽表特end
