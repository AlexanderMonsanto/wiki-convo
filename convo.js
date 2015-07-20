var express = require('express');
var request = require("request");

app = express();

app.use(express.static(__dirname + "/public"))

app.set("view engine", 'ejs');

app.get('/', function(req, res){
  request('http://unicorn.wmflabs.org/techtask/discussion.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
    res.render("index", {topics: info.topics});
  }
})
})

app.listen(process.env.PORT || 3000);

// var data = require("./discussion.json");

// for (var i = 0; i<data.topics.length; i++) {
//   if (data.items[i].kind === "shopping#product"){
//     count+=1;
//   }

// }

// console.log(data)

// $.get("http://unicorn.wmflabs.org/techtask/discussion.json", function (data) {
//    //response data are now in the result variable
//   console.log(data);
// });



    // $.ajax({
    //     type: 'GET',
    //     url: "http://unicorn.wmflabs.org/techtask/discussion.json",
    //     jsonpCallback: 'callback',
    //     dataType: 'json',
    //     success: function (data) {
    //     console.log(data);
    //     },
    //     error: function (error) {
    //     console.log(error);
    //     },
    //     jsonp: false
    // });

// $(function(){

//   $.get("http://unicorn.wmflabs.org/techtask/discussion.json", function(wikiConvoData) {


//     console.log(wikiConvoData.data)

//     // var pics = redditData.data.children.map(function(element){
//     //   return element.data.url
//     // })

//     //Made to filter out non jpg urls
//     // var pics = pics.filter(function(element){
//     //   if(pics.indexOf("jpg") >= 0){
//     //     return element.data.url
//     //   }
//     // })

//     // var counter = 0;

//     // setInterval(function(){
//     //   $('img').fadeOut( 500,function(){
//     //     $(this).remove();
//     //   })
//     //   $('<img>').attr("src",pics[counter]).hide().appendTo("#slideshow").fadeIn();
//     //   counter++;
//     //   if(counter >= pics.length -1){
//     //     counter = 0;
//     //   }
//     // },2000)



//     // pics.forEach(function(pic){
//     //   return pic.
//     // })

//   });



// });
