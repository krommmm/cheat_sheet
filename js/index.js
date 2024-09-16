var cliquables = document.querySelectorAll('.cliquable');
var modals = document.querySelectorAll('.modal');
var closeBtns = document.querySelectorAll('.close');

Array.from(cliquables).map((cliquable) => {
	cliquable.addEventListener('click', function () {
		cliquable.nextSibling.nextSibling.style.display = 'block';
	});
});

Array.from(closeBtns).map((closeBtn) => {
	closeBtn.addEventListener('click', function () {
		closeBtn.parentNode.parentNode.style.display = 'none'; //.style.display="none";// modals.style.display = 'none';
	});
});

Array.from(modals).map((modal) => {
	modal.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	});
});

window.addEventListener('scroll', () => {
	let ascensseur = document.querySelector('.ascensseur');
	if (window.scrollY > 700) {
		ascensseur.style.opacity = '1';
		ascensseur.style.transform="scale(1)";
	} else if (window.scrollY < 700) {
		ascensseur.style.transform="scale(0)";
	}
});

let inversed = true;
document.addEventListener("click",(e)=>{
if(e.target.classList.contains("btn-inverse")){

	let container = e.target.closest(".titres");
	let cliquableElements = container.querySelectorAll(".cliquable, .cliquable_sterile");
	cliquableElements.forEach((element)=>{
		
		if(inversed){
			element.querySelector(".name").style.display="flex";
			element.querySelector(".description").style.display="none";
		}else{
			element.querySelector(".description").style.display="flex";
			element.querySelector(".name").style.display="none";
		}
		
	});
	inversed = !inversed;
}
});