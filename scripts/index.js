
$(document).ready(function () {
    $('#navbar').load('./nav-bar2.html');
});

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

//footer js
$(document).ready(function () {
    $('#footerArea').load('./footer-2.html');
});


//id based selection 
$(document).ready(function () {
    $('#cyberSecurity').on('click', function () {
        window.location.href = './cyber-security.html';
    });
});
