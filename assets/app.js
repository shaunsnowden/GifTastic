$(document).ready(function(){

// Create buttons
	var buttons = ["LOL", "FML", "OhNo", "ForgetIt", "Uhhh", "GameOfThrones", "No", "Fail"];

	for (var i=0;i<buttons.length;i++){
	 	var giphyBtn = $("<button>");
	 	giphyBtn.addClass("btn btn-primary giphy-button");
	 	giphyBtn.attr("giphy-tag", buttons[i]);
	 	giphyBtn.text(buttons[i]);
	 	$("#button-container").append(giphyBtn);
	 };

// Query API after pressing a button
	$(".giphy-button").on('click',function(){

		$('#gif-container').empty();
		
		var gifTag = $(this).text();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTag + "&api_key=dc6zaTOxFJmzC&limit=10";

		// console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: 'GET'

		}) .done(function(response){

			// console.log(response);
			var results = response.data;

			for (var i = 0; i < results.length; i++) {

				var gifDiv = $('<div/>');
				gifDiv.addClass("gifResults");

				var p = $('<p/>');
				p.text(results[i].rating);
				// console.log(p);

				var gifImage = $('<img/>');
				gifImage.addClass('gifImageResults');
				gifImage.attr('src', results[i].images.fixed_height.url);
				gifImage.attr('data-still', results[i].images.fixed_height.url);
				gifImage.attr('data-animate', results[i].images.fixed_height.url);
				// .attr('data-state', 'still');
				// console.log(gifImage);


				gifDiv.append(p);
				gifDiv.append(gifImage);
				gifDiv.prependTo($('#gif-container'));

				// console.log(gifImage);


			};
		});
	
	});

	// Submit Button
		$('#newGifBtn').on('click', function(evt){
			evt.preventDefault();
			
			var newTag = $('#newGifInput').val();
			var newButton = $("<button>");
			console.log(newTag);

			newButton.text(newTag).attr("giphy-tag", newTag);
			newButton.addClass("btn btn-primary giphy-button");


			$("#button-container").append(newButton);

			// $('#newGifInput').reset();
			$(".giphy-button").on('click',function(){

		$('#gif-container').empty();
		
		var gifTag = $(this).text();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTag + "&api_key=dc6zaTOxFJmzC&limit=10";

		// console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: 'GET'

		}) .done(function(response){

			// console.log(response);
			var results = response.data;

			for (var i = 0; i < results.length; i++) {

				var gifDiv = $('<div/>');
				gifDiv.addClass("gifResults");

				var p = $('<p/>');
				p.text(results[i].rating);
				// console.log(p);

				var gifImage = $('<img/>');
				gifImage.addClass('gifImageResults');
				gifImage.attr('src', results[i].images.fixed_height.url);
				gifImage.attr('data-still', results[i].images.fixed_height.url);
				gifImage.attr('data-animate', results[i].images.fixed_height.url);
				// .attr('data-state', 'still');
				// console.log(gifImage);


				gifDiv.append(p);
				gifDiv.append(gifImage);
				gifDiv.prependTo($('#gif-container'));

				// console.log(gifImage);


			};
		});
	
	});

	});

});


