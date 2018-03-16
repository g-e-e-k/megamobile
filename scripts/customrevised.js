function adjustHeaderSection()
{
    setTimeout(function () {
        var applyHeight = $('#page-content').outerHeight() - 55;
        $('#page-content').css('min-height', applyHeight);
    }, 50);
}

$(document).ready(function () {
    adjustHeaderSection();
});