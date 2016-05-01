window.onload = function() { 

	"use strict";
    
	var defaultTab = document.getElementById("defaultTab"),
		popup = document.getElementById("popup"),
		popupBgr = document.getElementById("popup__bgr");

	//Show popup and background when clicking Default Tab
	defaultTab.onclick = function showBgr() {

		popupBgr.style.display = "block";
		
		setTimeout( function showPopup() {
  			popup.style.display = "block";
		}, 300);
	
	};

	//Fold the popup window
	function foldPopup(){

			name.value = "";
			note.value = "";

			popup.style.display = "none";
	  		popupBgr.style.display = "none";

		}

	//Create a new Tab + Content
	var tabs = document.querySelector("#tabs"),
		defaultDiv = document.querySelector("#defaultDiv"),
		ok = document.querySelector("#ok"),
		cancel = document.querySelector("#cancel"),
		name = document.querySelector("#name"),
		note = document.querySelector("#note"),
		activeTab = document.getElementsByClassName("tab active"),
		activeDiv = document.getElementsByClassName("content active");

	//OK button onclick
	ok.onclick = function createTab(){

		var newTab = document.createElement("li"),
			tabSpan = document.createElement("span"),
			newContent = document.createElement("div");

			tabSpan.addEventListener("click", removeTab([newTab, newContent]));
			newTab.addEventListener("click", makeActive([newTab, newContent]));

		activeTab.length ? activeTab[0].classList.remove("active") : 0;
		activeDiv.length ? activeDiv[0].classList.remove("active") : 0;



		newTab.innerHTML = name.value;

		if (newTab.innerHTML === "") {
			alert ("Gimme a name!");
		}
	
		else {

			tabs.appendChild(newTab);
			newTab.classList.add("tab", "item", "active", "animated", "fadeIn");
			newTab.parentNode.insertBefore(newTab, newTab.nextSibling);

			tabSpan.innerHTML = "&#10005;";
			newTab.appendChild(tabSpan);
			tabSpan.classList.add("removeTab");

			defaultDiv.appendChild(newContent);
			newContent.innerHTML = note.value;
			newContent.classList.add("content", "item", "active", "animated", "fadeIn");

		}

		foldPopup();
	};


	//Cancel button or background onclick
	cancel.onclick = foldPopup;
	popupBgr.onclick = foldPopup;

	//Clicking on a tab / making it Active
	function makeActive(nodeArr) {
	     return function() {

	     	activeTab.length ? activeTab[0].classList.remove("active") : 0;
			activeDiv.length ? activeDiv[0].classList.remove("active") : 0;

	        nodeArr.forEach(function(el) {
 	           	el.classList.add("active");
	        });
	     };
	 }

	//Remove tab
	function removeTab(nodeArr) {
		return function(){
			nodeArr.forEach(function(el) {
                el.parentNode && el.parentNode.removeChild(el);
       		 });	

			setTimeout( function() {
		        if(tabs.children.length && defaultDiv.children.length) {
                    tabs.querySelector("*").classList.add("active");
                    defaultDiv.querySelector("*").classList.add("active");
                }    
		    }, 0);
	    };
	}

};



