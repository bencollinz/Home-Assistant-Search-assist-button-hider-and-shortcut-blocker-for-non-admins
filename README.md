# Home-Assistant-Search-button-hider-and-shortcut-blocker-for-non-admins
This will hide the search button and block the "e" and "d" for users that are not admin.

This is not really giving you a secured Home Assistant, but it is good enough for use with kids.

<p>Install:</p>

<p>Copy hide-search.js to /config/www/</p>

<p>The config directory is the place where your configuration.yaml for home assistant is.</p>
<p>If there is no www directory, just add it.</p>

<p>Add it as a frontend resource:</p>
<p>Settings->Dashboards</p>
<p>On the top right click the 3 dots and click Resources.</p>
<p>Click Add resource</p>

<p>Select Javascript module</p>
<p>put in url:  /local/hide-search.js</p>
<p>Click create.</p>

<p>If it does not seem to work, clear your browser cache.</p>
