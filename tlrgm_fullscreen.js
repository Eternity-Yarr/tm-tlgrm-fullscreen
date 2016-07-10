// ==UserScript==
// @name         Telegram fullscreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.telegram.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var csses = document.styleSheets;

    function filter(needle) {
        return function(rule) { return rule.selectorText == needle; };
    }

    var css = Object.keys(csses).map(function(css) { return csses[css]; }).filter(function(css){ return css.href == "https://web.telegram.org/css/desktop.css"; })[0];

    var rules = Object.keys(css.rules).map(function(rule) { return css.rules[rule]; });

    rules.filter(filter(".im_message_wrap"))[0].style.maxWidth = "100%";
    rules.filter(filter(".im_page_wrap"))[0].style.maxWidth = "100%";
    rules.filter(filter(".tg_head_split"))[0].style.maxWidth = "100%";
    rules.filter(filter(".im_send_panel_wrap"))[0].style.maxWidth = "100%";
    rules.filter(filter(".im_send_form"))[0].style.maxWidth = "70%";

})();