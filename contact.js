function renderBlogs(){
	
	for(var i = 0; i < blogArticles.length; i++){
		// pass each element in the array off to the 
		// 'renderBlog' function
		renderBlog(blogArticles[i]);		
	}
}

function renderBlog(blog){
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
		title: "Contact us for more information!",
		author: "*Our phone number is, 1-800-2233",
		publishedOn: "",
		url: "http://www.paulirish.com/2015/advanced-performance-audits-with-devtools/",
		content: [{
				heading: "",
				paragraph: "We Would love for you to come and visit!!"
			},{
				heading: "",
				paragraph: "The environment of our store is clean, friendly, and most importantly cost effective!"
			},{
				heading: "",
				paragraph: ""
			}	
		]
	},{
		title: "Send us an email.",
		author: "'ariblet3@yahoo.com'",
		publishedOn: "We would love to hear feedback! Also, if you could not find an item, we can order it for you!",
		content: [{
				heading: "Slow",
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

var img = document.createElement("img");
img.src = "house.jpg";

var src = document.getElementById("container");
src.appendChild(img);