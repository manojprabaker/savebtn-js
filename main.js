let shareBtn=document.getElementById("save");
let shrTray=document.getElementsByClassName("share-tray");
let unSaveBtn=document.getElementById("unsave");

shareBtn.addEventListener("click",function(){
	this.classList.toggle("saved");
	console.log("fsg");
	shrTray[0].classList.toggle("active");
	unSaveBtn.classList.toggle("saved");
	setTimeout(hide,2000);
	function hide(){
		shrTray[0].classList.toggle("active");
	}
});

unSaveBtn.addEventListener("click",function(){
	this.classList.toggle("saved");
	shareBtn.classList.toggle("saved");
	
})

