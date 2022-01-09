// 控制accordiond開關
function accordionStateSwitch(state) {


    var accordionlist = document.querySelectorAll('#service .accordion-collapse')
    var i = 0;
    for (i = 0; i < accordionlist.length; i++) {
        if (state)
            accordionlist[i].classList.add('show');
        else
            accordionlist[i].classList.remove('show');
    }


}
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });