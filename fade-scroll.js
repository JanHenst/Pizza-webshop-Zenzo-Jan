var animateHTML = function () {
    var elems;
    var windowHeight;

    function init() {

        elems = document.querySelectorAll('.fadeItem');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }

    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }

    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'fadeItem',
                    'fade-in-element'
                );
            }

            if ((positionFromTop - windowHeight > 1) || (positionFromTop < -70)) {
                elems[i].className = elems[i].className.replace(
                    'fade-in-element',
                    'fadeItem'
                );
            }
        }
    }

    return {
        init: init
    };
};