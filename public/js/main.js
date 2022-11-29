const modalAluno = document.querySelector("#modalAluno");
const modalUser = document.querySelector("#modalUser");
const buttonM = document.querySelector("#mobile-fechar");
const navbar = document.querySelector("#menu");

let statsMenu = false;

//Modal Aluno

function abrirModalAluno() {
    modalAluno.classList.add("active");
	menu();
}

function fecharModalAluno() {
    modalAluno.classList.remove("active");
}

//Modal User

function abrirModalUser() {
    modalUser.classList.add("active");
    menu();
}

function fecharModalUser() {
    modalUser.classList.remove("active");

}

//Navbar

function menu() {
	if(statsMenu == false) {
		navbar.style.left = "0";
	}

	if(statsMenu == true) {
		navbar.style.left = "-100%";
	}

	statsMenu = !statsMenu
};

//Search

$(function(){
	$("#searchbar").keyup(function(){		
		var index = $(this).parent().index();
		var nth = "#tabela td:nth-child("+(index-7).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tabela tbody tr").show();

		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#searchbar").blur(function(){
		$(this).val("");
	});	
});



