(function (global){
	qz={};

	var homehtmlUrl="snippets/home-snippet.html";
	var gkquizUrl="snippets/gkquiz-snippet.html";
	var techquizUrl="snippets/techquiz-snippet.html";
	var aptquizUrl="snippets/aptquiz-snippet.html";

	var insertHtml = function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
		
	};

	var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
  };

document.addEventListener("DOMContentLoaded" ,function(event){
    showLoading("#main-content");
	$ajax.sendGetRequest(
    homehtmlUrl,
    function (homehtml) {
			insertHtml("#main-content",homehtml);

	})    
});

qz.loadgkquiz =function(){
  showLoading("#main-content");
  $ajax.sendGetRequest(
  	gkquizUrl,
  	function(gkquiz){
  		insertHtml("#main-content",gkquiz);
  	})
}

qz.loadtechquiz =function(){
  showLoading("#main-content");
  $ajax.sendGetRequest(
  	techquizUrl,
  	function(techquiz){
  		insertHtml("#main-content",techquiz);
  	})
}

qz.loadaptquiz =function(){
  showLoading("#main-content");
  $ajax.sendGetRequest(
  	techquizUrl,
  	function(aptquiz){
  		insertHtml("#main-content",aptquiz);
  	})
}

global.$qz=qz;


})(window); 
