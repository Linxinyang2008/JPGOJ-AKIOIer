// ==UserScript==
// @name         JPGOJ
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  jpgoj
// @author       Lin.x.y
// @match        oj.jpgzx.com:8080/problems
// @match        oj.jpgzx.com:8080/problems?*
// @match        10.20.252.249/problems?*
// @match        10.20.252.249/problems
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

       //     var o = document.getElementsByTagName("i")[0];
      //      o.setAttribute("class","checkmark icon");
        //    //o.innerHTML = "checkmark icon"

      var vidx;
      for(vidx = 14; vidx <= 96; ++vidx){
            document.getElementsByTagName("i")[vidx].setAttribute("class","checkmark icon");
      }
      for(vidx = 0; vidx <= 214; ++ vidx){
          document.getElementsByTagName("span")[vidx].setAttribute("class","status accepted");
      }



})();
