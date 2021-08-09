var tempo, img_atual, max_img, tempo_troca;
var load = document.getElementById("barra-carregar");
var slider = document.getElementById("slide");
var position = 1;
var imgs = [];
var item1 = document.getElementById("teste");
var cont = 1;

document.write();

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
	 	item1.style.top= "0px";
 		item1.style.opacity="1";
		item1.classList.add("teste1");
	}
	else if(cont == 2){
		item1.style.top= "-30px";
		item1.style.opacity="0";
		item1.classList.add("teste1");
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
