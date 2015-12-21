setInterval("addPic()",7000);

function addPic(){
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var jqxhr = $.getJSON(flickrAPI, {format: "json"});
	jqxhr.done(function(data){
		var image = data.items[0].media.m;
		document.getElementById("photos").innerHTML = '<img src="' + image + '"/>';
	})
	
}