$(function() {
  $('#droppable').droppable(
{
    accept: '#draggable',
    drop: function(event, ui)
    {
        ui.draggable.data('dropped', true);
        // awesome code that works and handles successful drops...
    }
});

$('#draggable').draggable(
{
    revert: false,
    start: function(event, ui) {
        ui.helper.data('dropped', false);
    },
    stop: function(event, ui)
    {
        alert('stop: dropped=' + ui.helper.data('dropped'));
        // Check value of ui.helper.data('dropped') and handle accordingly...
    }
});

});