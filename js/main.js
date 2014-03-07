
$(show_menu).click(function()
{	var viewportWidth = $(window).width();

	if(viewportWidth<"768")
	{
		$(nav).toggle(200);
	}else
	{
		$(nav).show(200);
	}

});

$(window).resize(function() {
	var viewportWidth = $(window).width();

  if(viewportWidth<"768")
	{
		$(nav).hide();
	}else
	{
		$(nav).show();
	}
});