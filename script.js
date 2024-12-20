$(document).ready(function () {
    $('a').on('click', function (e) {
        console.log('Navigating to: ' + $(this).attr('href'));
    });
});
