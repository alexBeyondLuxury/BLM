(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		$(document).on("click", ".speaker__item--collapsed", function( event ) {
			$(".speaker__item").not(this).removeClass("speaker__item--expanded").addClass("speaker__item--collapsed");
			$(this).removeClass("speaker__item--collapsed").addClass("speaker__item--expanded");
				
		});
		
	    $(document).on('click','.c-btn', function() {
			$(this).closest(".speaker__item").removeClass("speaker__item--expanded").addClass("speaker__item--collapsed");
		});
		
		$(document).ready(function(){
			$('.header__hamburger').click(function(){
				console.log('clicked');
			$(this).toggleClass('header__hamburger__open');
			$('.header__nav ul').toggleClass('ul--appear');
			$('.header .header__nav').toggleClass('header__hamburger__open');
			});
		});
		
		const showButton = document.querySelectorAll('.readmore');
		const textBox = document.querySelector('.keynote__speaker__text');
		const speakerContainer = document.querySelector('.keynote__speaker');
		const speakerContainerFlipped = document.querySelector('.keynote__speaker--flipped');
		let active = 0;
		function textToggle(e) {
			console.log('button click');
			if (active) {
				e.target.parentNode.classList.remove('expandText');
				active = 0;
				this.classList.remove('buttonExpanded');
				e.target.parentNode.parentNode.classList.remove('contExpanded');
				this.innerHTML= '+';
				
			} else {
			e.target.parentNode.classList.add('expandText');
			active = 1;
			this.classList.add('buttonExpanded');
			e.target.parentNode.parentNode.classList.add('contExpanded');
			this.innerHTML= '&ndash;';
		}
	}
		showButton.forEach(el =>
			el.addEventListener('click', textToggle));

			
	/* POPUP CODE */
			/* Assign DOM to consts */
			const closeButton = document.querySelector('.signup__close');
			const signupBox = document.querySelector('.signup');
			const header = document.querySelector('.header');

			/* Closes Popup */
			function closePopup() {
				localStorage.setItem('dismissed', 'true');
				signupBox.classList.add('signup--hide');
				header.classList.remove('header--signup');
			}
			
			/* On page load, run the check storage function */
			window.onload = checkStorage();

			/* Checks local storage to see if user has dismissed the popup before */
			function checkStorage() {
				(localStorage.getItem('dismissed') === null) ? (signupBox.classList.remove('signup--hide'), header.classList.add('header--signup'))	
				: signupBox.classList.add('signup--hide');
			}
	
				/* Event Listener */
			closeButton.addEventListener('click', closePopup);
			signupBox.addEventListener('click', closePopup);

	});	
})(jQuery, this);

function otherSelected(nameSelect) {
	const field = document.getElementById('form_0094_fld_10');
	const other = document.getElementById("form_0094_fld_9-7").value;
	if (other == nameSelect.value) {
		field.classList.add('show_field');
	} else {
		field.classList.remove('show_field');
	}
}


$(document).on('click', '.ajax_button', function() {

		var that = $(this);
		var page = $(this).data('page'); //assigning data-page to var page
		var newPage = page+1;
		var ajaxurl = $(this).data('url'); //assigning data-url to var ajaxurl
		var postCount = $(this).data('postcount'); // Assigns the data-maxPage to var maxPage
		var postsDisplayed = newPage * 8;

		$.ajax({

			url : ajaxurl, //The url to the AJAX file
			type : 'post',
			data : {
				page : page,
				action : 'ajax_button', // what Javascript function that the PHP will call
			},
			error: function( response ) {
				console.log(response);
			},
			success : function( response ) {
				console.log('post count: ' + postCount);
				console.log('new page: ' + newPage);
				console.log('postsDisplayed: ' + postsDisplayed);
				if (postsDisplayed >= postCount) {
					$('.ajax_button').hide();
				}
				if (response == '' ) {
					console.log('no more posts');
					$('.ajax_button').hide();
				} else {
					that.data('page', newPage);
					$('.speaker__items--previous').append( response );
				}
				$( document.body ).trigger( 'post-load' );//Triggers fancybox to search new data for fancybox class tags
			}

		});

	});