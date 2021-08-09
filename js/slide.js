var tempo, img_atual, max_img, tempo_troca;
var load = document.getElementById("barra-carregar");
var slider = document.getElementById("slide");
var position = 1;
var imgs = [];
var item = [];
var cont = 1;
item[0] = document.getElementById("animacao-obj1");
item[1] = document.getElementById("animacao-obj2");
item[2] = document.getElementById("animacao-obj3");

function preload(){
	for (var i = 0; i < 2; i++) {
		imgs[i] = new Image();
		imgs[i].src = "img/SlideC" + position + ".png";
		position++;
	}
}
function carregar(img){
	slider.style.backgroundImage = "url('"+  imgs[img].src + "')";
	 if(cont == 1){
	 	item[0].style.top= " 30px";
 		item[0].style.opacity="1";
 		item[0].style.transform="rotateZ(180deg)";
		item[0].classList.add("obj-o");

		item[1].style.top= " 30px";
 		item[1].style.opacity="1";
 		item[1].style.transform="rotateZ(180deg)";
		item[1].classList.add("obj-o");

		item[2].style.top= "90px";
 		item[2].style.opacity="0";
 		item[2].style.transform="tranlateY(-30px)";
		item[2].classList.add("obj-o");
	}
	else if(cont == 2){
		item[0].style.transform="rotateZ(0deg)";
		item[0].style.top= "0px";
		item[0].style.opacity="0";
		item[0].classList.add("obj1");

		item[1].style.transform="rotateZ(0deg)";
		item[1].style.top= "0px";
		item[1].style.opacity="0";
		item[1].classList.add("obj1");

		item[2].style.transform="tranlateY(0px)";
		item[2].style.top= "60px";
		item[2].style.opacity="1";
		item[2].classList.add("obj1");
	}
	cont++;
	if (cont > 2 ) { cont = 1;}
}

function troca(diretorio){
	tempo_troca = 0;
	img_atual += diretorio;

	if (img_atual > max_img){
		img_atual = 0;
	}
	else if (img_atual < 0){
		document.write("teste");
		img_atual = max_img;
	}

	carregar (img_atual);

}

function anima() {
	tempo_troca++;
	if (tempo_troca >= 400) {
		troca(1);
	}
	tempo = tempo_troca/4;
	load.style.width = tempo + "%";
	window.requestAnimationFrame(anima);
}

function iniciar() {
	preload();
	img_atual = 0;
	max_img = 1;
	carregar(img_atual);
	tempo_troca = 0;
	anima();
 } 


 iniciar();
