// ==UserScript==
// @name			No YT Chat
// @description		Removes live chat from Youtube lives and videos
// @description:fr	Supprime le chat des videos et lives YouTube
// @author			PsychoPatate
// @namespace		https://github.com/PsychoPatate
// @version			1.0
// @source			https://github.com/PsychoPatate/No-YT-Chat
// @iconURL			https://raw.githubusercontent.com/PsychoPatate/No-YT-Chat/main/icon128.png
// @icon64URL		https://raw.githubusercontent.com/PsychoPatate/No-YT-Chat/main/icon64.png
// @updateURL		https://raw.githubusercontent.com/PsychoPatate/No-YT-Chat/main/No-YT-Chat.js
// @downloadURL		https://raw.githubusercontent.com/PsychoPatate/No-YT-Chat/main/No-YT-Chat.js
// @supportURL		https://github.com/PsychoPatate/No-YT-Chat/issues
// @require			https://code.jquery.com/jquery-3.5.1.min.js
// @match			https://www.youtube.com/watch*
// ==/UserScript==

(function() {
	'use strict';
	var checkExist = setInterval(function() {
	   if ($('#chat').length) {
		  $('#chat').remove();
		  clearInterval(checkExist);
	   }
	}, 100);
})();
