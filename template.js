$(function() {

    let $overlay = $("<div id='overlay'></div");
    $(document.body).append($overlay);

    let oneFinished = false;
    function finish() {
        if(oneFinished) {
            $overlay.animate({
                left: "+=" + window.innerWidth,
                opacity: 0
            }, 1500);
        }
        oneFinished = true;
    }


    $.get("/nav.html", function(data) {
        $(document.body).prepend(data);
    }).done(finish);
    $.get("/footer.html", function(data) {
        $(document.body).append(data);
    }).done(finish);
});
