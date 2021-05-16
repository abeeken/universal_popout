// JS to control universal popouts

// Get all the popout and popout--trigger elements on the page
const popouts = document.querySelectorAll('.popout');
const popoutTriggers = document.querySelectorAll('.popout--trigger');

// Watch for a click on a .popout--trigger element
popoutTriggers.forEach(el => el.addEventListener('click', event => {
    var popout = document.querySelector('#' + event.target.dataset.popout);
    // Get the target popout and either make it visible or close it if it's already open
    if( popout.classList.contains('popout--visible') ){
        popout.classList.remove('popout--visible');
    } else {
        // Check whether the popout is static, i.e it can only be closed by one of its own triggers
        if( popout.classList.contains('popout--static') ){
            closePopouts(true);
        } else {
            closePopouts(false);
        }
        popout.classList.add('popout--visible');
    }
}));

function closePopouts(closeStatic){
    // Hide any open popouts
    // Only close static popouts if closeStatic is true, i.e. it's been called by its own trigger
    popouts.forEach(popout => {
        if( popout.classList.contains('popout--static') && closeStatic ){
            popout.classList.remove('popout--visible');
        } else if( !popout.classList.contains('popout--static') ) {
            popout.classList.remove('popout--visible');
        }
    });
}