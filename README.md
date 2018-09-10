
Hi there!!

This is my response to phase2 of the recruitment process: programming task.

Here is a first 'version' of the endpoint/api you asked me to code.

Please take into account this is a first approach due to I don't have to much information to develop a more complete app that actually processes real data. Please feel free to comment or ask me if you have any questions.

To run the Node/Express server just run the following command:
'npm run dev' from inside the project directory at the terminal.

In the browser go to:
-> 'localhost:5000/'' to see a Welcome message!!
or
-> 'localhost:5000/api/highlights/latS/longS/latE/longE' to GET the list of highlights.
Where: 
latS = is the latitude of the starting point
longS = is the longitude of the starting point
latE = is the latitude of the end point
longE = is the longitude of the end point

For Example:
'http://localhost:5000/api/highlights/-34.646731/-58.458747/-34.646731/-58.458747'

Note: At this point in time, the returned list of highlights is hardcoded and does not depend on the input data. Also the api expects to receive this four params in this path at /api/highlights, but currently there is no validation on this params of any kind.
