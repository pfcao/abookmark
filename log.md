# 0.8.0 [2022-02-20]

add:

- top bar.
- spread view.
- mini sidebar.
- filter.
- id tag.

changes:

- search bar: auto input. You can trigger the search in almost anywhere by just type your words.

id tag:

format: '@' + 'folder id' + ':' + 'anything'
eg: @100:books

The 'id' may be omitted. Then id tag becomes: '@:' + 'node_name'
eg: @:books

The 'node_name' can be any part of that node's title. When you click a id tag, AsNote will search out all titles matched the 'node_name'.

Unlike '#' tags, you can not drop into id tags to toggle the tag. But a id tag (of inbox folder on the left side bar) is droppable as a shortcut of the corresponding folder node if it matchs only one folder node.

filter:

The 'filter' only effects the first level nodes in main panel. It does not change the database, but only rearranges the view dynamicaly.

You can use filter to do something as 'search in current folder'.

You can use 'regular expression' in the filter, just as in the 'search'.

top bar:

Top bar is similar to chrome/edge's bookmark bar, but it is more 'spreaded'.

You can load the top bar by its keyboard shortcut. If the top bar 'trigger' is active (in settings), you can load the top bar by click (or hover by mouse) on the top of the left edge in a typical web page.

A 'typical web page' is a normal 'http/https' web page.

Top bar is read only.

spread view:

Spread view is a form of top bar menu in main app panel. Unlike top bar, it supports basic dragging / dropping.

Left click on the 'arrows' in a folder (or drag a node upon the right arrow) to load its spread view.

Click the icons in spread menu to edit the corresponding node.

# 0.7.0 [2022-01-20]

add:

- batch update.
- folder drop down menu (and folder left margin context menu): sort children nodes, select folders, reverse selection...
- settings: open in new tab groups.
- settings: auto time stamp.
- settings: mouse clicks.
- default inbox tags.
- similarity search.
- link sailing.
- bookmarks context menu: sail to current tab.
- bookmark data text editor.

changes:

- new UI design.
- tag editor: 'Enter' to save.
- link picking: auto fold.

What is 'link sailing'?

Generally a bookmark is a note of a 'static' url. But sometimes this is not the best choice. For example, I am surfing from bookmark of site/page1, then I go to site/page2, site/page3... Now I want my bookmark to point to site/page3. AsNote can do this automatically. This is the 'link sailing'.

When in sailing mode, AsNote will always update the bookmark to the latest page of that site you are surfing. That page will inherit the former notes and tags.

When a tab is in link sailing mode, there will be a 'S' shown in the extention icon badge.

How to trigger 'link sailing'?

- Click a bookmark in AsNote tagged with #!sailing.
- Click a bookmark in AsNote whose parent folder tagged with #!sailing.
- Click a bookmark in AsNote with alt/shift according to your settings.
- Trigger 'toggle sail mode' command in any web page bookmarked.

How to exit 'link sailing'?

- Go to another site.
- Close that tab.
- Trigger 'toggle sail mode' command in that web page.

# 0.6.0 [2021-12-27]

add:

- main panel: grid view.
- top folder auto grid view.
- settings: popup startup modes.
- settings: selection auto clear.
- droppable inbox folder tags. The tags of inbox folder will be shown in the side bar.
- folder checkbox.

changes:

- For simplicity, we always set 'Other bookmarks/favorites' as 'home folder' and set 'Bookmarks/Favorites bar' as 'top folder'.
- click a node's icon to show it's details / edit it.
- right click on a checkbox to select it alone.
- right click on a node title to view its details.
- note: max-length : 500.
- new date stamp format.

# 0.5.0 [2021-12-10]

add:

- folder shortcuts.
- temp folder.
- #todo button in action bar.
- url shortcuts in top folder.
- search: star & note button in search box.
- settings: option page.
- settings: start page selector.
- startup review mode.
- unselect nodes by 'Escape'.

changes:

- new design of popup panel.
- rewritten virtual render engine.
- max-width.
- search: improve search engine.
- note: improve stability by shadow dom.
- update notes in pages after bookmark deleted.
- the width of long folder names.

# 0.4.0 [2021-11-20]

- try to restore latest panel.
- add or edit bookmarks with current tab information in a folder.
- update notes in web pages after data changed.
- fix: note height.
- fix: edit modal - keep open if there is any error.
- fix: recycle nodes only with correct data format.

# 0.3.0

- drag with trash.
- add folder-navigator drop support.
- add bookmark top-folder.
- add @folderId label support. (alpha)
- add text edit mode for labels.
- remove work space toggle buttons for simplify.

# 0.2.0

- add bookmark panel in web page with shotcut support.
- fix: the color of scroll bar in dark mode.
- fix: editor of bookmark labels and notes.

# 0.1.0

- add popup bookmark tree panel.

## 0.0.2

- fix lazyload.

## 0.0.1

- init publish.
