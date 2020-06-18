function TopScroll() {
    document.getElementById('top').scrollIntoView();
} 

let CartSwitch = false;

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function ShowCart() {
    CartSwitch = !CartSwitch;
    if (CartSwitch) {
        document.getElementById('show-order').style.width=('60%');
        document.getElementById('shopping-cart').style.width=('80%');
        document.getElementById('cart').style.opacity=('1');
        document.getElementById('top').style.overflow=('hidden');
        document.getElementById('black-box').style.width=('100%');
        document.getElementById('black-box').classList.add("card-fade-in");
        document.getElementById('sidebar-left-arrow').style.transform=('rotate(180deg)');
        if (width < 767) {
          document.getElementById('show-order').style.width=('100%');
          document.getElementById('shopping-cart').style.width=('100%');
        }
    } else {
        document.getElementById('show-order').style.width=('70px');
        document.getElementById('shopping-cart').style.width=('0px');
        document.getElementById('cart').style.opacity=('0');
        document.getElementById('top').style.overflow=('');
        document.getElementById('black-box').style.width=('0%');
        document.getElementById('black-box').classList.remove("card-fade-in");
        document.getElementById('sidebar-left-arrow').style.transform=('rotate(360deg)');
    }
}

function PizzaFilter1() {
    PizzaFilterReset()
    setTimeout ( function test() {
        document.getElementById('order-list').style.display=('unset');
    }, 200)
    document.getElementById('pizza-filter-img-1').style.opacity=('.7');
    document.getElementById('filter-h2-1').style.color=('#717171');
    document.getElementById('filter-arrow-1').style.transform=('rotate(90deg)');
    document.getElementById('order-list').classList.add("pizza-list-order-page");
}
function PizzaFilter2() {
    PizzaFilterReset()
    setTimeout ( function test() {
        document.getElementById('order-list').style.display=('unset');
    }, 200)
    document.getElementById('pizza-filter-img-2').style.opacity=('.7');
    document.getElementById('filter-h2-2').style.color=('#717171');
    document.getElementById('filter-arrow-2').style.transform=('rotate(90deg)');
    document.getElementById('order-list').classList.add("pizza-list-order-page");
}
function PizzaFilter3() {
    PizzaFilterReset()  
    setTimeout ( function test() {
        document.getElementById('order-list').style.display=('unset');
    }, 200)
    document.getElementById('pizza-filter-img-3').style.opacity=('.7');
    document.getElementById('filter-h2-3').style.color=('#717171');
    document.getElementById('filter-arrow-3').style.transform=('rotate(90deg)');
    document.getElementById('order-list').classList.add("pizza-list-order-page");
}
function PizzaFilter4() {
    PizzaFilterReset()
    setTimeout ( function test() {
        document.getElementById('order-list').style.display=('unset');
    }, 200)
    document.getElementById('pizza-filter-img-4').style.opacity=('.7');
    document.getElementById('filter-h2-4').style.color=('#717171');
    document.getElementById('filter-arrow-4').style.transform=('rotate(90deg)');
    document.getElementById('order-list').classList.add("pizza-list-order-page");
}
function PizzaFilterReset() {
    document.getElementById('pizza-filter-img-1').style.opacity=('1');
    document.getElementById('pizza-filter-img-2').style.opacity=('1');
    document.getElementById('pizza-filter-img-3').style.opacity=('1');
    document.getElementById('pizza-filter-img-4').style.opacity=('1');
    document.getElementById('filter-arrow-1').style.transform=('rotate(0deg)');
    document.getElementById('filter-arrow-2').style.transform=('rotate(0deg)');
    document.getElementById('filter-arrow-3').style.transform=('rotate(0deg)');
    document.getElementById('filter-arrow-4').style.transform=('rotate(0deg)');
    document.getElementById('filter-h2-1').style.color=('#fff');
    document.getElementById('filter-h2-2').style.color=('#fff');
    document.getElementById('filter-h2-3').style.color=('#fff');
    document.getElementById('filter-h2-4').style.color=('#fff');
    document.getElementById('order-list').style.display=('none');
    document.getElementById('order-list').classList.remove("pizza-list-order-page");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (width > 767) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById('top').classList.add("nav-collapse-js");
        } else {
            document.getElementById('top').classList.remove("nav-collapse-js");
        }
      }
}

if (width < 767) {
    document.getElementById('top').classList.add("nav-collapse-js");
}

function navUnCollapse() {
    document.getElementById('top').classList.remove("nav-collapse-js"); 
}


function addCart() {
    document.getElementById('sidebar-left-arrow').classList.add("shake-arrow");
    setTimeout ( function removeAnimationShake() {
        document.getElementById('sidebar-left-arrow').classList.remove('shake-arrow');
    }, 1000)
}


