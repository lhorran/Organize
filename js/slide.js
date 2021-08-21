var tempo, img_atual, max_img, tempo_troca;
var slider = document.getElementById("slide");
var load = document.getElementById("barra");
var tx1 = document.getElementById("tx1");
var tx2 = document.getElementById("tx2");
var tx3 = document.getElementById("tx3");
var cont = 1;
var position = 1;
var imgs = [];
function preload(){
	for (var i = 0; i < 2; i++) {
		imgs[i] = new Image();
		imgs[i].src = "img/slide-fundo" + position + ".png";
		position++;
	}
}
function carregar(img){
	slider.style.backgroundImage = "url('"+  imgs[img].src + "')";
	if (cont == 1) {
		tx1.style.opacity="1";
		tx2.style.opacity="0";
		tx3.style.opacity="0";
		}
	else if(cont == 2){
		tx1.style.opacity="0";
		tx2.style.opacity="1";
		tx3.style.opacity="0";
	}
	else if(cont == 3){
		tx3.style.opacity="1";
		tx3.style.top="-90px"
	}
	cont ++;
	if (cont > 3) {
		cont = 1;
	}

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
	if (tempo_troca >= 300) {
		troca(1);
	}
	tempo = tempo_troca/3;
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
