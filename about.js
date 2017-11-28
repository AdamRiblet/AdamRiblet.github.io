function renderBlogs(){
	
	for(var i = 0; i < blogArticles.length; i++){
		// pass each element in the array off to the 
		// 'renderBlog' function
		renderBlog(blogArticles[i]);		
	}
}

function renderBlog(blog){
	/*
		<div class="article-wrapper">
	
			<h1>TITLE</h1>
			<h4>AUTHOR</h4>
			<h4>PUBLISHEDON</h4>
	
			<div class="content-wrapper">
				<h2>HEADING</h2>
				<p>PARAGRAPH</p>
			</div>
		</div>
	*/
	
	var articleWrapper = document.createElement("div");
	var title = document.createElement("h1");
	var author = document.createElement("h4");
	var publishedOn = document.createElement("h4");	
	var wrapper = document.createElement("div");
	
	// set content
	title.innerText = blog.title;
	author.innerText = blog.author;
	publishedOn.innerText = blog.publishedOn;
	
	// set classes
	articleWrapper.setAttribute("class", "article-wrapper");
	wrapper.setAttribute("class", "content-wrapper");
	
	// create hierarchy
	articleWrapper.appendChild(title);
	articleWrapper.appendChild(author);
	articleWrapper.appendChild(publishedOn);
	articleWrapper.appendChild(wrapper);
	
	var contents = blog.content;
	
	for(var i = 0; i < contents.length; i++){
		var content = contents[i];
		
		/*
			<div class="content-wrapper">
				<h2>HEADING</h2>
				<p>PARAGRAPH</p>
			</div>
		*/
		
		var heading = document.createElement("h2");
		var parag = document.createElement("p");
		
		heading.innerText = content.heading;
		parag.innerText = content.paragraph;
		
		if(content.heading && content.heading !== ""){
			wrapper.appendChild(heading);
		}
		wrapper.appendChild(parag);
	}
	
	var container = document.getElementById("blog-container");
	container.appendChild(articleWrapper);	
}

// use this for part 2 of the assignment
var blogArticles = [{
		title: "We are the saviors of fire exstinguishers!",
		author: "We are a small town business with great intentions!!",
		publishedOn: "",
		content: [{
				heading: "",
				paragraph: "*how we originated"
			},{
				heading: "",
				paragraph: "*how we decided"
			},{
				heading: "",
				paragraph: "*the out come"
			}	
		]
	},{
		title: "Send us an email.",
		author: "'ariblet3@yahoo.com'",
		publishedOn: "We would love to hear feedback! Also, if you could not find an item, we can order it for you!",
		url: "http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/",
		content: [{
				heading: "",
				paragraph: ""
			},{
				heading: "",
				paragraph: ""
			},{
				heading: "",
				paragraph: ""
			}
		]	
}];

renderBlogs();

