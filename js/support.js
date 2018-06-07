$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    //scrollspy set/remove active
    $('.scrollspy').scrollSpy();
    $('.scrollspy').on('scrollSpy:enter', function() {
        $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    });
    $('scrollspy').on('scrollSpy:exit', function(){
        $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active');
    });
});

function TanYuChengBen(orig,rate,interest,year){
    if(year == 0){
        return orig;
    }
    else{
        orig = orig*(1+rate)-interest;
        return TanYuChengBen(orig,rate,interest,year-1);
    }
}
