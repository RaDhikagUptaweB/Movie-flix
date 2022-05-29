const api_key = "489d17035e3c102567659de6759b8bfd"
const base_url = "https://api.themoviedb.org/3/"

function fun(){
	// Treding movies
	trending_url = base_url+"trending/all/day?api_key="+api_key
	var trending = fetch(trending_url).then(res=>res.json()).then(trending)

	var ctitle = document.getElementsByClassName('column_title');
	trending.then(value => {

		for(i=1, j=1;i<20;){
			if(value.results[i].title != undefined){
				document.getElementById("columnt"+j).innerHTML = value.results[i].title;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].poster_path;
				document.getElementById("still"+j).src = image_link;
				id = value.results[i].id;
				document.getElementById('tlink'+j).href = '#'+value.results[i].title+'/'+id;
				j+=1;
			}
			i+=1;

		}})

	//Top rated
	var toprated_url = base_url+"movie/top_rated?api_key="+api_key+"&language=en-US&page=1"
	var toprated = fetch(toprated_url).then(res=>res.json()).then(toprated)

	toprated.then(value => {

		for(i=1, j=1;i<20;){
			if(value.results[i].title != undefined){
				document.getElementById("trcolumnt"+j).innerHTML = value.results[i].title;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].poster_path;
				document.getElementById("trstill"+j).src = image_link;
				id = value.results[i].id;
				document.getElementById('trlink'+j).href = '#'+value.results[i].title+'/'+id;
				j+=1;
			}
			i+=1;

		}})

	//Trending people
	people_url = base_url+"person/popular?api_key="+api_key+"&language=en-US&page=1"
	var people = fetch(people_url).then(res=>res.json()).then(people)
	people.then(value=>{
		for(i=1, j=1;i<20;){
			if(value.results[i].name != undefined){
				document.getElementById("pcolumnt"+j).innerHTML = value.results[i].name;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].profile_path;
				document.getElementById("pstill"+j).src = image_link;
				j+=1;
			}
			i+=1;

		}
	})

	upcoming_url = base_url+"movie/upcoming?api_key="+api_key+"&language=en-US&page=1"
	var upcoming = fetch(upcoming_url).then(res=>res.json()).then(upcoming)
	upcoming.then(value => {

		for(i=1, j=1;i<20;){
			if(value.results[i].title != undefined){
				document.getElementById("ucolumnt"+j).innerHTML = value.results[i].title;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].poster_path;
				document.getElementById("ustill"+j).src = image_link;
				trailer_id = value.results[i].id;
				id = value.results[i].id;
				document.getElementById('ulink'+j).href = '#'+value.results[i].title+'/'+id;
				j+=1;
			}
			i+=1;
		}})
	
}

//Hash change 
window.addEventListener('hashchange', function(){
	//console.log('Hey, hash has been changed!!!')
	//console.log(window.location.hash)

	var str = window.location.hash;
	var res = str.split("/");
	movie_id = res[1]

	movie_data = 'http://api.themoviedb.org/3/movie/'+movie_id+'?api_key='+api_key;

	var	data = fetch(movie_data).then(res=>res.json()).then(data)

	movie_video_url = base_url+"movie/"+movie_id+"/videos?api_key="+api_key+'&language=en-US';
	var movie_video = fetch(movie_video_url).then(res=>res.json()).then(movie_video)
	

	str = `<head><link rel="stylesheet" href="styles.css"></head>
			<body>
				<header> 
					<div class="topnav">
						<a class="active" href="home.html">
							<img class="imdbLogo" src="imdbLogo.png">
						</a>
						<input id="searchbar1" class="searchbar" type="text" placeholder="Search IMDb">
						<input class="search" type="submit" value="search" onclick="search()">
						<button class="topnavbutton" type="button">Watchlist</button>
						<button class="topnavbutton" type="button">Sign In</button>
					</div>
				</header>

				<main>
				<div>
					<h1> Movie details</h1>

					<div class="trailposts">
						<div class="trailpost">
							<iframe id="trailer" class="trail"  src=""></iframe>
							
						</div>	
						<div class="trailpost">
							<img id="movie_poster" src="">
						</div>	
					</div>	



					<h2 id="selected_mtitle"></h2>
					<p id='description'></p>
					<span id='rating'></span><br>		
					<span id="release_date"></span>

					<br>
					<span id="heading2"><b>Cast</b></span>

					<div class="columns">
						<div class="column">
							<a id="trlink1" href="">
								<img id="cstill1" class="still" src="">
								<h3 id="ccolumnt1" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink2" href="">
								<img id="cstill2" class="still" src="">
								<h3 id="ccolumnt2" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink3" href="">
								<img id="cstill3" class="still" src="">
								<h3 id="ccolumnt3" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink4" href="">
								<img id="cstill4" class="still" src="">
								<h3 id="ccolumnt4" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink5" href="">
								<img id="cstill5" class="still" src="">
								<h3 id="ccolumnt5" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink6" href="">
								<img id="cstill6" class="still" src="">
								<h3 id="ccolumnt6" class="column_title"></h3>
							</a>
						</div>
					</div>

				</div>

					<br>
					<span id="heading2"><b>Similar Movies</b></span>

					<div class="columns">
						<div class="column">
							<a id="trlink1" href="">
								<img id="sstill1" class="still" src="">
								<h3 id="scolumnt1" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink2" href="">
								<img id="sstill2" class="still" src="">
								<h3 id="scolumnt2" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink3" href="">
								<img id="sstill3" class="still" src="">
								<h3 id="scolumnt3" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink4" href="">
								<img id="sstill4" class="still" src="">
								<h3 id="scolumnt4" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink5" href="">
								<img id="sstill5" class="still" src="">
								<h3 id="scolumnt5" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink6" href="">
								<img id="sstill6" class="still" src="">
								<h3 id="scolumnt6" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="trlink6" href="">
								<img id="sstill7" class="still" src="">
								<h3 id="scolumnt7" class="column_title"></h3>
							</a>
						</div>
					</div>

				</main>	

				<footer>
					<br><br><br><br>
					<a id="footer_link1">Get the IMDb App</a>
					<a>Help</a>
					<a>Site Index</a>
					<a>IMDb Pro</a>
					<a>Box Office Mojo</a>
					<a>IMDb developer</a><br>
					<a id="footer_link2">Press Room</a>
					<a>Advertising</a>
					<a>Jobs</a>
					<a>Conditions of Use</a>
					<a>Privacy Policy</a>
					<a>Internet-Based Ads</a>
				</footer>		
			</body>`;
	document.write(str);

	movie_video.then(values=>{
		video_link = "https://www.youtube.com/embed/"+values.results[0].key+"?autoplay=1&mute=1"
		document.getElementById("trailer").src = video_link;
	})

	data.then(value => {
		image1_link = "https://image.tmdb.org/t/p/w500"+value.poster_path;
		document.getElementById("movie_poster").src = image1_link;
		selected_mtitle.innerHTML = value.title;
		description.innerHTML = value.overview;
		rating.innerHTML = "Rating: "+value.vote_average;
		release_date.innerHTML = "Release Date: "+value.release_date;

	})

	//Movie credits
	var credits_url = base_url+"movie/"+movie_id+"/credits?api_key="+api_key+"&language=en-US"
	var credits = fetch(credits_url).then(res=>res.json()).then(credits)
	credits.then(value=>{
		for(i=0, j=1;i<20;){
			if(value.cast[i].name != undefined){
				document.getElementById("ccolumnt"+j).innerHTML = value.cast[i].name;
				image_link = "https://image.tmdb.org/t/p/w500"+value.cast[i].profile_path;
				document.getElementById("cstill"+j).src = image_link;
				j+=1;
			}
			i+=1;

		}
	})

	//Similar movies
	var similar_movies_url = base_url+"movie/"+movie_id+"/similar?api_key="+api_key+"&language=en-US&page=1";
	var similar_movies = fetch(similar_movies_url).then(res=>res.json()).then(similar_movies)
	similar_movies.then(value=>{
		for(i=0, j=1;i<20;){
			if(value.results[i].title != undefined){
				document.getElementById("scolumnt"+j).innerHTML = value.results[i].title;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].poster_path;
				document.getElementById("sstill"+j).src = image_link;
				j+=1;
			}
			i+=1;

		}
	})
})

