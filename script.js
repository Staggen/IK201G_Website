$(document).ready(() => {
    // Start of global variable(s)
    var pageJump=false; // Used for full page slide animations
    var sneakyNormalScrolling=false; // OMG IT WORKS :O

    var userName=[]; // For highlight/lookup
    var projectName=[]; // For highlight/lookup

    var globalWindowWidth = $(window).width();
    var mobileMode=false;
    if(globalWindowWidth<768){
        mobileMode = true;
    }else{
        mobileMode = false;
    }

    var localJSON={
        name:$("#name").val(),
        email:$("#email").val(),
        phone:$("#phone").val(),
        main:$("#main").val()
    };

    var localContributors={
        projectLoadArray:[
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0},
            {project_loaded:0}
        ],
        projectArray:[
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]},
            {projectContributors:[
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''},
                {html_url:'',avatar_url:'',login:''}
            ]}
        ]
    };

    // Regex validation borders
    var nameGreen=false;
    var nameRed=false;
    var emailGreen=false;
    var emailRed=false;
    var phoneGreen=false;
    var phoneRed=false;
    var mainGreen=false;
    var mainRed=false;
    // Below are used for content-loading confirmations
    var home = false;
    var about = false;
    var team = false;
    var portfolio = false;
    var contact = false;
    var teamContentOne = false;
    var teamContentTwo = false;
    var teamContentThree = false;
    // End of global variable(s)

    // Start of event(s)
    $('nav ul li a, .mobileDiv ul li a').click(function(evt){ // Swapping page on nav click
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
        loadContent(menuChoice); // Loads the content | duh
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
                if(!sneakyNormalScrolling){
                    if((scrollingForward && canJumpDown && !stopJumpDown)
                        ||(!scrollingForward && canJumpUp && !stopJumpUp)){
                        event.preventDefault();
                        scrollToPage();
                    }
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
                var keyEntry = event.which; // event.which returns the event keypress code. For arrow up that is 40, for arrow down it is 38.
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
            globalWindowWidth = $(window).width();
            if(globalWindowWidth < 768){
                mobileMode=true;
            }else{
                mobileMode=false;
            }
        });
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
        var slideOut;
        switch(page){
            case 0:
            case "home":
                // Code
                break;
            case 1:
            case "about":
                if(!about){
                    about=true; // Confirm that the about has been loaded
                    
                    if(mobileMode){
                        function mobileButtonFire(id){
                            $(".moreInfo, .aboutBack").removeClass("mobileSneaky");

                            if(localContributors.projectLoadArray[id].project_loaded == 0){
                                localContributors.projectLoadArray[id].project_loaded = 1;
                                url=`https://api.github.com/repos/${userName[id]}/${projectName[id]}/contributors`;
                                fetch(url,{ // Get a list of contributors
                                    method:'get',
                                    headers:{
                                        'Content-Type':'application/vnd.github.v3+json; charset=utf-8'
                                    }
                                })
                                .then(response => { // response is of type responseObject
                                    return response.json(); // Convert response to JSONObject
                                })
                                .then(response => { // Use the JSONObject
                                    $(".contributorList").html(""); // Clear the list
                                    for(key in response){
                                        localContributors.projectArray[id].projectContributors[key].html_url = response[key].html_url;
                                        localContributors.projectArray[id].projectContributors[key].avatar_url = response[key].avatar_url;
                                        localContributors.projectArray[id].projectContributors[key].login = response[key].login;
                                        $(".contributorList").append(`
                                            <li>
                                                <a href="${localContributors.projectArray[id].projectContributors[key].html_url}" target="_blank">
                                                    <img src="${localContributors.projectArray[id].projectContributors[key].avatar_url}">${localContributors.projectArray[id].projectContributors[key].login}
                                                </a>
                                            </li>
                                        `); // Adding rows individually to the list
                                    }
                                })
                                .catch(error => console.error(error)); // If somoene is a doofus
                            }
                            $(".contributorList").html(""); // Clear the list
                            for(key in localContributors.projectArray[id].projectContributors){
                                $(".contributorList").append(`
                                    <li>
                                        <a href="${localContributors.projectArray[id].projectContributors[key].html_url}" target="_blank">
                                            <img src="${localContributors.projectArray[id].projectContributors[key].avatar_url}">${localContributors.projectArray[id].projectContributors[key].login}
                                        </a>
                                    </li>
                                `); // Adding rows individually to the list
                            }
                        }
                        $("ul.trendClass li").on("click","button.showMoreButtons",function(){
                            var buttonID = $(this).data('button-id');
                            mobileButtonFire(buttonID);
                        });
                        $(".aboutBack").click(() => {
                            $(".moreInfo, .aboutBack").addClass("mobileSneaky");
                        });
                    }else if(!mobileMode){
                        $(".github").on("mouseenter", "ul.trendClass li a", function(){
                            sneakyNormalScrolling=false; // Disallow normal scrolling | enforce full page scrolling
                            $(".moreInfo").removeClass("sneaky"); // Un-hide the .moreInfo class
                            $(".github ul li a").removeClass("active"); // remove the class active from all li elements
                            $(this).addClass("active"); // add the class active for this current li element
                            var dataValue=this.dataset.id; // Get the specific data value for the current li
                            if(localContributors.projectLoadArray[dataValue].project_loaded == 0){
                                localContributors.projectLoadArray[dataValue].project_loaded = 1;
                                url=`https://api.github.com/repos/${userName[dataValue]}/${projectName[dataValue]}/contributors`;
                                fetch(url,{ // Get a list of contributors
                                    method:'get',
                                    headers:{
                                        'Content-Type':'application/vnd.github.v3+json; charset=utf-8'
                                    }
                                })
                                .then(response => { // response is of type responseObject
                                    return response.json(); // Convert response to JSONObject
                                })
                                .then(response => { // Use the JSONObject
                                    $(".contributorList").html(""); // Clear the list
                                    for(key in response){
                                        localContributors.projectArray[dataValue].projectContributors[key].html_url = response[key].html_url;
                                        localContributors.projectArray[dataValue].projectContributors[key].avatar_url = response[key].avatar_url;
                                        localContributors.projectArray[dataValue].projectContributors[key].login = response[key].login;
                                        $(".contributorList").append(`
                                            <li>
                                                <a href="${localContributors.projectArray[dataValue].projectContributors[key].html_url}" target="_blank">
                                                    <img src="${localContributors.projectArray[dataValue].projectContributors[key].avatar_url}">${localContributors.projectArray[dataValue].projectContributors[key].login}
                                                </a>
                                            </li>
                                        `); // Adding rows individually to the list
                                    }
                                })
                                .catch(error => console.error(error)); // If somoene is a doofus
                            }
                            $(".contributorList").html(""); // Clear the list
                            for(key in localContributors.projectArray[dataValue].projectContributors){
                                $(".contributorList").append(`
                                    <li>
                                        <a href="${localContributors.projectArray[dataValue].projectContributors[key].html_url}" target="_blank">
                                            <img src="${localContributors.projectArray[dataValue].projectContributors[key].avatar_url}">${localContributors.projectArray[dataValue].projectContributors[key].login}
                                        </a>
                                    </li>
                                `); // Adding rows individually to the list
                            }
                        });
                    }
                }
                break;
            case 2:
            case "team":
                if(!team){
                    team=true; // Confirm that the team page has been loaded
                    if(!mobileMode){
                        var teamCounter = 0;
                        var initialSecondary;
                        var initialTertiary;
                        var firstContent;
                        var secondContent;
                        var thirdContent;
                        function contentSlide(memberNumber){
                            setTimeout(() => {
                                $("#team .timer").removeClass("sneaky");
                            },5500);
                            if(memberNumber==0){
                                memberOne();
                                initialSecondary = setTimeout(() => {
                                    memberTwo();
                                    teamCounter = 1;
                                },10000);
                                initialTertiary = setTimeout(() => {
                                    memberThree();
                                    teamCounter = 2;
                                },20000);
                                firstContent=setInterval(() => {
                                    memberOne();
                                    teamCounter = 0;
                                },30000);
                                secondContent=setInterval(() => {
                                    setTimeout(memberTwo,10000);
                                    teamCounter = 1;
                                },30000);
                                thirdContent=setInterval(() => {
                                    setTimeout(memberThree,20000);
                                    teamCounter = 2;
                                },30000);
                            }
                            else if(memberNumber==1){
                                memberTwo();
                                teamCounter = 1;
                                initialSecondary = setTimeout(() => {
                                    memberThree();
                                    teamCounter = 2;
                                },10000);
                                initialTertiary = setTimeout(() => {
                                    memberOne();
                                    teamCounter = 0;
                                },20000);
                                secondContent=setInterval(() => {
                                    memberTwo();
                                    teamCounter = 1;
                                },30000);
                                thirdContent=setInterval(() => {
                                    setTimeout(memberThree,10000);
                                    teamCounter = 2;
                                },30000);
                                firstContent=setInterval(() => {
                                    setTimeout(memberOne,20000);
                                    teamCounter = 0;
                                },30000);
                            }
                            else{
                                memberThree();
                                teamCounter = 2;
                                initialSecondary = setTimeout(() => {
                                    memberOne();
                                    teamCounter = 0;
                                },10000);
                                initialTertiary = setTimeout(() => {
                                    memberTwo();
                                    teamCounter = 1;
                                },20000);
                                thirdContent=setInterval(() => {
                                    memberThree();
                                    teamCounter = 2;
                                },30000);
                                firstContent=setInterval(() => {
                                    setTimeout(memberOne,10000);
                                    teamCounter = 0;
                                },30000);
                                secondContent=setInterval(() => {
                                    setTimeout(memberTwo,20000);
                                    teamCounter = 1;
                                },30000);
                            }
                        }

                        $(".timer ul li").click((event) => {
                            event.preventDefault();
                            clearInterval(firstContent);
                            clearInterval(secondContent);
                            clearInterval(thirdContent);
                            clearTimeout(initialSecondary);
                            clearTimeout(initialTertiary);
                            clearTimeout(slideOut);
                            switch(teamCounter){
                                case 0:
                                    $(".preview1, .preview2, .preview3, .timer").addClass("sneaky");
                                    $("#team .in-depth").html(`<img src="images/95225493_512.jpg" alt="" class="person">
                                    <p class="personInfo">
                                        Nicolas Bj&ouml;rkefors<br><br>
                                        Former circle clicking master<br><br>
                                        Underground arms dealer (secret)<br><br>
                                        Enjoys clean ears<br><br>
                                    </p>
                                    <p class="lifeStory">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                                    </p>`).removeClass("sneaky");
                                    setTimeout(() => {
                                        $(".menuDiv").addClass("sneaky");
                                        $(".back").removeClass("sneaky");
                                    }, 100);
                                    break;
                                case 1:
                                    $(".preview1, .preview2, .preview3, .timer").addClass("sneaky");
                                    $("#team .in-depth").html(`<img src="images/92413374_512.jpg" alt="" class="person">
                                    <p class="personInfo">
                                        Oskar Olofsson<br><br>
                                        Likes shitty movies<br><br>
                                        Finds milk too delicious to be vegan<br><br>
                                        Buy more facts® for only $4.99 each<br><br>
                                    </p>
                                    <p class="lifeStory">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                                    </p>`).removeClass("sneaky");
                                    setTimeout(() => {
                                        $(".menuDiv").addClass("sneaky");
                                        $(".back").removeClass("sneaky");
                                    }, 100);
                                    break;
                                case 2:
                                    $(".preview1, .preview2, .preview3, .timer").addClass("sneaky");
                                    $("#team .in-depth").html(`<img src="images/216901241_512.jpg" alt="" class="person">
                                    <p class="personInfo">
                                        Elias Stagg<br><br>
                                        The palest council member<br><br>
                                        Is possibly Queen Elizabeth II of the United Kingdom<br><br>
                                        Dreams of owning a farm<br><br>
                                    </p>
                                    <p class="lifeStory">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                                    </p>`).removeClass("sneaky");
                                    setTimeout(() => {
                                        $(".menuDiv").addClass("sneaky");
                                        $(".back").removeClass("sneaky");
                                    }, 100);
                                    break;
                            }
                        });
                        $(".back").click(() => {
                            $(".back").addClass("sneaky");
                            $(".menuDiv").removeClass("sneaky");
                            $(".preview1, .preview2, .preview3, .timer").removeClass("sneaky");
                            $("#team .in-depth").html('').removeClass("sneaky");
                            contentSlide(teamCounter);
                        });

                        contentSlide(teamCounter); // Initial call
                    }else if(mobileMode){
                        // Code for targeting the images and doing stuff with them
                        $(".preview1 .avatar").click(() => {
                            $(".preview1, .preview2, .preview3, .teamTitle, .teamNameOne, .teamNameTwo, .teamNameThree").addClass("mobileSneaky");
                            $("#team .in-depth").html(`<img src="images/95225493_512.jpg" alt="" class="person">
                            <p class="personInfo">
                                Nicolas Bj&ouml;rkefors<br>
                                Former circle clicking master<br>
                                Underground arms dealer (secret)<br>
                                Enjoys clean ears<br>
                            </p>
                            <div class="lifeStory">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                            </p></div>`).removeClass("mobileSneaky");
                            setTimeout(() => {
                                $(".back").removeClass("mobileSneaky");
                            },100);
                        });
                        $(".preview2 .avatar").click(() => {
                            $(".preview1, .preview2, .preview3, .teamTitle, .teamNameOne, .teamNameTwo, .teamNameThree").addClass("mobileSneaky");
                            $("#team .in-depth").html(`<img src="images/92413374_512.jpg" alt="" class="person">
                            <p class="personInfo">
                                Oskar Olofsson<br>
                                Likes shitty movies<br>
                                Finds milk too delicious to be vegan<br>
                                Buy more facts® for only $4.99 each<br>
                            </p>
                            <div class="lifeStory">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                            </p></div>`).removeClass("mobileSneaky");
                            setTimeout(() => {
                                $(".back").removeClass("mobileSneaky");
                            },100);
                        });
                        $(".preview3 .avatar").click(() => {
                            $(".preview1, .preview2, .preview3, .teamTitle, .teamNameOne, .teamNameTwo, .teamNameThree").addClass("mobileSneaky");
                            $("#team .in-depth").html(`<img src="images/216901241_512.jpg" alt="" class="person">
                            <p class="personInfo">
                                Elias Stagg<br>
                                The palest council member<br>
                                Is possibly Queen Elizabeth II of the United Kingdom<br>
                                Dreams of owning a farm<br>
                            </p>
                            <div class="lifeStory">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero reiciendis laboriosam nam esse iure sequi illum porro laudantium nisi, harum quos repellat quasi autem quidem id nihil repellendus quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, quidem facilis officiis magnam rem nulla vero veritatis ea quibusdam voluptatibus nesciunt suscipit, provident, sed nemo! Consequatur minus distinctio dolores sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nobis harum voluptate quod. Maxime eius dolorum natus, facere ducimus amet odit harum a eaque perspiciatis architecto qui quia consequuntur illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet in modi, facilis velit sapiente rem rerum, tempora earum porro, sint et hic aliquam doloremque commodi impedit totam laborum ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident dignissimos quidem cupiditate voluptates blanditiis. Pariatur ullam, excepturi hic tenetur, aut obcaecati id aliquid voluptas distinctio quasi impedit, veritatis non.
                            </p></div>`).removeClass("mobileSneaky");
                            setTimeout(() => {
                                $(".back").removeClass("mobileSneaky");
                            },100);
                        })
                        $(".back").click(() => {
                            $(".back").addClass("mobileSneaky");
                            $(".preview1, .preview2, .preview3, .teamTitle, .teamNameOne, .teamNameTwo, .teamNameThree").removeClass("mobileSneaky");
                            $("#team .in-depth").html('').addClass("mobileSneaky");
                        });
                    }
                }
                break;
            case 3:
            case "portfolio":
                if(!portfolio){
                    portfolio=true; // Confirm that assets have been loaded
                    $("#text1 ul li a").click((evt) => {
                        evt.preventDefault();
                        $(".infoText").html(`<h2>Full Page Scroll</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque culpa praesentium porro ipsum repellendus quod fuga. In, aut! Mollitia enim dolorum eius culpa esse corporis eos asperiores dolores sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis laudantium possimus hic. Eius doloremque velit architecto obcaecati sapiente cumque, ullam eos officia! Unde enim illo ullam ad dolore! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at nemo, dolorem cupiditate doloribus dolor tempore, consequatur eius est tenetur optio delectus esse neque aut incidunt voluptatum? Magnam, beatae vitae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, dolores earum dignissimos sequi voluptatem quae, obcaecati molestiae itaque autem maxime voluptatibus culpa! Totam accusamus magnam voluptates aliquam, quos magni ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed consectetur unde vero excepturi tempora nemo a odio? Impedit ex vero, provident deserunt, quasi dolore laudantium distinctio, nulla itaque eligendi ducimus!</p>`)
                        $("#portfolio #image1").addClass("expandHeight");
                        $("#portfolio #image1").addClass("z-index");
                        setTimeout(() => {
                            $("#portfolio #image1").addClass("expandWidth");
                        }, 500);
                        setTimeout(() => {
                            $(".menuDiv").addClass("sneaky");
                            $(".portBack").removeClass("sneaky mobileSneaky");
                        }, 500);
                        setTimeout(() => {
                            $(".infoText").removeClass("sneaky mobileSneaky");
                        }, 1250);
                    });
                    
                    $("#text2 ul li a").click((evt) => {
                        evt.preventDefault();
                        $(".infoText").html(`<h2>Content Sliding</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque culpa praesentium porro ipsum repellendus quod fuga. In, aut! Mollitia enim dolorum eius culpa esse corporis eos asperiores dolores sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis laudantium possimus hic. Eius doloremque velit architecto obcaecati sapiente cumque, ullam eos officia! Unde enim illo ullam ad dolore! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at nemo, dolorem cupiditate doloribus dolor tempore, consequatur eius est tenetur optio delectus esse neque aut incidunt voluptatum? Magnam, beatae vitae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, dolores earum dignissimos sequi voluptatem quae, obcaecati molestiae itaque autem maxime voluptatibus culpa! Totam accusamus magnam voluptates aliquam, quos magni ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed consectetur unde vero excepturi tempora nemo a odio? Impedit ex vero, provident deserunt, quasi dolore laudantium distinctio, nulla itaque eligendi ducimus!</p>`)
                        $("#portfolio #image2").css({
                            "height":"100%",
                            "top":"0"
                        });
                        $("#portfolio #image2").addClass("z-index");
                        setTimeout(() => {
                            $("#portfolio #image2").css({
                                "width":"100%",
                                "left":"0"
                            });
                        }, 500);
                        setTimeout(() => {
                            $(".menuDiv").addClass("sneaky");
                            $(".portBack").removeClass("sneaky mobileSneaky");
                        }, 500);
                        setTimeout(() => {
                            $(".infoText").removeClass("sneaky mobileSneaky");
                        }, 1250);
                    });
                
                    $("#text3 ul li a").click((evt) => {
                        evt.preventDefault();
                        $(".infoText").html(`<h2>Mobile "first"</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque culpa praesentium porro ipsum repellendus quod fuga. In, aut! Mollitia enim dolorum eius culpa esse corporis eos asperiores dolores sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis laudantium possimus hic. Eius doloremque velit architecto obcaecati sapiente cumque, ullam eos officia! Unde enim illo ullam ad dolore! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at nemo, dolorem cupiditate doloribus dolor tempore, consequatur eius est tenetur optio delectus esse neque aut incidunt voluptatum? Magnam, beatae vitae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, dolores earum dignissimos sequi voluptatem quae, obcaecati molestiae itaque autem maxime voluptatibus culpa! Totam accusamus magnam voluptates aliquam, quos magni ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed consectetur unde vero excepturi tempora nemo a odio? Impedit ex vero, provident deserunt, quasi dolore laudantium distinctio, nulla itaque eligendi ducimus!</p>`)
                        $("#portfolio #image3").addClass("expandHeight");
                        $("#portfolio #image3").addClass("z-index");
                        setTimeout(() => {
                            $("#portfolio #image3").addClass("expandWidth");
                        }, 500);
                        setTimeout(() => {
                            $(".menuDiv").addClass("sneaky");
                            $(".portBack").removeClass("sneaky mobileSneaky");
                        }, 500);
                        setTimeout(() => {
                            $(".infoText").removeClass("sneaky mobileSneaky");
                        }, 1250);
                    });

                    $(".portBack").click(() => {
                        $(".infoText").addClass("sneaky mobileSneaky");
                        $(".portBack").addClass("sneaky mobileSneaky");
                        $(".menuDiv").removeClass("sneaky");
                        $("#portfolio .image").removeClass("expandWidth");
                        setTimeout(() =>{
                            $("#portfolio .image").removeClass("expandHeight");
                        }, 500);
                        setTimeout(() =>{
                            $("#portfolio .image").removeClass("z-index");
                        }, 1050);
                        //resetting image2
                        $("#image2").css({
                            "width":"34%",
                            "left":"33%"
                        });
                        setTimeout(() => {
                            $("#image2").css({
                                "height":"50%",
                                "top":"50%"
                            });
                        }, 500);
                        setTimeout(() =>{
                            $("#portfolio #image2").removeClass("z-index");
                        }, 1050);
                    });
                }
                break;
            case 4:
            case "contact":
                if(!contact){
                    contact=true; // Confirm that the contact page has been loaded
                    // function itemFastLoad(selector,transitionDelay);
                    itemFastLoad("#contact .text p",1000);
                    // function itemSlowLoad(selector,transitionDelay);
                    itemSlowLoad("#name",1400);
                    itemSlowLoad("#email",1800);
                    itemSlowLoad("#phone",2200);
                    itemSlowLoad("#main",2600);
                    itemSlowLoad("#submit",3000);
                    itemSlowLoad("#map",3400);
                    setTimeout(() => {
                        $("#contact ul li:nth-child(1)").removeClass("sneaky");
                    }, 3500);
                    setTimeout(() => {
                        $("#contact ul li:nth-child(2)").removeClass("sneaky");
                    }, 3700);
                    setTimeout(() => {
                        $("#contact ul li:nth-child(3)").removeClass("sneaky");
                    }, 3900);
                    setTimeout(() => {
                        $("#contact ul li:nth-child(4)").removeClass("sneaky");
                    }, 4100);
                    setTimeout(() => {
                        $("#contact ul li:nth-child(5)").removeClass("sneaky");
                    }, 4300);
                    
                    $("#name").keyup(() => {
                        localJSON.name = $("#name").val();
                        localStorage.setItem("contactInformation",JSON.stringify(localJSON));
                        var regexName = /^[a-zA-Z ]{3,}$/i;
                        if(regexName.test(localJSON.name)){
                            if(!nameGreen){
                                nameGreen = true;
                                nameRed = false;
                                $("#name").removeClass("redBorder");
                                $("#name").addClass("greenBorder");
                            }
                        }else{
                            if(!nameRed){
                                nameGreen = false;
                                nameRed = true;
                                $("#name").removeClass("greenBorder");
                                $("#name").addClass("redBorder");
                            }
                        }
                    });
                    $("#email").keyup(() => {
                        localJSON.email = $("#email").val();
                        localStorage.setItem("contactInformation",JSON.stringify(localJSON));
                        var regexEmail = /^([\.\w\S]+(?:@)+(?:[\w\S])+(?:\.)+(?:[\w\S])+)$/i;
                        if(regexEmail.test(localJSON.email)){
                            if(!emailGreen){
                                emailGreen = true;
                                emailRed = false;
                                $("#email").removeClass("redBorder");
                                $("#email").addClass("greenBorder");
                            }
                        }else{
                            if(!emailRed){
                                emailGreen = false;
                                emailRed = true;
                                $("#email").removeClass("greenBorder");
                                $("#email").addClass("redBorder");
                            }
                        }
                    });
                    $("#phone").keyup(() => {
                        localJSON.phone = $("#phone").val();
                        localStorage.setItem("contactInformation",JSON.stringify(localJSON));
                        var regexPhone = /^[0-9]{7,}$/ // ^([\+]{1}(?:[1-9]){1}(?:[0-9])+){7,}$ ???
                        if(regexPhone.test(localJSON.phone)){
                            if(!phoneGreen){
                                phoneGreen=true;
                                phoneRed=false;
                                $("#phone").removeClass("redBorder");
                                $("#phone").addClass("greenBorder");
                            }
                        }else{
                            if(!phoneRed){
                                phoneGreen=false;
                                phoneRed=true;
                                $("#phone").removeClass("greenBorder");
                                $("#phone").addClass("redBorder");
                            }
                        }
                    });
                    $("#main").keyup(() => {
                        localJSON.main = $("#main").val();
                        localStorage.setItem("contactInformation",JSON.stringify(localJSON));
                        var regexMain = /^[^\0]+$/i;
                        if(regexMain.test(localJSON.main)){
                            if(!mainGreen){
                                mainGreen=true;
                                mainRed=false;
                                $("#main").removeClass("redBorder");
                                $("#main").addClass("greenBorder");
                            }
                        }else{
                            if(!mainRed){
                                mainGreen=false;
                                mainRed=true;
                                $("#main").removeClass("greenBorder");
                                $("#main").addClass("redBorder");
                            }
                        }
                    });
                    $("#submit").click(function(event){
                        if(!$("#name").hasClass("greenBorder") || !$("#email").hasClass("greenBorder") || !$("#phone").hasClass("greenBorder") || !$("#main").hasClass("greenBorder")){
                            event.preventDefault();
                            alert("Enter data in all fields, and in valid formats! Don't be like this guy: https://imgur.com/gallery/cuCPEhw");
                        }
                    });
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
            }
            if(!teamContentOne){
                // function itemSlowLoad(selector,transitionDelay);
                itemSlowLoad("#avatar1",1000);
                // function barLoad(selector,width,transitionDelay);
                barLoad("#bar1","100",2000);
                barLoad("#bar2","120",2200);
                barLoad("#bar3","50",2400);
                barLoad("#bar4","70",2600);
                barLoad("#bar5","60",2800);
                //function itemFastLoad(selector,transitionDelay);
                itemFastLoad("#bar1 p",4000);
                itemFastLoad("#bar2 p",4200);
                itemFastLoad("#bar3 p",4400);
                itemFastLoad("#bar4 p",4600);
                itemFastLoad("#bar5 p",4800);
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
                // function itemSlowLoad(selector,transitionDelay);
                itemSlowLoad("#avatar2",1000);
                // function barLoad(selector,width,transitionDelay);
                barLoad("#bar6","120",2000);
                barLoad("#bar7","70",2200);
                barLoad("#bar8","90",2400);
                barLoad("#bar9","60",2600);
                barLoad("#bar10","110",2800);
                //function itemFastLoad(selector,transitionDelay);
                itemFastLoad("#bar6 p",4000);
                itemFastLoad("#bar7 p",4200);
                itemFastLoad("#bar8 p",4400);
                itemFastLoad("#bar9 p",4600);
                itemFastLoad("#bar10 p",4800);
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
                // function itemSlowLoad(selector,transitionDelay);
                itemSlowLoad("#avatar3",1000);
                // function barLoad(selector,width,transitionDelay);
                barLoad("#bar11","90",2000);
                barLoad("#bar12","110",2200);
                barLoad("#bar13","80",2400);
                barLoad("#bar14","40",2600);
                barLoad("#bar15","70",2800);
                //function itemFastLoad(selector,transitionDelay);
                itemFastLoad("#bar11 p",4000);
                itemFastLoad("#bar12 p",4200);
                itemFastLoad("#bar13 p",4400);
                itemFastLoad("#bar14 p",4600);
                itemFastLoad("#bar15 p",4800);
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
            slideOut = setTimeout(() => {
                $(selector).removeClass("switchRight");
                $(selector).removeClass("switchCenter");
                $(selector).addClass("switchLeft");
            },transitionDelay);
        }
        function itemFastLoad(selector,transitionDelay){
            setTimeout(() => {
                $(selector).removeClass("sneaky");
                $(selector).removeClass("sneaky2");
            },transitionDelay);
        }
        function itemSlowLoad(selector,transitionDelay){
            setTimeout(() => {
                $(selector).removeClass("sneaky");
                $(selector).removeClass("sneaky2");
            },transitionDelay);
        }
        function barLoad(selector,width,transitionDelay){
            setTimeout(() => {
                $(selector).addClass("barWidth"+width);
            },transitionDelay);
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
    
    $(".github, .github .moreInfo").mouseleave(() => {
        sneakyNormalScrolling=false;
        $(".moreInfo").addClass("sneaky");
        $(".github ul li a").removeClass("active");
    });
    $(".github p").mouseenter(() => {
        sneakyNormalScrolling=false;
        $(".moreInfo").addClass("sneaky");
        $(".github ul li a").removeClass("active");
    });
    $(".moreInfo").mouseenter(() => {
        sneakyNormalScrolling=true; // Allow normal scrolling in the .moreInfo div
    });
    $(".hamburger .fa-bars, .mobileDiv ul li").click(() =>{
        $(".mobileDiv").toggleClass("mobileSneaky");
    });
    url=`https://api.github.com/search/repositories?q=language:css&sort=stars&order=desc`;
    fetch(url,{ // Get CSS repos
        method:'get',
        headers:{
            'Content-Type':'application/vnd.github.v3+json; charset=utf-8'
        }
    })
    .then(response => {// response is of type responseObject
        return response.json(); // Convert response to JSONObject
    })
    .then(response => { // Use the JSONObject
        for(var i = 0; i < 5;i++){ // Loop 5 times to get the top 5 CSS repos
            $("#trend"+i).html(parseInt(i+1)+". ★ "+response.items[i].stargazers_count+" | "+response.items[i].name+" by "+response.items[i].owner.login);
            $("#CSSList li:nth-child("+(i+1)+")").append(`<button data-button-id = ${i} class = "showMoreButtons superSneaky">Show</button>`);
            $("#trend"+i).attr("href",response.items[i].html_url);
            userName[i]=response.items[i].owner.login;
            projectName[i]=response.items[i].name;
        }
    })
    .catch(error => console.error(error));

    url=`https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc`;
    fetch(url,{ // Get JavaScript repos
        method:'get',
        headers:{
            'Content-Type':'application/vnd.github.v3+json; charset=utf-8',
        }
    })
    .then(response => { // response is of type responseObject
        return response.json(); // Convert response to JSONObject
    })
    .then(response => { // Use the JSONObject
        var counter=0;
        for(var i = 5;i < 10;i++){ // Loop 5 times to get the top 5 javascript
            $("#trend"+i).html(parseInt(i-4)+". ★ "+response.items[counter].stargazers_count+" | "+response.items[counter].name+" by "+response.items[counter].owner.login);
            $("#JavaScriptList li:nth-child("+(i-4)+")").append(`<button data-button-id = "${i}" class = "showMoreButtons superSneaky">Show</button>`);
            $("#trend"+i).attr("href",response.items[counter].html_url);
            userName[i]=response.items[counter].owner.login;
            projectName[i]=response.items[counter].name;
            counter++;
        }
    })
    .catch(error => console.error(error)); // If someone is a doofus

    var returnedJSON = JSON.parse(localStorage.getItem('contactInformation'));
    if(returnedJSON.name != null){
        $("#name").val(returnedJSON.name);
    }
    if(returnedJSON.email != null){
        $("#email").val(returnedJSON.email);

    }
    if(returnedJSON.phone != null){
        $("#phone").val(returnedJSON.phone);

    }
    if(returnedJSON.main != null){
        $("#main").val(returnedJSON.main);

    }
    // End of on-load trigger(s)
}); // End of $(document).ready(){};