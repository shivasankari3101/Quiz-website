(function(global){
  var ajax={};
   function getRequestObject(){
    if(global.XMLHttpRequest){
      return(new XMLHttpRequest());
    }
    else if(global.ActiveObject){
      return(new ActiveObject("Microsoft.XMLHTTP"));
    }
    else{
      global.alert("Ajax is not supported");
      return(null);
    }
   }

   ajax.sendGetRequest =
         function(requestUrl,responseHandler){
          var request=getRequestObject();
          request.onreadystatechange =
            function(){
              handleResponse(request,responseHandler);
            };
            request.open("GET",requestUrl,true);
            request.send(null);
         };


    function handleResponse(request,responseHandler){
      if((request.readyState == 4)&&(request.status==200)){
        responseHandler(request.responseText);
     }
   }
    global.$ajax=ajax;
})(window);