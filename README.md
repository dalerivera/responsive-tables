#Responsive Tables

This responsive table solution is based off of [Zurb's responsive table solution] (http://zurb.com/playground/responsive-tables), and is designed to work with the Foundation Framework, but works just as well without it. 
Some enhancements and tweaks were added to Zurb's solution to make the tables beautifully responsive right out of the box. There is no unnecessary data hiding, and users can still compare rows. 

View a simple demo [here] (http://dalerivera.github.io/responsive-tables/).
### Step 1: Download responsive-tables.js and responsive-tables.css

### Step 2: Add these files in your html document
Note: Add the responsive-tables.js file **AFTER** jQuery.

````html
<head>
    ...
    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="responsive-tables.js"></script>
    <link rel="stylesheet" href="css/responsive-tables.css" />
    ...
</head>
````
### Step 3: Add the class to your table
To actually make the table responsive, add ```` class = "responsive" ```` to the table. 

##Using responsive tables with dynamic content

If you are first adding data dynamically with javascript, set the class to a placeholder initially

````html 
<table class = "will_be_responsive">
````

Once you have finished changing the data, add the responsive class to the table like so: 

````js 
$(".will_be_responsive").addClass("responsive"); 
```` 

At this point, you will still need to force the update to the table, so use the trigger 

````js 
$(window).trigger("updateTables"); 
```` 

You can use this trigger at any point in your javascript to manually trigger the tables to be updated. Note that the tables are also updated on window redraw, resize, and load.
