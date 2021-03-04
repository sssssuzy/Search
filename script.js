getList();
$("#list").on("click","a", function(){
    var title=$(this).attr("title");
    var authors=$(this).attr("authors"); 
    var contents=$(this).attr("contents");
    var price=$(this).attr("price");   
    var image=$(this).find("img").attr("src");                   
    $("#image").attr("src", image);
    $("#title").html(title);
    $("#authors").html(authors + "(" + price + "원)");
    $("#contents").html(contents);
});
$("#btnMore").on("click", function(){
    size += 5;
    getList();
});
$("#txtQuery").on("keydown", function(){            
    size = 5;
    getList();
});
function getList(){
    var query=$("#txtQuery").val();
    $.ajax({
        type:"get",
        url: url,
        dataType:"json",
        data:{"query":query, "size":size},
        headers:{"Authorization": "KakaoAK d3ddfc03751730ccdffaedd440d93708"},
        success:function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}