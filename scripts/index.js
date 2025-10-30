$(document).ready(function () {
    $("#howWeWorkSection").load('./how-we-work.html');
});

$(document).ready(function () {
    $(".service-card").hover(
        function () {
            $(this).find("button").animate({ opacity: 0.8 }, 200);
        },
        function () {
            $(this).find("button").animate({ opacity: 1 }, 200);
        }
    );
});

//id based selection 
$(document).ready(function () {
    $('#cyberSecurity').on('click', function () {
        window.location.href = './cyber-security.html';
    });
});
