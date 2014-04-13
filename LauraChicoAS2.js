(function( assignment2 , $ , undefined) {

//Create function to download the episodes.json data file using jQuery AJAX

assignment2.episodes=function(){

	
	//We need to create the button to change the color of the seasons 
	//jQuery selector and button to select all "season" (episode) data points and change into red color
	var seeSeason=$('<button/>', {text:'See Seasons', id:'season'});
	$('#subtitle').append(seeSeason);
	

	//1 JSON AJAX request


	$.ajax( {url:"episodes.json"}).done(



		//Once we have our AJAX returns

		function(dataepisodes){

			

			//Parse the data and turn it into info to be placed on the screen

			var parsedepisodes=dataepisodes;

			//Data from episodes.json: Display episode name, name of the show and season

			$(parsedepisodes).each(function(index,val){

			for(index=0;index<$(parsedepisodes).length;index++){

				

				var div=$("<div></div>");
				
				var episodeTitle=$('<h2>'+val.episode.title+'</h2>');
				$(div).append(episodeTitle);

				var episodeshow=$('<p>'+"From:   "+val.show.title+'</p>');
				$(div).append(episodeshow);

				//Season selector

				var episodeSeason=$('<p>'+"Season:  "+val.episode.season+'</p>');
				$(div).append(episodeSeason);

				//When clicked turn the color to red
				$(seeSeason).one("click",function(event){
					
					$(episodeSeason).css("color","red");

				});//one
				
				}//for
				
				var br=$("<br></br>");
				$('#upcomingEpisodes').append(br);
				$('#upcomingEpisodes').append(div);

				});//each parsedepisodes


		});

};


//Create function to download the shows.json data file using jQuery AJAX

//2 JSON AJAX request

assignment2.shows=function(){

	//2 JSON AJAX request

	$.ajax( {url:"shows.json"}).done(

		//Once we have our AJAX returns

		function(datashows){

			//Parse the data and turn it into info to be placed on the screen

			var parsedshows=datashows;

			//Data from shows.json: Display title, description and button to load more

			$(parsedshows).each(function(index,val){
				
			for(index=0;index<$(parsedshows).length;index++){

				var div=$("<div></div>");
				div.slideUp("slow");
				
				var showTitle=$('<h2>'+val.title+'</h2>')
				$(div).append(showTitle);
					
				var showDescription=$('<p>'+val.overview+'</p>');
				$(div).append(showDescription);

				//Load more
				var yearCountry=$('<p>'+val.year +"  "+ val.country+'</p>');
				var seeIt=$('<h3>'+"You can watch it : "+'</h3>');
				var netdaytime=$('<p>'+val.air_day +"  "+ val.air_time+"  on  "+val.network+ '</p>');
				var urltext=$('<h3>'+"Want more?  "+'</h3>');
				var url=$('<h4>'+ val.url+'</h4>');
				
				var readMore=$('<button/>', {text:'Read More',id:'readMore',click:function(){
						
						$(div).append(yearCountry);
						$(div).append(seeIt,netdaytime,urltext,url);

					}});

				$(div).append(readMore);

				}//for

				$('#interestingShows').append(div);

				});

		});

};

assignment2.whenclicked=function(){

	$("#loadData").one("click",function(event){

			$('#upcomingEpisodes.upcEpis').toggleClass("upcomingEpisodes");
			$('#interestingShows.intShows').toggleClass("interestingShows")
			assignment2.episodes();
			assignment2.shows();
			

	});

};

//invoke the event when page ready

$(document).ready(assignment2.whenclicked);




})(window.assignment2 = window.assignment2 || {}, jQuery)