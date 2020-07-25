(function (global){

	var homehtmlUrl="snippets/home-snippet.html";

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

	$ajax.sendGetRequest(
    homehtmlUrl,
    function (homehtml) {
			insertHtml("#main-content",homehtml);

	})    
});


})(window); 
