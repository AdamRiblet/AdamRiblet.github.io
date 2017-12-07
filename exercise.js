$(document).ready(function(){
	
	/*
	// synchronous
	var data = getMeSomeData();

	// async
	var data2 = null;
	getMeSomeDataAsync(function(response){
		data2 = response;
	});
	*/
	
	var baseUrl = "https://AdamRiblet.github.io/";
	
	// setup links using data from episode-list
	$.get(baseUrl + "api/episode-list.json", function(data){
		$(".marker.one").on("click", function() {
  if (!$("#show img").is("*"))
    $("#show").html(
      "Image : <img src=" + json.Hatch[0].image + ">"
    + "| Description : " + json.Hatch[0].description
    );
});
		$("#movie-menu").empty(); // remove any old links
		// data is an array of episode objects
		$.each(data, function(i, episode){  //loop through each element in the data retrieved
			var $anchor = $("<a href='#'></a>"); //create an <a>
			var $li =$("<li></li>"); //create the list item
			
			$anchor.attr("id", "episode-" + episode.id); // add an id="episode-1"
			$anchor.text(episode.name);  //add the text
			$li.append($anchor); //add the anchor to the li
			$("#movie-menu").append($li);  //then add the li to the list in html
			
			$anchor.click(createClickHandler(baseUrl + episode.url));	//when one of those li anchors is clicked, invoke the createClickHandler function
		});		
	});
	/*
	// we could do individual click handlers, but that would be inefficient and not responsive when more episodes are added
	$("#episode-1").click(function(){
		
		$.get(baseUrl + "episode-1.json", function(data){
			console.log(data);
			
			$("#episode-title").text(data.title);
			$("#episode-desc").text(data.description);
		});		
	});
	
	
	$("#episode-2").click(createClickHandler(baseUrl + "episode-2.json"));
	$("#episode-3").click(createClickHandler(baseUrl + "episode-3.json"));
	$("#episode-4").click(createClickHandler(baseUrl + "episode-4.json"));
	*/
	
	// example of a "factory" function that will handle clicks on any anchors (invoked on line 29), retrieve data using the get method, then display data in html
	function createClickHandler(url){
		// OMG (object management group) inception
		return function onClick(){
			$.get(url, function(data){
				console.log(data);
				
				$("#episode-title").text(data.title);
				$("#episode-desc").text(data.description);
				$("#episode-pic").text(data.url);
			});
		}
	}
	
});