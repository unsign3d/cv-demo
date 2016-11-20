$('document').ready(function(){
  $.get('cv.json', function(data){
    $("body > div.col-sm-6.left-column > pre")
      .html(Prism.highlight(data, Prism.languages.json));
  });
});
