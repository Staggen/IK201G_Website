$(document).ready(() => {
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
    });
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