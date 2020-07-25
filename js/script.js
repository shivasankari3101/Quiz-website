(function (global){

	var homehtmlUrl="snippets/home-snippet.html";

	var insertHtml = function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
		
	};

document.addEventListener("DOMContentloaded" ,function(event){
	$ajax.sendGetRequest(
    homehtmlUrl,
    function (homeHtml) {
			insertHtml("#main-content",homeHtml);

	});
     



});


})(window); 
