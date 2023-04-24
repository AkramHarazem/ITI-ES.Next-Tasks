1) Create your own function that accepts multiple parameters to generate course information and display it.
   Assume that the function accepts course information as object that contains courseName, courseDuation, courseOwner.
   if any of required field is not set in function call it should have default values as follows: courseName=”ES6” , courseDuration=”3days”, courseOwner=”JavaScript”.
   
Bonus: through exception if passed object includes properties other than those described above
Note: user is allowed not to pass all of these properties, he can pass needed properties only

2) Create a generator that returns fibonacci series that takes only one parameter. Make two different implementations as described below:

a. the parameter passed determines the number of elements displayed from the series.
b. the parameter passed determines the max number of the displayed series should not exceed its value.

3) create your own object that has [Symbol.replace] method so that if any long string (e.g. its length exceed 15 characters )called replace and pass your object
    as replace method parameter it will display only 15 character of string with terminating “…”

4) Create an iterable object by implementing @@iterator method i.e. Symbol.iterator, so that you can use for..of and retrieve its properties.
   Bonus: make proper updates to retrieve the object’s properties and its values.
