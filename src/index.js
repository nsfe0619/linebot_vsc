var cheerio = require("cheerio");
var request = require("request");

module.exports = async function App(context) {
  await context.sendText(context.event.text);
  if ((context.event.type = "text")) {
    if (context.event.text == "吼猴抽表特") {
      getBeautyArr();
      getImages(
        beautyArr[parseInt(beautyArr.length * Math.random())],
        function (img, url) {
          if (img) {
            var imagesBack = [
              {
                type: "image",
                originalContentUrl: "https://" + img + ".jpg",
                previewImageUrl: "https://" + img + ".jpg",
              },
              {
                type: "text",
                text: "https://www.ptt.cc" + url,
              },
            ];
            event
              .reply(imagesBack)
              .then(function (data) {
                // success
                console.log(imagesBack);
              })
              .catch(function (error) {
                // error
                console.log("error");
              });
          } else {
            var msg = [
              {
                type: "text",
                text: "沒抽到妹子QQ 請重抽",
              },
              {
                type: "text",
                text: "https://www.ptt.cc" + url,
              },
            ];
            event
              .reply(msg)
              .then(function (data) {
                // success
                console.log(msg);
              })
              .catch(function (error) {
                // error
                console.log("error");
              });
          }
        }
      );
    }
  }
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
