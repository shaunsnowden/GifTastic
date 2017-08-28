$(document).ready(function(){
	var buttons = ["lol", "fml", "Winter is Coming", "teacup pig", "uhhh", "Game of Thrones", "no"];

	for (var i=0;i<buttons.length;i++){
	 	var giphyBtn = $("<button>");
	 	giphyBtn.addClass("btn btn-primary giphy-button giphy giphy-button-color");
	 	giphyBtn.attr("giphy-tag", buttons[i]);
	 	giphyBtn.text(buttons[i]);
	 	$("#gif-container").append(giphyBtn);
	 };

	$('#newGifBtn').on('click', function(evt){
		evt.preventDefault();
		console.log("Clicked!");
	});

});


