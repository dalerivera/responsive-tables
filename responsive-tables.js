$(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if(!($(".responsive").length)) {
      return;
    }
    if($(window).width() < 767) {
      evenHeight($(".pinned table")
        ,$(".scrollable table"));
    }
    if (($(window).width() < 767) && !switched ){
      switched = true;
      $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 767)) {
      switched = false;
      $("table.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
  $(window).on("resize", updateTables);
  $(window).on("updateTables", updateTables);
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");

    setCellHeights(original, copy);
    evenHeight(original,copy);
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    //tr_copy.each(function (index) {
    // $(this).height(heights[index]);
    //});
  }
  function evenHeight(original,copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [],
        copy_heights = [],
        height_differences = [];
    
    tr.each(function (index) {
      heights[index] = $(this).outerHeight(true);
    });
    tr_copy.each(function (index) {
      copy_heights[index] = $(this).outerHeight(true);
      height_differences[index] = heights[index] - copy_heights[index];
      if(height_differences[index] > 0) {
        $(this).height(heights[index]);
        height_differences[index] = 0;
      }
    });
    tr.each(function (index) {
      heights[index] = $(this).outerHeight(true);
      height_differences[index] = heights[index] - copy_heights[index];
      if(height_differences[index] < 0) {
        $(this).height(copy_heights[index]);
        height_differences[index] = 0;
      }
    });
  }
});
