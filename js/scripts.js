$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    const words = $("#sentence").val().split(" ");
    const newWords = words.filter(word => word.length > 3);
    const reversed = newWords.reverse();
    $("#heading").append(reversed.join(" ")); 
  });
});
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// ?const result = words.filter(word => word.length > 6);