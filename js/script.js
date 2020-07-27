(function (global){
	qz={};

	var homehtmlUrl="snippets/home-snippet.html";
	var gkquizUrl="snippets/gkquiz-snippet.html";
	var techquizUrl="snippets/techquiz-snippet.html";
	var aptquizUrl="snippets/aptquiz-snippet.html";
	var resultUrl="snippets/result-snippet.html"

	var insertHtml = function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
		
	};

	var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
  };

  var insertProperty = function(string,propName,propValue){
  	var propToReplace ="{{" +propName + "}}";
  	var string =string
  	        .replace(new RegExp(propToReplace,"g"),propValue);
  	return string;
  }

  function evaluategk(gkquiz){
	mark=0;
    var one = document.getElementsByName("1");
    if(one[0].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var two = document.getElementsByName("2");
    if(two[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var three= document.getElementsByName("3");
    if(three[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var four = document.getElementsByName("4");
    if(four[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var five = document.getElementsByName("5");
    if(five[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    return mark;
}

function evaluatetech(techquiz){
	mark=0;
    var one = document.getElementsByName("1");
    if(one[2].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var two = document.getElementsByName("2");
    if(two[2].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var three= document.getElementsByName("3");
    if(three[1].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var four = document.getElementsByName("4");
    if(four[0].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var five = document.getElementsByName("5");
    if(five[1].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    return mark;
}


function evaluateapt(aptquiz){
	mark=0;
    var one = document.getElementsByName("1");
    if(one[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var two = document.getElementsByName("2");
    if(two[1].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var three= document.getElementsByName("3");
    if(three[2].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var four = document.getElementsByName("4");
    if(four[3].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    var five = document.getElementsByName("5");
    if(five[1].checked){
    	mark+=1;
    }
    else{
    	mark+=0;
    }

    return mark;
}




document.addEventListener("DOMContentLoaded" ,function(event){
    
	$ajax.sendGetRequest(
    homehtmlUrl,
    function (homehtml) {
			insertHtml("#main-content",homehtml);

	})    
});

qz.loadgkquiz =function(){
 
  $ajax.sendGetRequest(
  	gkquizUrl,
  	function(gkquiz){
  		insertHtml("#main-content",gkquiz);
  	})
}

qz.resultofgk =function(){
$ajax.sendGetRequest(
	gkquizUrl,
	function(gkquiz){

	$ajax.sendGetRequest(
		resultUrl,
		function(result){
			//insertHtml("#main-content",result);
			var score = evaluategk(gkquiz);
			var string1,string2,string3;
			if(score>3){
				string1=insertProperty(result,"compliment","CONGRATULATIONS!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score==3){
				string1=insertProperty(result,"compliment","GOOD!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score<3){
				string1=insertProperty(result,"compliment","TRY AGAIN");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}


		})
})
} 



qz.loadtechquiz =function(){
 
  $ajax.sendGetRequest(
  	techquizUrl,
  	function(techquiz){
  		insertHtml("#main-content",techquiz);
  	})
}

qz.resultoftech =function(){
$ajax.sendGetRequest(
	techquizUrl,
	function(techquiz){

	$ajax.sendGetRequest(
		resultUrl,
		function(result){
			//insertHtml("#main-content",result);
			var score = evaluatetech(techquiz);
			var string1,string2,string3;
			if(score>3){
				string1=insertProperty(result,"compliment","CONGRATULATIONS!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score==3){
				string1=insertProperty(result,"compliment","GOOD!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score<3){
				string1=insertProperty(result,"compliment","TRY AGAIN");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}


		})
})
} 



qz.loadaptquiz =function(){
  
  $ajax.sendGetRequest(
  	aptquizUrl,
  	function(aptquiz){
  		insertHtml("#main-content",aptquiz);
  	})
}

qz.resultofapt =function(){
$ajax.sendGetRequest(
	aptquizUrl,
	function(aptquiz){

	$ajax.sendGetRequest(
		resultUrl,
		function(result){
			//insertHtml("#main-content",result);
			var score = evaluateapt(aptquiz);
			var string1,string2,string3;
			if(score>3){
				string1=insertProperty(result,"compliment","CONGRATULATIONS!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score==3){
				string1=insertProperty(result,"compliment","GOOD!!");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}

			if(score<3){
				string1=insertProperty(result,"compliment","TRY AGAIN");
				string2=insertProperty(string1,"mark",score);
				string3=insertProperty(string2,"stream","GENERAL KNOWLEDGE");
                insertHtml("#main-content",string3);
			}


		})
})
} 

global.$qz=qz;


})(window); 
