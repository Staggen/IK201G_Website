$(document).ready(() => {
    // Swapping page on nav-bar click
    $('nav ul li a').click(function(evt){
        var pageJump = true;
        evt.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, {
            duration: 1000,
            complete: () => {
                pageJump = false;
            }
        });
        // Making the nav-bar underline move
        var menuChoice = $(this).closest("li").index();
        switch(menuChoice){
            case 0:
                $(".underline").css({
                    "transform":"translate(400%,0)",
                    "-webkit-transform": "translate(400%, 0)",
                    "-moz-transform": "translate(400%, 0)",
                    "background":"#32cd32",
                    "transition":"1s"
                })
                break;
            case 1:
                $(".underline").css({
                    "transform":"translate(300%,0)",
                    "-webkit-transform": "translate(300%, 0)",
                    "-moz-transform": "translate(300%, 0)",
                    "background":"#e63946",
                    "transition":"1s"
                })
                break;
            case 2:
                $(".underline").css({
                    "transform":"translate(200%,0)",
                    "-webkit-transform": "translate(200%, 0)",
                    "-moz-transform": "translate(200%, 0)",
                    "background":"#f1faee",
                    "transition":"1s"
                })
                break;
            case 3:
                $(".underline").css({
                    "transform":"translate(100%,0)",
                    "-webkit-transform": "translate(100%, 0)",
                    "-moz-transform": "translate(100%, 0)",
                    "background":"#a8dadc",
                    "transition":"1s"
                })
                break;
            case 4:
                $(".underline").css({
                    "transform":"translate(0,0)",
                    "-webkit-transform": "translate(0, 0)",
                    "-moz-transform": "translate(0, 0)",
                    "background":"#457b9d",
                    "transition":"1s"
            })
        }
    });
    // Stopping normal scrolling and making it move entire pages
    function scrollHandler(pageId) {
        var page = $('#' + pageId);
        var pageStart = page.offset().top;
        var pageJump = false;

        function scrollToPage() {
            pageJump = true;
            $('html, body').animate({
                scrollTop: pageStart
            }, {
                duration: 1000,
                complete: () => {
                    pageJump = false;
                }
            });
            // Making the nav-bar underline move as you scroll
            // I ran a console.log(page) to see what format page was delivered in, and then just dove into the data deeper until I found what I wanted.
            switch(page[0].id){
                case "one":
                    $(".underline").css({
                        "transform":"translate(400%,0)",
                        "-webkit-transform": "translate(400%, 0)",
                        "-moz-transform": "translate(400%, 0)",
                        "background":"#32cd32",
                        "transition":"1s"
                    })
                    break;
                case "two":
                    $(".underline").css({
                        "transform":"translate(300%,0)",
                        "-webkit-transform": "translate(300%, 0)",
                        "-moz-transform": "translate(300%, 0)",
                        "background":"#e63946",
                        "transition":"1s"
                    })
                    break;
                case "three":
                    $(".underline").css({
                        "transform":"translate(200%,0)",
                        "-webkit-transform": "translate(200%, 0)",
                        "-moz-transform": "translate(200%, 0)",
                        "background":"#f1faee",
                        "transition":"1s"
                    })
                    break;
                case "four":
                    $(".underline").css({
                        "transform":"translate(100%,0)",
                        "-webkit-transform": "translate(100%, 0)",
                        "-moz-transform": "translate(100%, 0)",
                        "background":"#a8dadc",
                        "transition":"1s"
                    })
                    break;
                case "five":
                    $(".underline").css({
                        "transform":"translate(0,0)",
                        "-webkit-transform": "translate(0, 0)",
                        "-moz-transform": "translate(0, 0)",
                        "background":"#457b9d",
                        "transition":"1s"
                })
            }
        }
        window.addEventListener('wheel', function(event) {
            var viewStart = $(window).scrollTop();
            if(!pageJump){
                var pageHeight = page.height();
                var pageStopPortion = pageHeight / 8;
                var viewHeight = $(window).height();
                var viewEnd = viewStart + viewHeight;
                var pageStartPart = viewEnd - pageStart;
                var pageEndPart = (pageStart + pageHeight) - viewStart;
                var canJumpDown = pageStartPart >= 0;
                var stopJumpDown = pageStartPart > pageStopPortion;
                var canJumpUp = pageEndPart >= 0;
                var stopJumpUp = pageEndPart > pageStopPortion;
                var scrollingForward = event.deltaY > 0;
                if((scrollingForward && canJumpDown && !stopJumpDown) 
                    ||(!scrollingForward && canJumpUp && !stopJumpUp)){
                    event.preventDefault();
                    scrollToPage();
                }
            } else {
                event.preventDefault();
            }
        });
    }
    // "Don't question why it works, just embrace the fact that it does" - Einstein, probably
    new scrollHandler('one');
    new scrollHandler('two');
    new scrollHandler('three');
    new scrollHandler('four');
    new scrollHandler('five');
});