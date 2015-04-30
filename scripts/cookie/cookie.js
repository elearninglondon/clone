// check if the cookie has already been set, if not display the notice
cookieValue = $.cookie('EMhasVisited');
if(cookieValue != 'Yes') {
$("<div id='cookieNotice'><h2>Cookies</h2><p>We use cookies to improve your experience of our website. If you want to find out more, see our <a href='http://www.celtelearning.org/terms-and-privacy'>Privacy Policy</a>. If you're OK with that, click: <a href='#' class='cookieButton' onClick='hideCookieNotice()'>I agree</a></p></div>").appendTo("div#cookieWrapper");
$('#cookieNotice').hide().fadeIn(2000);
} 
// if the user removes the cookie notice hide the div and set a cookie to remember that decision
function hideCookieNotice(){
	$.cookie('EMhasVisited', 'Yes', { expires: 1000, path: '/', domain: 'celtelearning.org'});
	document.getElementById("cookieNotice").className += "hide";
}