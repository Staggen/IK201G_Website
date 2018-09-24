$(document).ready(() => {
    // Start of global variable(s)
    var pageJump=false; // Used for full page slide animations
    // End of global variable(s)

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
        loadContent(menuChoice);
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
                speed:"ease-in",
                complete: () => { // When animation complete: => do function
                    pageJump = false;
                }
            });
            switchFunction(page[0].id); // Making the nav underline move as you scroll
            loadContent(page[0].id);
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
        window.addEventListener('resize', function(){ // Make the full page slide work properly even after resizing the window
            pageStart = page.offset().top;
        })
    }

    function switchFunction(data){ // Moves the nav underline and changes it's colors respective to the pages
        switch(data){
            case 0:
            case "one":
                navUnderline("nav div","translate(850%,0)","#1d3557");
                break;
            case 1:
            case "two":
                navUnderline("nav div","translate(650%,0)","#e63946");
                break;
            case 2:
            case "three":
                navUnderline("nav div","translate(450%","#f1faee");
                break;
            case 3:
            case "four":
                navUnderline("nav div","translate(250%,0)","#a8dadc");
                break;
            case 4:
            case "five":
                navUnderline("nav div","translate(50%,0)","#457b9d");
                break;
        }
        function navUnderline(selector,position,color){
            $(selector).css({
                "transform":position,
                "-webkit-transform":position,
                "-moz-transform":position,
                "background":color,
                "transition":"1s"
            });
        }
    }

    function loadContent(page){
        switch(page){
            case 0:
            case "one":
                // Code
                break;
            case 1:
            case "two":
                // Code
                break;
            case 2:
            case "three":
                $(".avatar").css({ // Load all avatars
                    "visibility":"visible",
                    "opacity":"1",
                    "transition":"2s",
                    "transition-delay":"1s"
                });
                $(".timer").css({ // Load the timer button
                    "visibility":"visible",
                    "opacity":"1",
                    "transition":"2s",
                    "transition-delay":"5.5s"
                });
                // Preview1
                // function name(contentValue,width,transitionTime,transitionDelay);
                barLoad(".preview1 .graph #bar1", "75%","2s","2.0s");
                barLoad(".preview1 .graph #bar2","100%","2s","2.2s");
                barLoad(".preview1 .graph #bar3", "50%","2s","2.4s");
                barLoad(".preview1 .graph #bar4","125%","2s","2.6s");
                barLoad(".preview1 .graph #bar5", "75%","2s","2.8s");
                // function name(contentValue,transitionTime,transitionDelay);
                barTextLoad(".preview1 .graph #bar1 p","1s","4.0s");
                barTextLoad(".preview1 .graph #bar2 p","1s","4.3s");
                barTextLoad(".preview1 .graph #bar3 p","1s","4.6s");
                barTextLoad(".preview1 .graph #bar4 p","1s","4.9s");
                barTextLoad(".preview1 .graph #bar5 p","1s","5.2s");
                switchLeft(".preview1","1s","10s");
                // End of preview1
                // Preview2
                switchCenter(".preview2","1s","10s");
                // function name(contentValue,width,transitionTime,transitionDelay);
                barLoad(".preview2 .graph #bar1", "75%","2s","12.0s");
                barLoad(".preview2 .graph #bar2","100%","2s","12.2s");
                barLoad(".preview2 .graph #bar3", "50%","2s","12.4s");
                barLoad(".preview2 .graph #bar4","125%","2s","12.6s");
                barLoad(".preview2 .graph #bar5", "80%","2s","12.8s");
                // function name(contentValue,transitionTime,transitionDelay);
                barTextLoad(".preview2 .graph #bar1 p","1s","14.0s");
                barTextLoad(".preview2 .graph #bar2 p","1s","14.3s");
                barTextLoad(".preview2 .graph #bar3 p","1s","14.6s");
                barTextLoad(".preview2 .graph #bar4 p","1s","14.9s");
                barTextLoad(".preview2 .graph #bar5 p","1s","15.2s");
                // switchLeft(".preview2","1s","20s"); // If I add this it won't slide in in the first place
                // End of preview2
                break;
            case 3:
            case "four":
                // Code
                break;
            case 4:
            case "five":
                // Code
                break;
        }
        function swicthRight(selector,transitionTime,transitionDelay){
            $(selector).css({
                "transform":"translate(200%,-50%)",
                "transition":transitionTime,
                "transition-delay":transitionDelay,
                "transition-timing-function":"ease",
            });
        }
        function switchCenter(selector,transitionTime,transitionDelay){
            $(selector).css({
                "transform":"translate(-50%,-50%)",
                "transition":transitionTime,
                "transition-delay":transitionDelay,
                "transition-timing-function":"ease",
            });
        }
        function switchLeft(selector,transitionTime,transitionDelay){
            $(selector).css({
                "transform":"translate(-150%,-50%)",
                "transition":transitionTime,
                "transition-delay":transitionDelay,
                "transition-timing-function":"ease",
            });
        }
        function barLoad(selector,width,transitionTime,transitionDelay){
            $(selector).css({
                "visibility":"visible",
                "opacity":"1",
                "width":width,
                "transition":transitionTime,
                "transition-timing-function":"linear",
                "transition-delay":transitionDelay
            });
        }
        function barTextLoad(selector,transitionTime,transitionDelay){
            $(selector).css({
                "visibility":"visible",
                "opacity":"1",
                "transition":transitionTime,
                "transition-delay":transitionDelay
            });
        }
    }
    // End of function(s)

    // Start of on-load trigger(s)
    new scrollHandler('one');
    new scrollHandler('two');
    new scrollHandler('three');
    new scrollHandler('four');
    new scrollHandler('five');

    $("nav").css({ // Make the nav slide in on pageload
        "transform":"rotate(-90deg) translate(-100%, 0)",
        "-webkit-transform":"rotate(-90deg) translate(-100%, 0)",
        "-moz-transform":"rotate(-90deg) translate(-100%, 0)",
        "transform-origin":"top left 0",
        "-webkit-transform-origin":"top left 0",
        "-moz-transform-origin":"top left 0",
        "transition":"1.5s",
        "transition-delay":"1s" // Waits one second before starting the transition
    });

    window.addEventListener("load",function(){ // Scroll to top on pageload
		$('html,body').animate({
			scrollTop:$('.wrapper').offset().top
        }, 10); // Make it short so it appears it's not an animation at all.
        loadContent(0);
    });
    // End of trigger(s)
}); // End of $(document).ready(){};