$(document).ready(function(){
	
	//**********************    ~MODEL   ***********************
	current_view = 1;  // 1 means main page,  2 means contact
	
	
	
	
	
	
	
	
	//**********************   ~VIEW   ***********************
	
	function update_main_field_main_page(){
		text = '';
		
		//text += 'strona glowna';
		
		text += '<div id="main_field_main_page_text_part_01">';
		text += 'Nasza firma od wielu lat zajmuje sie czymś. Zaczynaliśmy od kilku osób, ale teraz mamy solidny zespół składający się z ponad 20 pracowników. Ukończylismy z sukcesem wiele projektów, o czym mogą świadczyć rekomendacje pozostawione przez naszych klientów.';
		text += '</div>';
		
		text += '<div id="main_field_main_page_text_part_02">';
		text += 'Nasz zespół składa się z doświadczonych pracowników, którzy z pasją podejmują nowe zadania. Możemy sie pochwycić między innymi wykonaniem czegoś super skomplikowanego.';
		text += '</div>';
		
		text += '<div id="main_field_main_page_text_part_03">';
		text += 'Współpraca z nami to gwarancja sukcesu!';
		text += '</div>';
		
		
		
		$('div#main_field').html(text);
		//console.log("done updating main field with main page text");
	};
	
	
	function update_main_field_projects(){
		text = '';
		
		//text += 'strona glowna';
		
		text += '<div class="main_field_project" id="main_field_projects_text_part_01">';
		text += '<span class="projects_span_header">Projekt A</span>';
		text += '<br>';
		text += '<div class="projects_div_description">Opis projektu A</div>';
		text += '<br>';
		text += '</div>';
		
		
		text += '<div class="main_field_project" id="main_field_projects_text_part_02">';
		text += '<span class="projects_span_header">Projekt B</span>';
		text += '<br>';
		text += '<div class="projects_div_description">Opis projektu B</div>';
		text += '<br>';
		text += '</div>';
		
		
		text += '<div class="main_field_project" id="main_field_projects_text_part_03">';
		text += '<span class="projects_span_header">Projekt C</span>';
		text += '<br>';
		text += '<div class="projects_div_description">Opis projektu C</div>';
		text += '<br>';
		text += '</div>';
		
		
		
		$('div#main_field').html(text);
		//console.log("done updating main field with projects text");
	};
	
	
	function update_main_field_contact(){
		text = '';
		
		//text += 'dane kontaktowe';
		
		
		
		text += '<div class="main_field_contact_page_header" id="main_field_contact_page_text_part_01">';
		text += 'Adres:';
		text += '</div>';
		
		
		text += '<div class="main_field_contact_page_text" id="main_field_contact_page_text_part_02">';
		text += 'Moja firma';
		text += '<br>';
		text += 'ul. Moja ulica 1';
		text += '<br>';
		text += '00-000 Miasto';
		text += '</div>';
		
		
		text += '<div class="main_field_contact_page_header" id="main_field_contact_page_text_part_03">';
		text += 'Telefon:';
		text += '</div>';
		
		
		text += '<div class="main_field_contact_page_text" id="main_field_contact_page_text_part_04">';
		text += '+48 600 900 600';
		text += '</div>';
		
		
		text += '<div class="main_field_contact_page_header" id="main_field_contact_page_text_part_05">';
		text += 'E-mail:';
		text += '</div>';
		
		
		text += '<div class="main_field_contact_page_text" id="main_field_contact_page_text_part_06">';
		text += 'mojafirma@mojafirma.com';
		text += '</div>';
		
		
		
		text += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.4483422052515!2d20.99622430060544!3d52.208924975510094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEyJzMyLjEiTiAyMMKwNTknNDguOCJF!5e0!3m2!1spl!2spl!4v1594252361989!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
		
		
		
		
		
		$('div#main_field').html(text);
		//console.log("done updating main field with contact page text");
	};
	
	
	
	
	
	
	//**********************   ~CONTROLLER   ***********************
	
	
	update_main_field_main_page();  // calling function so when opening page it will load text from main page
	
	
	$("a#menu_main_page_button").click(function(){
		//alert("Wcisnieto przycisk");
		//console.log("main page button clicked");
		if( current_view != 1 ){
			current_view = 1;
			update_main_field_main_page();
		}		
	});
	
	
	$("a#menu_projects_button").click(function(){
		//alert("Wcisnieto przycisk");
		//console.log("project button clicked");
		if( current_view != 2 ){
			current_view = 2;
			update_main_field_projects();			
		}		
	});
	
	
	$("a#menu_contact_button").click(function(){
		//alert("Wcisnieto przycisk");
		//console.log("contact button clicked");
		if( current_view != 3 ){
			current_view = 3;
			update_main_field_contact();			
		}		
	});
	
	
	
	
	
});



