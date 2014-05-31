Column Creating for External City List
=============================

<i>This work was given for me as an home assignment from a famous company.</i>

This small script is used to order cities which are from a remote list, into an order and part them equally for each column.

This piece of code:

<ul>
	<li>gets a list of cities into a context,</li>
	<li>orders them alphabetically with given numbers of colums (exm. setNumberOfColumns(3)),</li>
	<li>creates a columns list in native javascript (exm. createDOMElementsForCityListColumnsWrapper(), createCityListColumns()),</li>
	<li>appends cities into columns (exm. addCitiesIntoColumns(), appendObjectsIntoColumns()),</li>
	<li>dispatches event handlers for every row of cities for their mouse click events (exm. addEventHandlersForCityCaptions()).</li>
</ul>