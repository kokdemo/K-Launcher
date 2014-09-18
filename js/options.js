// 将选项保存在 chrome.storage 中。
var storage = window.localStorage;

jQuery(document).ready(function($) {
//addStorage();
    readStorage();
    selfKeydown("itemK8");
    selfKeydown("itemK9");
//    $("#itemK8").keydown(function(event){
//        $("#itemK8").val("");
//        storage.itemK8 = event.which;
//    });
//    $("#itemK9").keydown(function(event){
//        $("#itemK9").val("");
//        storage.itemK9 = event.which;
//    });
    $("#autoClose").click(function(){
        if(storage.getItem("autoClose") === "0"){
            storage.setItem("autoClose",1);
        }
        else{
            storage.setItem("autoClose",0);
        }
    });
    $("#submit").click(function(){
        addHead();
        addItem();
    });
});

function addHead(){
    var patt = new RegExp("[a-zA-z]+://[^s]*");
    for(var i=0;i<=9;i++){
        var addLink = storage.getItem("itemL"+i);
        if(!(patt.test(addLink))){
            addLink = "http://"+addLink;
            $("#itemL"+i).val(addLink);
        }
    }
}

function selfKeydown(key){
    $("#"+key).keydown(function(event){
        $("#"+key).val("");
        storage.setItem(key,event.which);
    });
}

function readStorage(){
    if (!storage.getItem('autoClose')) storage.setItem('autoClose',"0");
    for(var i=0;i<=9;i++){
        $("#itemL"+i).val(storage.getItem("itemL"+i));
        $("#itemN"+i).val(storage.getItem("itemN"+i));
    }
//    $("#itemL0").val(storage.itemL0);
//    $("#itemL1").val(storage.itemL1);
//    $("#itemL2").val(storage.itemL2);
//    $("#itemL3").val(storage.itemL3);
//    $("#itemL4").val(storage.itemL4);
//    $("#itemL5").val(storage.itemL5);
//    $("#itemL6").val(storage.itemL6);
//    $("#itemL7").val(storage.itemL7);
//    $("#itemL8").val(storage.itemL8);
//    $("#itemL9").val(storage.itemL9);
//    $("#itemN0").val(storage.itemN0);
//    $("#itemN1").val(storage.itemN1);
//    $("#itemN2").val(storage.itemN2);
//    $("#itemN3").val(storage.itemN3);
//    $("#itemN4").val(storage.itemN4);
//    $("#itemN5").val(storage.itemN5);
//    $("#itemN6").val(storage.itemN6);
//    $("#itemN7").val(storage.itemN7);
//    $("#itemN8").val(storage.itemN8);
//    $("#itemN9").val(storage.itemN9);
    $("#itemK8").val(String.fromCharCode(storage.itemK8));
    $("#itemK9").val(String.fromCharCode(storage.itemK9));
    if(storage.autoClose === "1")
        {$("#autoClose").attr("class","btn btn-large btn-danger").text("关闭自动关闭")}
    else
        {$("#autoClose").attr("class","btn btn-large btn-primary").text("开启自动关闭")}
}

function addItem(){
    for(var i=0;i<=9;i++){
        var addLink = $("#itemL"+i).val();
        storage.setItem("itemL"+i,addLink);
        var addNames = $("#itemN"+i).val();
        storage.setItem("itemN"+i,addNames);
    }
//    storage.itemL0 = $("#itemL0").val();
//    storage.itemL1 = $("#itemL1").val();
//    storage.itemL2 = $("#itemL2").val();
//    storage.itemL3 = $("#itemL3").val();
//    storage.itemL4 = $("#itemL4").val();
//    storage.itemL5 = $("#itemL5").val();
//    storage.itemL6 = $("#itemL6").val();
//    storage.itemL7 = $("#itemL7").val();
//    storage.itemL8 = $("#itemL8").val();
//    storage.itemL9 = $("#itemL9").val();
//    storage.itemN0 = $("#itemN0").val();
//    storage.itemN1 = $("#itemN1").val();
//    storage.itemN2 = $("#itemN2").val();
//    storage.itemN3 = $("#itemN3").val();
//    storage.itemN4 = $("#itemN4").val();
//    storage.itemN5 = $("#itemN5").val();
//    storage.itemN6 = $("#itemN6").val();
//    storage.itemN7 = $("#itemN7").val();
//    storage.itemN8 = $("#itemN8").val();
//    storage.itemN9 = $("#itemN9").val();
}

