#Responsive Tables
=================
A solution for responsive tables.

This solution is based off of [Zurb's responsive table solution] (http://zurb.com/playground/responsive-tables), but adds some enhancements and tweaks that give tables a very user friendly behavior, and allows a developer to use responsive tables with dynamic table content. 

To make tables responsive, first add these two files to your html document. 
Note: Add the js file **AFTER** jQuery.

````
...
<script src="js/jquery.js"></script>
<script type="text/javascript" src="responsive-tables.js"></script>
<link rel="stylesheet" href="css/responsive-tables.css" />
````
To actually make the table responsive, add 
```` class = "responsive" ```` 
to the table. 

##Using responsive tables with dynamic content
=================
If you are first adding data dynamically with javascript, first set the class to a placeholder 
```` class = "will_be_responsive" ````. 
Once you have changed the data, add the responsive class like so: 
```` $(".will_be_responsive").addClass("responsive"); ````. 
At this point, you will still need to force the update to the table, so use the trigger 
```` $(window).trigger("updateTables"); ```` .
You can use this trigger at any point in your javascript to manually trigger the tables to be updated. Note that the tables are also updated on window redraw, resize and load.
