$(document).ready(function() {

  // Imagination!
area = 0;
people = 0;
  $.ajax({
      url: "https://bb-election-api.herokuapp.com/",
      method: 'GET',
      data: {}, // this is info were sending to the server. in this case - its meaningless.
      dataType: 'json'
    }).done(function(data) {
    console.log(' loaded successfully');
    people = data

  $.each(people['candidates'] , function (x){
    $( "#people" ).append( "<li>" + data['candidates'][x]['name'] + "</li> " );
    });

    }).fail(function () {
      console.log('failed to load');
    })






});
