// 控制accordiond開關
function accordionStateSwitch(state) {
    let accordionButtonlist = document.querySelectorAll('#section-service .accordion-button')
    var accordionlist = document.querySelectorAll('#section-service .accordion-collapse')
    var i = 0;
    for (i = 0; i < accordionlist.length; i++) {
        if (state)
        {
            accordionlist[i].classList.add('show');
            accordionButtonlist[i].classList.remove('collapsed');
        }
        else
        {
            accordionButtonlist[i].classList.add('collapsed');
            accordionlist[i].classList.remove('show');

        }
    }


}
var scrollSpy = new bootstrap.ScrollSpy(document.body);