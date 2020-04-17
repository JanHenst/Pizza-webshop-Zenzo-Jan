function TopScroll() {
    document.getElementById('top').scrollIntoView();
} 

let CartSwitch = false;

function ShowCart() {
    CartSwitch = !CartSwitch;
    if (CartSwitch) {
        document.getElementById('shopping-cart').style.width=('800px');
        document.getElementById('top').style.overflow=('hidden');
        document.getElementById('black-box').style.width=('100%');
        document.getElementById('black-box').classList.add("card-fade-in");
        document.getElementById('sidebar-left-arrow').style.transform=('rotate(180deg)');
    } else {
        document.getElementById('shopping-cart').style.width=('0px');
        document.getElementById('top').style.overflow=('');
        document.getElementById('black-box').style.width=('0%');
        document.getElementById('black-box').classList.remove("card-fade-in");
        document.getElementById('sidebar-left-arrow').style.transform=('rotate(360deg)');
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('nav').style.display=('none');
    document.getElementById('nav-collapse').style.display=('flex');
  } else {
    document.getElementById('nav').style.display=('flex');
    document.getElementById('nav-collapse').style.display=('none');
  }
}
