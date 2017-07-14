$(window).load(function() {
	$("#btn_entrar_a").animate({top:-25},410);
	$("#btn_entrar_a").animate({top:0},410);
	$("#btn_entrar_a").animate({top:-25},410);
	$("#btn_entrar_a").animate({top:0},410);
	$("#btn_entrar_a").animate({top:-25},410);
	$("#btn_entrar_a").animate({top:0},410);
	$("#btn_entrar_a").animate({top:-25},410);
	$("#btn_entrar_a").animate({top:0},410);
}); 




function cargasComun() {
	$("header").load("html/header.html");
	$("footer").load("html/footer.html");
	$(".cont_general").css({display:"none"}).fadeIn("slow");
}


function preInicio() {

	$( "#btn_entrar_a" ).click(function(event) {
	  $("#pre_inicio").slideUp();
	  $("#bodyIndex").css({
	  	"overflow":"auto"
	  });
	});
}

function ponentes()
{
	$("#mas_info1").click(function(){
		$(".pnts1").hide(500);
		$("#pnt_info1").fadeIn(500);
		$("#pnt_info1").animate({top:-25},250);
		$("#pnt_info1").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info1").slideUp(500);
		$(".pnts1").slideDown(500);			
	});

	$("#mas_info2").click(function(){
		$(".pnts1").hide(500);
		$("#pnt_info2").fadeIn(500);
		$("#pnt_info2").animate({top:-25},250);
		$("#pnt_info2").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info2").slideUp(500);
		$(".pnts1").slideDown(500);			
	});

	$("#mas_info3").click(function(){
		$(".pnts1").hide(500);
		$("#pnt_info3").fadeIn(500);
		$("#pnt_info3").animate({top:-25},250);
		$("#pnt_info3").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info3").slideUp(500);
		$(".pnts1").slideDown(500);			
	});

	// ---
	$("#mas_info4").click(function(){
		$(".pnts2").hide(500);
		$("#pnt_info4").fadeIn(500);
		$("#pnt_info4").animate({top:-25},250);
		$("#pnt_info4").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info4").slideUp(500);
		$(".pnts2").slideDown(500);			
	});

	$("#mas_info5").click(function(){
		$(".pnts2").hide(500);
		$("#pnt_info5").fadeIn(500);
		$("#pnt_info5").animate({top:-25},250);
		$("#pnt_info5").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info5").slideUp(500);
		$(".pnts2").slideDown(500);			
	});

	$("#mas_info6").click(function(){
		$(".pnts2").hide(500);
		$("#pnt_info6").fadeIn(500);
		$("#pnt_info6").animate({top:-25},250);
		$("#pnt_info6").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info6").slideUp(500);
		$(".pnts2").slideDown(500);			
	});

	// ---
	$("#mas_info7").click(function(){
		$(".pnts3").hide(500);
		$("#pnt_info7").fadeIn(500);
		$("#pnt_info7").animate({top:-25},250);
		$("#pnt_info7").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info7").slideUp(500);
		$(".pnts3").slideDown(500);			
	});

	$("#mas_info8").click(function(){
		$(".pnts3").hide(500);
		$("#pnt_info8").fadeIn(500);
		$("#pnt_info8").animate({top:-25},250);
		$("#pnt_info8").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info8").slideUp(500);
		$(".pnts3").slideDown(500);			
	});

	$("#mas_info9").click(function(){
		$(".pnts3").hide(500);
		$("#pnt_info9").fadeIn(500);
		$("#pnt_info9").animate({top:-25},250);
		$("#pnt_info9").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info9").slideUp(500);
		$(".pnts3").slideDown(500);			
	});

	// ---
	$("#mas_info10").click(function(){
		$(".pnts4").hide(500);
		$("#pnt_info10").fadeIn(500);
		$("#pnt_info10").animate({top:-25},250);
		$("#pnt_info10").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info10").slideUp(500);
		$(".pnts4").slideDown(500);			
	});

	$("#mas_info11").click(function(){
		$(".pnts4").hide(500);
		$("#pnt_info11").fadeIn(500);
		$("#pnt_info11").animate({top:-25},250);
		$("#pnt_info11").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info11").slideUp(500);
		$(".pnts4").slideDown(500);			
	});

	$("#mas_info12").click(function(){
		$(".pnts4").hide(500);
		$("#pnt_info12").fadeIn(500);
		$("#pnt_info12").animate({top:-25},250);
		$("#pnt_info12").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info12").slideUp(500);
		$(".pnts4").slideDown(500);			
	});

	// ---
	$("#mas_info13").click(function(){
		$(".pnts5").hide(500);
		$("#pnt_info13").fadeIn(500);
		$("#pnt_info13").animate({top:-25},250);
		$("#pnt_info13").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info13").slideUp(500);
		$(".pnts5").slideDown(500);			
	});

	$("#mas_info14").click(function(){
		$(".pnts5").hide(500);
		$("#pnt_info14").fadeIn(500);
		$("#pnt_info14").animate({top:-25},250);
		$("#pnt_info14").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info14").slideUp(500);
		$(".pnts5").slideDown(500);			
	});

	$("#mas_info15").click(function(){
		$(".pnts5").hide(500);
		$("#pnt_info15").fadeIn(500);
		$("#pnt_info15").animate({top:-25},250);
		$("#pnt_info15").animate({top:0},250);		
	});
	$(".close_pnt").click(function(){
		$("#pnt_info15").slideUp(500);
		$(".pnts5").slideDown(500);			
	});
}

function scrollPonentes()
{

	$(window).scroll(function(){
		if ($(window).scrollTop() > 1550){
			$("#sec_hosp_info_art").css({
				"position":"fixed",
				"width":"330px"
			})
		}else{
			$("#sec_hosp_info_art").css({
				"position":"absolute"
			})
		};


		var btn_costos_w=($(window).width()<768)?true:false;
		var btn_costos_h=($(window).scrollTop()>1200)?true:false;

		if (btn_costos_w && btn_costos_h){
			$(".btn_aside").css({
				"display":"block"
			});
		}else{
			$(".btn_aside").css({
				"display":"none"
			});
		};


	});
}

function click_costos() {

$(".btn_aside").on("click",function(){
		$("#btn_info").toggle();
	});
}


function cargarEfectos()
{
	preInicio();
	cargasComun();
	ponentes();
	scrollPonentes();
	click_costos();
}
