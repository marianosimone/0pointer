function parseRSS(url, callback) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}

function showRSS(feed) {
    $(feed.entries).each(function(){
        var a = $($("#hidden_a").text());
        a.attr("href",this.link);
        a.text(this.title);
        var li = $($("#hidden_li").text());
        a.appendTo(li);
        li.appendTo("#feedlist");
    });
}

$(document).ready(function(){ parseRSS("http://delicious.com/v2/rss/marianosimone/Shared", showRSS);});
