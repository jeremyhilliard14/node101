var http = require('http');

var fs = require('fs');//fs includes the file system module.
//var homePageHtml = fs.readFileSync('homePageHtml.html')

//console.log(http);

//setting up a server using javascrip
//create server take an input and output
function renderHomePage(request, response){
	var homePageHtml = fs.readFileSync('homePageHtml.html')
	//set the header first.  once it has been set you cannot change it.
	response.writeHead(200, {'content-type': 'text/html'});
	response.write(homePageHtml);
	response.end();
}

function render404Page(request, response){
	response.writeHead(404);
	response.end('404, page not found.');
}

function renderNewPage(request, response){
	var newPageHtml = fs.readFileSync('newPage.html');
	response.writeHead(200, {'content-type': 'text/html'});
	response.write(newPageHtml);
	response.end();
}

function renderAnotherPage(request, response){
	var anotherPageHtml = fs.readFileSync('anotherPage.html');
	response.writeHead(200, {'content-type': 'text/html'});
	response.write(anotherPageHtml);
	response.end();
}

function renderFinalPage(request, response){
	var finalPageHtml = fs.readFileSync('finalPage.html');
	response.writeHead(200, {'content-type': 'text/html'});
	response.write(finalPageHtml);
	response.end();
}

var server = http.createServer(function(request, response){
	//tell it how to respond to requests
	console.log(request.url);
	// response.writeHead(200, {'content-type': 'text/html'});
	if(request.url == '/'){
		renderHomePage(request, response);
	}else if(request.url == '/newPage'){
		renderNewPage(request, response);

	}else if(request.url == '/anotherPage'){
		renderAnotherPage(request, response);
	}else if(request.url == '/final'){
		renderFinalPage(request, response);
	}else{
		response.writeHead(404, {'content-type': 'text/html'});
		render404Page(request, response);
		// response.end();
		// console.log(response);
	}
	//console.log(request);
	//console.log(response);
	response.end();

});

server.listen(8000);
console.log("Our server is listening on port 8000.");