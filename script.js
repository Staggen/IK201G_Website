$(document).ready(() => {
    // Start of global variable(s)
    var pageJump=false; // Used for full page slide animations
    var loadAvatars=true;
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
        window.addEventListener('resize', function(event){ // Make the full page slide work properly even after resizing the window
            pageStart = page.offset().top;
        })
    }

    function switchFunction(data){ // Moves the nav underline and changes it's colors respective to the pages
        switch(data){
            case 0:
            case "home":
                navUnderline("nav div","translate(850%,0)","#1d3557");
                break;
            case 1:
            case "about":
                navUnderline("nav div","translate(650%,0)","#e63946");
                break;
            case 2:
            case "team":
                navUnderline("nav div","translate(450%,0)","#f1faee");
                break;
            case 3:
            case "portfolio":
                navUnderline("nav div","translate(250%,0)","#a8dadc");
                break;
            case 4:
            case "contact":
                navUnderline("nav div","translate(50%,0)","#457b9d");
                break;
        }
        function navUnderline(selector,translation,color){
            $(selector).css({
                "transform":translation,
                "-webkit-transform":translation,
                "-moz-transform":translation,
                "background":color,
                "transition":"1s"
            });
        }
    }

    function loadContent(page){
        var home = false;
        var about = false;
        var team = false;
        var portfolio = false;
        var contact = false;
        var teamContentOne = false;
        var teamContentTwo = false;
        var teamContentThree = false;
        switch(page){
            case 0:
            case "home":
                // Code
                break;
            case 1:
            case "about":
                if(!about){
                    console.log("About: "+about);
                    about=true; // Confirm that the about has been loaded
                    var dateObject = new Date();
                    var year = parseInt(dateObject.getUTCFullYear());
                    var month = parseInt(dateObject.getUTCMonth())+1; // getUTCMonth() counts 0-11 by default, so that's why we add +1 at the end
                    var day = parseInt(dateObject.getUTCDate());
                    function pastWeek(){
                        day = day - 7;
                        if(day < 1){ // If day goes below 1, it hops back a month
                            month--;
                            if(month < 0){ // If month goes below 0, it hops back a year
                                year--;
                                month = month + 12; // Setting the new month value
                            }
                            switch(month){ // Setting the new day value depending on month
                                case 2:
                                    if(year % 4 == 0){ // If leap year
                                        day = 29 + day;
                                    }else{ // If not leap year
                                        day = 28 + day;
                                    }
                                    break;
                                case 4:
                                case 6:
                                case 9:
                                case 11:
                                    day = 30 + day;
                                    break;
                                case 1:
                                case 3:
                                case 5:
                                case 7:
                                case 8:
                                case 10:
                                case 12:
                                    day = 31 + day;
                                    break;
                            }
                        }
                        if(month < 10){ // If month is less than 10, it will get a 0 infront of it (for API reasons) and be converted to a string
                            month = 0 + month.toString();
                        }
                        return year + "-" + month + "-" + day;
                    }
                    var url=`https://api.github.com/search/repositories?q=language:javascript+created:>${pastWeek()}&sort=stars&order=desc`;
                    fetch(url,{
                        method:'get',
                        headers:{
                            'Content-Type':'application/vnd.github.v3+json; charset=utf-8',
                        },
                        })
                        .then((response) => { // Response is of type responseObject
                            return response.json(); // Convert responseObject to JSONObject
                        })
                        .then((response) => { // Use JSONObject
                            for(var i = 0;i < 5;i++){ // Loop 5 times (get the 5-top trends in javascript this week)
                                $("#trend"+i).html(response.items[i].name); // Add the link to the list
                                $("#trend"+i).attr("href",response.items[i].html_url); // Set the links href to the href of the github repository
                            }
                        })
                    .catch(error => console.error(error));
                }
                break;
            case 2:
            case "team":
            /*
            ERROR | Only on the initial call of memberOne(); do we get the avatar and bars
                    to load at all, or in order. For the rest of the calls (memberTwo,
                    memberThree initial calls + all secondary calls for all functions) the
                    bars refuse to animate/load in. They just appear as if they would always
                    have been there.
            */
                if(!team){
                    team=true; // Confirm that the team page has been loaded
                    console.log("Team: "+team);
                    $(".timer").css({ // Load the timer button
                        "visibility":"visible",
                        "opacity":"1",
                        "transition":"2s",
                        "transition-delay":"5.5s"
                    });
                    memberOne();
                    setTimeout(memberTwo,10000);
                    setTimeout(memberThree,20000);
                    var firstContent=setInterval(() => {
                        memberOne();
                    },30000);
                    var secondContent=setInterval(() => {
                        setTimeout(memberTwo,10000);
                    },30000);
                    var thirdContent=setInterval(() => {
                        setTimeout(memberThree,20000);
                    },30000);
                }else{
                    break;
                }
                break;
            case 3:
            case "portfolio":
                // Code
                break;
            case 4:
            case "contact":
                if(!contact){
                    contact=true; // Confirm that the contact page has been loaded
                    console.log("Contact: "+contact);
                    // function itemLoad(selector,transitionTime,transitionDelay);
                    itemLoad("#contact .text p",            "1s","1.0s");
                    itemLoad("#contact .forms #name",       "2s","1.4s");
                    itemLoad("#contact .forms #email",      "2s","1.8s");
                    itemLoad("#contact .forms #main",       "2s","2.2s");
                    itemLoad("#contact .forms #submit",     "2s","2.6s");
                    itemLoad("#contact #map",               "2s","3.0s");
                    itemLoad("#contact ul li:nth-child(1)", "2s","3.5s");
                    itemLoad("#contact ul li:nth-child(2)", "2s","3.7s");
                    itemLoad("#contact ul li:nth-child(3)", "2s","3.9s");
                    itemLoad("#contact ul li:nth-child(4)", "2s","4.1s");
                    itemLoad("#contact ul li:nth-child(5)", "2s","4.3s");
                }
                break;
        }
        function memberOne(){
            if(teamContentOne){ // If any content slide has been run before
                $(".preview1").hide(); // Hide it
                switchRight(".preview1",100); // Move it to the right
                setTimeout(() => {
                    $(".preview1").show(); // Show it again
                },100);
                switchCenter(".preview1",500); // Move right > center
                console.log("Full cycle 1: "+teamContentOne);
            }
            if(!teamContentOne){
                itemLoad("#avatar1",    "2s","1.0s"); // Load the avatar
                // function barLoad(selector,width,transitionTime,transitionDelay);
                barLoad("#bar1", "75%", "2s","2.0s");
                barLoad("#bar2","100%", "2s","2.2s");
                barLoad("#bar3", "50%", "2s","2.4s");
                barLoad("#bar4","125%", "2s","2.6s");
                barLoad("#bar5", "75%", "2s","2.8s");
                // function itemLoad(selector,transitionTime,transitionDelay);
                itemLoad("#bar1 p",     "1s","4.0s");
                itemLoad("#bar2 p",     "1s","4.3s");
                itemLoad("#bar3 p",     "1s","4.6s");
                itemLoad("#bar4 p",     "1s","4.9s");
                itemLoad("#bar5 p",     "1s","5.2s");
                console.log("Full load 1: "+!teamContentOne);
            }
            switchLeft(".preview1",10000); // Move center > left
            teamContentOne=true; // Confirm that slide-page one has been loaded
        }
        function memberTwo(){
            $(".preview2").hide(); // Hide it
            switchRight(".preview2",100); // Move it to the right
            setTimeout(() => {
                $(".preview2").show(); // Show it again
            },100);
            switchCenter(".preview2",500); // Move it right > center
            if(!teamContentTwo){
                itemLoad("#avatar2",    "2s","1.0s"); // Load the avatar
                // function barLoad(selector,width,transitionTime,transitionDelay);
                barLoad("#bar6","75%",  "2s","2.0s");
                barLoad("#bar7","100%", "2s","2.2s");
                barLoad("#bar8","50%",  "2s","2.4s");
                barLoad("#bar9","125%", "2s","2.6s");
                barLoad("#bar10","80%", "2s","2.8s");
                //function itemLoad(selector,transitionTime,transitionDelay);
                itemLoad("#bar6 p",     "1s","4.0s");
                itemLoad("#bar7 p",     "1s","4.3s");
                itemLoad("#bar8 p",     "1s","4.6s");
                itemLoad("#bar9 p",     "1s","4.9s");
                itemLoad("#bar10 p",    "1s","5.2s");
                console.log("Full load 2: "+!teamContentTwo);
            }
            switchLeft(".preview2",10000); // Move it center > left
            teamContentTwo=true; // Confirm that slide-page two has been loaded
        }
        function memberThree(){
            $(".preview3").hide(); // Hide it
            switchRight(".preview3",100); // Move it to the right
            setTimeout(() => {
                $(".preview3").show(); // Show it again
            },100);
            switchCenter(".preview3",500); // Move it right > center
            if(!teamContentThree){
                itemLoad("#avatar3",    "2s","1.0s"); // Load the avatar
                // function barLoad(selector,width,transitionTime,transitionDelay);
                barLoad("#bar11","90%", "2s","2.0s");
                barLoad("#bar12","110%","2s","2.2s");
                barLoad("#bar13","80%", "2s","2.4s");
                barLoad("#bar14","40%", "2s","2.6s");
                barLoad("#bar15","70%", "2s","2.8s");
                //function itemLoad(selector,transitionTime,transitionDelay);
                itemLoad("#bar11 p",    "1s","4.0s");
                itemLoad("#bar12 p",    "1s","4.3s");
                itemLoad("#bar13 p",    "1s","4.6s");
                itemLoad("#bar14 p",    "1s","4.9s");
                itemLoad("#bar15 p",    "1s","5.2s");
                console.log("Full load 3: "+!teamContentThree);
            }
            switchLeft(".preview3",10000); // Move it center > left
            teamContentThree=true; // Confirm that slide-page three has been loaded
        }
        function switchRight(selector,transitionDelay){
            setTimeout(() => {
                $(selector).removeClass("switchLeft");
                $(selector).removeClass("switchCenter");
                $(selector).addClass("switchRight");
            },transitionDelay);
        }
        function switchCenter(selector,transitionDelay){
            setTimeout(() => {
                $(selector).removeClass("switchRight");
                $(selector).removeClass("switchLeft");
                $(selector).addClass("switchCenter");
            },transitionDelay);
        }
        function switchLeft(selector,transitionDelay){
            setTimeout(() => {
                $(selector).removeClass("switchRight");
                $(selector).removeClass("switchCenter");
                $(selector).addClass("switchLeft");
            },transitionDelay);
        }
        function itemLoad(selector,transitionTime,transitionDelay){
            $(selector).css({
                "visibility":"visible",
                "opacity":"1",
                "transition":transitionTime,
                "transition-delay":transitionDelay
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
    }
    // End of function(s)

    // Start of on-load trigger(s)
    new scrollHandler('home');
    new scrollHandler('about');
    new scrollHandler('team');
    new scrollHandler('portfolio');
    new scrollHandler('contact');

    $("nav").css({ // Make the nav slide in on pageload
        "transform":"rotate(-90deg) translate(-100%, 0)",
        "-webkit-transform":"rotate(-90deg) translate(-100%, 0)",
        "-moz-transform":"rotate(-90deg) translate(-100%, 0)",
        "transform-origin":"top left 0",
        "-webkit-transform-origin":"top left 0",
        "-moz-transform-origin":"top left 0",
        "transition":"transform 1.5s",
        "transition-delay":"1s" // Waits one second before starting the transition
    });

    window.addEventListener("load",function(){ // Scroll to top on pageload
		$('html,body').animate({
			scrollTop:$('.wrapper').offset().top
        }, 10); // Make it short so it appears it's not an animation at all.
        loadContent(0);
    });
    // End of on-load trigger(s)
}); // End of $(document).ready(){};