function search(){
	str = `<head><link rel="stylesheet" href="styles.css"></head>
			<body>
				<header> 
					<div class="topnav">
						<a class="active" href="home.html">
							<img class="imdbLogo" src="imdbLogo.png">
						</a>
						<input class="searchbar" type="text" placeholder="Search IMDb">
						<input class="search" type="submit" value="search" onclick="search()">
						<button class="topnavbutton" type="button">Watchlist</button>
						<button class="topnavbutton" type="button">Sign In</button>
					</div>
				</header>

				<main>
					<h2>Search results</h2>

					<div class="columns">
						<div class="column">
							<a id="rlink1" href="">
								<img id="rstill1" class="still" src="">
								<h3 id="rcolumnt1" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink2" href="">
								<img id="rstill2" class="still" src="">
								<h3 id="rcolumnt2" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink3" href="">
								<img id="rstill3" class="still" src="">
								<h3 id="rcolumnt3" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink4" href="">
								<img id="rstill4" class="still" src="">
								<h3 id="rcolumnt4" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink5" href="">
								<img id="rstill5" class="still" src="">
								<h3 id="rcolumnt5" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink6" href="">
								<img id="rstill6" class="still" src="">
								<h3 id="rcolumnt6" class="column_title"></h3>
							</a>
						</div>
						<div class="column">
							<a id="rlink7" href="">
								<img id="rstill7" class="still" src="">
								<h3 id="rcolumnt7" class="column_title"></h3>
							</a>
						</div>
					</div>

				</main>	

				<footer>
					<br><br><br><br>
					<a id="footer_link1">Get the IMDb App</a>
					<a>Help</a>
					<a>Site Index</a>
					<a>IMDb Pro</a>
					<a>Box Office Mojo</a>
					<a>IMDb developer</a><br>
					<a id="footer_link2">Press Room</a>
					<a>Advertising</a>
					<a>Jobs</a>
					<a>Conditions of Use</a>
					<a>Privacy Policy</a>
					<a>Internet-Based Ads</a>
				</footer>

			</body>`;

	var query = document.getElementById('searchbar1').value;

	document.write(str);

	var search_res_url = base_url+'search/movie?query='+query+'&api_key='+api_key
	var search_res = fetch(search_res_url).then(res=>res.json()).then(search_res)

	search_res.then(value => {

		for(i=1, j=1;i<20;){
			if(value.results[i].title != undefined){
				document.getElementById("rcolumnt"+j).innerHTML = value.results[i].title;
				image_link = "https://image.tmdb.org/t/p/w500"+value.results[i].poster_path;
				document.getElementById("rstill"+j).src = image_link;
				id = value.results[i].id;
				document.getElementById('rlink'+j).href = '#'+value.results[i].title+'/'+id;
				j+=1;
			}
			i+=1;
		}})
}