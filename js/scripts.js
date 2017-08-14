$(document).ready(function(){
  $('#food').submit(function(event){
    event.preventDefault();
    var item1 = $('#item1').val();
    var item2 = $('#item2').val();
    var item3 = $('#item3').val();
    var item4 = $('#item4').val();
    var item5 = $('#item5').val();
    var groceryArray = [item1, item2, item3, item4, item5];

    groceryArray.forEach(function(listItem) {
      listItem.toUpperCase();
    });

    groceryArray.forEach(function(listItem){
      $('#food').hide();
      $('ul#list').append("<li>" + listItem + "</li>");
    });
  });
});
