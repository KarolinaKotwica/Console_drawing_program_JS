<h1>Console_drawing_program_JS</h1>

<h2>Description</h2>
<p>A simple version of console drawing program</p>
<p>How it works?</p>
<br />
<p>1. Create a new canvas</p>
<p>2. Start drawing on the canvas by issuing various commands</p>
<p>3. Quit</p>

<br />

<h2>How to run</h2>
<p>1. Make sure that you have installed <a href='https://nodejs.org/en/download/' target='_blank'>NodeJs</a></p>
<p>2. Open window CMD / Git Bash / Terminal in VSC </p>
<p>3. Navigate to this directory</p>
<p>4. Run command:</p>
<code>node index.js</code>

<br /><br />

<h2>Used module</h2>
<ul>
  <li>Readline - The Readline module provides a way of reading a datastream, one line at a time.</li> 
</ul>

<br />

<h2>Commands</h2>
<code>C w h</code><mark> - Should create a new canvas of width w and height h.</mark><br/>
<code>L x1 y1 x2 y2</code><mark> - hould create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character.</mark><br/>
<code>R x1 y1 x2 y2</code><mark> - Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the 'x' character.</mark><br/>
<code>B x y c</code><mark> - Should fill the entire area connected to (x,y) with "colour" c. The behaviour of this is the same as that of the "bucket fill" tool in paint programs.</mark><br/>
<code>Q</code><mark> - Should quit the program.</mark>
