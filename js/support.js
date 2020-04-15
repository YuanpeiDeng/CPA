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

//财管年金复利系数计算器
function PACalculate(i,N){
    return ((1-Math.pow((1+i),-N))/i).toFixed(4);
}

function PFCalculate(i,N){
    return (Math.pow((1+i),-N)).toFixed(4);
}

function FACalculate(i,N){
    return ((Math.pow((1+i),N)-1)/i).toFixed(4);
}

function FPCalculate(i,N){
    return (Math.pow((1+i),N)).toFixed(4);
}
