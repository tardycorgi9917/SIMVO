function renderSortable()
{
  $( '.sortable' ).sortable( {
    start: function( event, ui ) {
      is_dragging = true;
    },
    connectWith: ".sortable",
    stop: function( event, ui ) {
      is_dragging = false;
    }
  }).on( 'mousemove', function( e ){});

  $( ".sortable" ).sortable( {
      placeholder: 'object_ouline hvr-pulse',
      cancel: '.credit_counter, .error_course_message',
      receive: function( event, ui ) {

      var new_semester = get_semester( event.target.attributes.id.nodeValue );
      var id = ui.item.context.id;
      var classes = ui.item.context.className;

      //console.log("Moving current course");
      $.ajax( {
        type: 'post',
        url: '/flowchart/move-course',
        data: {
          semester: new_semester,
          id: id
        },
        success: function( data ) {
          var response = JSON.parse( data );
          console.log( response );
        }
      })
    }
  });
}
