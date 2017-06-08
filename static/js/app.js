/*jshint esnext: true */
/*jshint devel: true */
/*jshint node: true */
/*jshint browser: true */
/*jshint jquery: true */

function switchMenu(clickedId) {
		console.log(clickedId+" megnyomva...");
		// jquery selector: minden html elemet kiválaszt, amin rajta van content class
		$(".content").css('display', 'none');
		$("#"+clickedId+".content").css('display', 'unset');

		$(".menu-item").removeClass("btn-primary");

		$("#"+clickedId+".menu-item").removeClass("btn-secondary");
		$("#"+clickedId+".menu-item").addClass("btn-primary");
}
function getToday () {
	let now = new Date();
	//let testDate = new Date("January 23, 2014 11:13:00");

	// levágjuk az utolsó két elemet a stringből és elé írunk egy 0 karaktert
	let day = ("0" + now.getDate()).slice(-2);
	// a január 0-val kezdődik, ezért hozzá kell adni egyet
	console.log("day értéke "+now.getDate());
	let month = ("0" + (now.getMonth() + 1)).slice(-2);
	let today = now.getFullYear()+"."+(month)+"."+(day);
	return today;
}

function addMunkanap() {
	let lastid = parseInt($('.new_munkanap:last').attr('id'));
	if (isNaN(lastid)) {
		lastid = 0;
	}
	mainap = getToday();
	$('#munkanapItems').append(`
		<div id="`+(lastid+1)+`" class="new_munkanap row">
						<button id="`+(lastid+1)+`" class="remove btn-danger" onclick="removeMunkanap(this.id)">-</button>
						<div class="col-xs-6 col-sm-2">
							<input id="`+(lastid+1)+`" type="text" placeholder="datum" class="datepicker datum_mezo form-control">
						</div>
						<div class="col-xs-6 col-sm-2">
							<input id="`+(lastid+1)+`" type="number" min="0.5"  max="12" step="0.5" placeholder="ora" class="munkaora form-control">
						</div>
						<div class="col-xs-12 col-sm-6">
							<textarea id="`+(lastid+1)+`" class="form-control" rows="3" placeholder="megjegyzés"></textarea>
						</div>
					</div>
		`);
	// bootstrap-datepicker modul:
	// http://bootstrap-datepicker.readthedocs.io/en/latest/index.html
	$('.datepicker').datepicker({
		language: 'hu',
		autoclose: 'true',
		todayBtn: 'true',
		todayHighlight: 'true'
	});
} //addMunkanap

let new_munkanaps = [];
// [{id:1, datePiced:"2017.04.03",workedHour:5, comment:"mycomment",okToSend:true},{},{}...]
function collectMunkanaps () {
	//TODO összegyűjteni a munkanapokat egy objecteket tartalmazó tömbbe
	console.log("munkanapok összegyűjtése...");
}

function removeMunkanap(munkanapToRemove) {
	$("#"+munkanapToRemove+".new_munkanap").remove();
}

function sendForm() {
	console.log("Sending form...");
	collectMunkanaps();
	//TODO elküldeni az adatokat a szervernek
}

$(document).on('blur', '.munkaora' , function() {
	// amit ide írunk, az akkor fut le, ha a munkaóra mezőt elhagyja a user
	munkaoraMezo = parseFloat($(this).val());
	if (Number.isFinite(munkaoraMezo)) {
		if (munkaoraMezo > 8) {
			$(this).val('8');
		} else if (munkaoraMezo < 0) {
			$(this).val('0');
		}
	} else {
		$(this).val('0');
	}
});

$(document).ready(function () {
	// ez akkor fut le, miután betöltődik a weboldal a böngészőbe
	addMunkanap();
});

$(function () {
	$("input[type='number']").on("click", function() {
		$(this).focus();
	});
});