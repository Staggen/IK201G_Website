$(document).ready(() => {
    // Start of global variable(s)
    var pageJump=false; // Used for full page slide animations
    // End of global variable(s)

    // Setting page-to-top on load
    window.addEventListener("load",function(evt){
		evt.preventDefault();
		$('html,body').animate({
			scrollTop:$('.wrapper').offset().top
		}, 10); // Make it short so it appears it's not an animation at all.
    });
    // End of page-to-top on load

    // Slide in nav on page load
    $("nav").css({
        "transform":"rotate(-90deg) translate(-100%, 0)",
        "-webkit-transform":"rotate(-90deg) translate(-100%, 0)",
        "-moz-transform":"rotate(-90deg) translate(-100%, 0)",
        "transform-origin":"top left 0",
        "-webkit-transform-origin":"top left 0",
        "-moz-transform-origin":"top left 0",
        "transition":"1.5s",
        "transition-delay":"1s" // Waits one second before starting the transition
    });
    // End of nav slide

    // Start of event(s)
    $('nav ul li a').click(function(evt){ // Swapping page on nav click
        pageJump = true;
        evt.preventDefault(); // Stop normal response to scrolling

        $('body,html').animate({ // Full page slide animation
            scrollTop: $(this.hash).offset().top // The offset() method set or returns the offset coordinates for the selected elements, relative to the document. The .top at the end makes it return the coordinates of the top of the selected element
        }, {
            duration: 1000,
            complete: () => { // When animation complete: => do function
                pageJump = false;
            }
        });
        var menuChoice = $(this).closest("li").index();
        switchFunction(menuChoice); // Making the nav underline move
    });
    // End of event(s)

    // Start of function(s)
    function scrollHandler(pageId) { // Stopping normal scrolling and making it move entire pages
        var page = $('#' + pageId);
        var pageStart = page.offset().top; // The offset() method set or returns the offset coordinates for the selected elements, relative to the document. The .top at the end makes it return the coordinates of the top of the selected element

        function scrollToPage(){ // Function for actual scrolling animation
            pageJump = true;
            $('html, body').animate({ // Full page slide animation
                scrollTop: pageStart
            }, {
                duration: 1000,
                complete: () => { // When animation complete: => do function
                    pageJump = false;
                }
            });
            switchFunction(page[0].id); // Making the nav underline move as you scroll
		}
		
        window.addEventListener('wheel', function(event) { // Window event listener for scrolling
            var viewStart = $(window).scrollTop(); // The scrollTop() method sets or returns the vertical scrollbar position for the selected elements
            if(!pageJump){ // If it's not already scrolling
                var pageHeight = page.height(); // The height() method sets or returns the height of the selected elements.
                var pageStopPortion = pageHeight/8; // No idea what this one does. Division number does not seem to matter, as long as it is not 0, or 1.
                var viewHeight = $(window).height(); // Get full element height
                var viewEnd = viewStart + viewHeight; // viewEnd = scrollbar-position + element height = exact coordinates for the end of the transition
                var pageStartPart = viewEnd - pageStart; // pageStartPart = (scrollbar-position + element height) - (page element top coordinates) = exact coordinates for the top of the scroll animation
                var pageEndPart = (pageStart + pageHeight) - viewStart; // pageEndPart = (coordinates of top of page-element + page height) - coordinates of vertical scrollbar for current page = ??? !{tired} || FIX
                var canJumpDown = pageStartPart >= 0; // Can do full page slide animation if pageStartPart is larger than or equal to 0
                var stopJumpDown = pageStartPart > pageStopPortion; // Stops jump down after one element
                var canJumpUp = pageEndPart >= 0; // Can do full page slide animation of pageEndPart is larger than or equal to 0
                var stopJumpUp = pageEndPart > pageStopPortion; // Stop jump up after one element
                var scrollingForward = event.deltaY > 0; // The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0.
                if((scrollingForward && canJumpDown && !stopJumpDown)
                    ||(!scrollingForward && canJumpUp && !stopJumpUp)){
                    event.preventDefault();
                    scrollToPage();
                }
            }else{ // If it is already scrolling
                event.preventDefault();
            }
		});
		window.addEventListener('keydown', function(event){ // Window event listener for arrow key scrolling #StillHasNoIdeaWhatHeIsDoing
			var viewStart = $(window).scrollTop(); // The scrollTop() method sets or returns the vertical scrollbar position for the selected elements
            if(!pageJump){ // If it's not already scrolling
                var pageHeight = page.height(); // The height() method sets or returns the height of the selected elements.
                var pageStopPortion = pageHeight/8; // No idea what this one does. Division number does not seem to matter, as long as it is not 0, or 1.
                var viewHeight = $(window).height(); // Get full element height
                var viewEnd = viewStart + viewHeight; // viewEnd = scrollbar-position + element height = exact coordinates for the end of the transition
                var pageStartPart = viewEnd - pageStart; // pageStartPart = (scrollbar-position + element height) - (page element top coordinates) = exact coordinates for the top of the scroll animation
                var pageEndPart = (pageStart + pageHeight) - viewStart; // pageEndPart = (coordinates of top of page-element + page height) - coordinates of vertical scrollbar for current page = ??? !{tired} || FIX
                var canJumpDown = pageStartPart >= 0; // Can do full page slide animation if pageStartPart is larger than or equal to 0
                var stopJumpDown = pageStartPart > pageStopPortion; // Stops jump down after one element
                var canJumpUp = pageEndPart >= 0; // Can do full page slide animation of pageEndPart is larger than or equal to 0
                var stopJumpUp = pageEndPart > pageStopPortion; // Stop jump up after one element
                var keyEntry = event.keyCode; // event.keyCode returns the event keypress code. For arrow up that is 40, for arrow down it is 38.
				if((keyEntry == 40 && canJumpDown && !stopJumpDown)
                    ||(keyEntry == 38 && canJumpUp && !stopJumpUp)){
                    event.preventDefault();
                    scrollToPage();
                }
            }else{ // If it is already scrolling
                event.preventDefault();
            }
		});
    }

    function switchFunction(data){ // Moves the nav underline and changes it's colors respective to the pages
        switch(data){
            case 0:
            case "one":
                $("nav div").css({
                    "transform":"translate(850%,0)",
                    "-webkit-transform":"translate(850%, 0)",
                    "-moz-transform":"translate(850%, 0)",
                    "background":"#1d3557",
                    "transition":"1s"
                })
                break;
            case 1:
            case "two":
                $("nav div").css({
                    "transform":"translate(650%,0)",
                    "-webkit-transform":"translate(650%, 0)",
                    "-moz-transform":"translate(650%, 0)",
                    "background":"#e63946",
                    "transition":"1s"
                })
                break;
            case 2:
            case "three":
                $("nav div").css({
                    "transform":"translate(450%,0)",
                    "-webkit-transform":"translate(450%, 0)",
                    "-moz-transform":"translate(450%, 0)",
                    "background":"#f1faee",
                    "transition":"1s"
                })
                break;
            case 3:
            case "four":
                $("nav div").css({
                    "transform":"translate(250%,0)",
                    "-webkit-transform":"translate(250%, 0)",
                    "-moz-transform":"translate(250%, 0)",
                    "background":"#a8dadc",
                    "transition":"1s"
                })
                break;
            case 4:
            case "five":
                $("nav div").css({
                    "transform":"translate(50%,0)",
                    "-webkit-transform":"translate(50%, 0)",
                    "-moz-transform":"translate(50%, 0)",
                    "background":"#457b9d",
                    "transition":"1s"
                })
        }
    }
    // End of function(s)

    // Start of trigger(s)
    new scrollHandler('one');
    new scrollHandler('two');
    new scrollHandler('three');
    new scrollHandler('four');
    new scrollHandler('five');
    // End of trigger(s)
}); // End of $(document).ready(){};