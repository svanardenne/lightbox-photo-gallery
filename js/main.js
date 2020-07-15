$('#searchbar').on('keyup', function() {
    let search = $('#searchbar').val().toLowerCase();
    let pictures = $('.container a').length;
    console.log(pictures);
    
    for (i = 0; i < pictures; i++) {
        let caption = $('.container a')[i].getAttribute('data-title').toLowerCase();

        if (caption.includes(search)) {
            $('.container a')[i].fadeIn();
        } else
            $('.container a')[i].fadeOut();
    }
});