// ==UserScript==
// @name		No YT Chat
// @description	Removes live chat from Youtube lives and videos
// @author		PsychoPatate
// @namespace	https://github.com/PsychoPatate
// @version		1.0
// @source		https://github.com/PsychoPatate/BLABLAPROJET
// @iconURL		https://github.com/PsychoPatate/BLABLAPROJET/icon.png
// @icon64URL	https://github.com/PsychoPatate/BLABLAPROJET/icon.png
// @updateURL	https://github.com/PsychoPatate/BLABLAPROJET/src.js
// @downloadURL	https://github.com/PsychoPatate/BLABLAPROJET/src.js
// @supportURL	https://github.com/PsychoPatate/BLABLAPROJET/issues
// @require		https://code.jquery.com/jquery-3.5.1.min.js
// @match		https://www.youtube.com/watch*
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
