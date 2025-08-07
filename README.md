# Home-Assistant-Search-button-hider-and-shortcut-blocker-for-non-admins
This will hide the search button and block the "e" and "d" for users that are not admin.

This is not really giving you a secured Home Assistant, but it is good enough for use with kids.

Install:

Copy hide-search.js to /config/www/

The config directory is the place where your configuration.yaml for home assistant is.
If there is no www directory, just add it.

Add it as a frontend resource:
Settings->Dashboards
On the top right click the 3 dots and click Resources.
Click Add resource

Select Javascript module
put in url:  /local/hide-search.js
Click create.

If it does not seem to work, clear your browser cache.
