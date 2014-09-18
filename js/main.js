var storage = window.localStorage;

jQuery(document).ready(function($) {
//addStorage();
    readStorage();
    //("#test").text(storage.getItem("itemL0")+$("#itemN0").attr('href'));
    var clock_div = document.getElementById('clock');
    my_clock(clock_div);
    $("html").keydown(function(event){
        //
        keyPress(event)
    }).click(function(){
        window.close();
    });
    if(storage.autoClose === "0"){
        $(".la-anim-2").addClass("la-animate");
        setTimeout( function() {
            $(".la-anim-2").removeClass("la-animate");
            window.close();
        }, 6000 );
    }
});

function keyPress(event){
    switch (event.which){
        case 81:
            window.open(storage.itemL0,"q");
            window.close();
            break;
        case 87:
            window.open(storage.itemL1,"q");
            window.close();
            break;
        case 69:
            window.open(storage.itemL2,"q");
            window.close();
            break;
        case 82:
            window.open(storage.itemL3,"q");
            window.close();
            break;
        case 65:
            window.open(storage.itemL4,"q");
            window.close();
            break;
        case 83:
            window.open(storage.itemL5,"q");
            window.close();
            break;
        case 68:
            window.open(storage.itemL6,"q");
            window.close();
            break;
        case 70:
            window.open(storage.itemL7,"q");
            window.close();
            break;
        case parseInt(storage.itemK8):
            window.open(storage.itemL8,"q");
            window.close();
            break;
        case parseInt(storage.itemK9):
            window.open(storage.itemL9,"q");
            window.close();
            break;
        case 32:
            inputUrl();
            break;
        default :
            window.close();
    }
}

function inputUrl(){
    $("#clock").remove();
    $("#urls").attr('type',"text").focus();
    $("html").unbind("keydown").keydown(function(event){
        if(event.which == 13){
            window.open("http://"+$.trim($("#urls").val())+".com");
        }
    });
}

function readStorage(){
    for(var i=0;i<=7;i++){
        $("#itemN"+i).attr('href',storage.getItem("itemL"+i));
        $("#itemN"+i+" div:first").text(storage.getItem("itemN"+i));

    }
//    $("#itemN1").attr('href',storage.itemL1);
//    $("#itemN2").attr('href',storage.itemL2);
//    $("#itemN3").attr('href',storage.itemL3);
//    $("#itemN4").attr('href',storage.itemL4);
//    $("#itemN5").attr('href',storage.itemL5);
//    $("#itemN6").attr('href',storage.itemL6);
//    $("#itemN7").attr('href',storage.itemL7);
//
//    $("#itemN1 div:first").text(storage.itemN1);
//    $("#itemN2 div:first").text(storage.itemN2);
//    $("#itemN3 div:first").text(storage.itemN3);
//    $("#itemN4 div:first").text(storage.itemN4);
//    $("#itemN5 div:first").text(storage.itemN5);
//    $("#itemN6 div:first").text(storage.itemN6);
//    $("#itemN7 div:first").text(storage.itemN7);

    if(storage.itemK8 != 8){
        $("#itemN8 div:first").text(storage.itemN8);
        $("#itemN8").attr('href',storage.itemN8).attr("class","tile square bg-color-blueDark");
        $("#itemK8").text(String.fromCharCode(storage.itemK8));
    }
    if(storage.itemK9 != 8){
        $("#itemN9 div:first").text(storage.itemN9);
        $("#itemN9").attr('href',storage.itemN8).attr("class","tile square bg-color-gray");
        $("#itemK9").text(String.fromCharCode(storage.itemK9));
    }
}

function my_clock(el){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = h+":"+m+":"+s;
    setTimeout(function(){my_clock(el)}, 1000);
}



