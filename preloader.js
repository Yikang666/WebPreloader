if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js';
    document.head.appendChild(script);
};

document.write(
    `
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/yikang666/preloader-html/preloader.min.css">
    <div id="preloader">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
    `);

if (window.jQuery) {

};

function checkJQuery() {
    if (window.jQuery) {
        var script = document.createElement("script");
        script.textContent = `
        $(window).on('load', function() {
            $('#preloader').fadeOut('slow');
        });
        `;
        document.body.appendChild(script);
    } else {
        setTimeout(checkJQuery, 10);
    }
};

checkJQuery();
