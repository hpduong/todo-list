//check off specific todos by clicking
$("ul").on("click", "li", function(){
  //if li is gray
  $(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
//removes span and span's parent
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  //stops effects from going to other elements
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  //check input for enter keypress
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + "" + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
