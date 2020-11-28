// ==UserScript==
// @name			No YouTube Chat
// @name:fr			No YouTube Chat
// @description		Removes live chat from Youtube lives and videos
// @description:fr	Supprime le chat des videos et lives YouTube
// @author			PsychoPatate
// @license			GPL-3.0
// @namespace		https://github.com/PsychoPatate
// @version			1.2
// @source			https://github.com/PsychoPatate/No-YouTube-Chat
// @iconURL			https://raw.githubusercontent.com/PsychoPatate/No-YouTube-Chat/main/icon128.png
// @icon64URL		https://raw.githubusercontent.com/PsychoPatate/No-YouTube-Chat/main/icon64.png
// @updateURL		https://raw.githubusercontent.com/PsychoPatate/No-YouTube-Chat/main/No-YT-Chat.js
// @downloadURL		https://raw.githubusercontent.com/PsychoPatate/No-YouTube-Chat/main/No-YT-Chat.js
// @supportURL		https://github.com/PsychoPatate/No-YouTube-Chat/issues
// @require			https://code.jquery.com/jquery-3.5.1.min.js
// @run-at 			document-end
// @noframes
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
