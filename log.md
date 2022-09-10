tips:

Extentions are forbidden to run inside system pages, other extention pages or chrome/edge store for security.

Click folders/tags with 'alt' to switch between spread view  and normal view. 

# 0.22.0 [2022-09-10]

add:

- [nav] notes in nav page.
- [nav] link hint (vimium-like): `f`,`f.`. Type white space to confirm if necessary. Escape -> exit.
- [spread] tag & folder spread view. Alt + click. 
- [spread] icon as checkbox.
- [spread] pager.
- [spread] settings: spread grid maxWidth, minWidth.
- settings: tag - spread.
- settings: auto link hint on nav page.
- settings: app page max width.
- settings: semi-trash mark for duplicate urls. It will add '~~' at the title & the url.
- settings: nav trigger - right click on the right edge.
- context menu: reveal in native manager.
- search: folder search.

change:

- tags: **Shift + click to remove a tag** from the node.
- [settings] click: active -> active new tab

remove:

- [settings] Nav/spread click options.

fix:

- undo: delete.
- context menu boot position.

improve:

- note loading.
- bing bg updates.

# 0.20.0 [2022-08-20]

add:

- hotkey: undo: Ctrl + z. It works sometimes.
- hotkey: 'delete' to remove selected nodes.
- tags: ~Alt~ Shift + click to remove the tag from the node.
- topbar: ~Ctrl/Shift+click on the icon of a node to multi-select.~
- topbar: ~option page button on the right corner.~
- spread: ~Click on the icons to edit.~
- settings: Full date stamp for new folders.
- settings: Link picking : auto stop.
- settings: Spread arrow.
- editor: create folder.
- editor: Ctrl + enter to submit.
- context menu: store tabs in context.
- bookmarklet.

improve:

- json & html file loader and virtual node preview.
- reveal & related button.
- toolbar.

From this version, 'all_urls' permission is not required but optional if you do not need the sticky notes & nav triggers in page.

fixed:

- settings: popup start from gridview

removed:

- bookmark divider.
- top sites.

deprecated:

The following features may be removed in next version:

- Folder left edge context menu: advanced selection commands.
- Drop nodes into outlined tags (#todo, #!trending...) to tag them.
- [inbox] folder tags will be shown in nav tag bar (under nav buttons).

# 0.16.0 [2022-07-20]

add:

- settings: toggle topbar bookmark title.

improve:

- settings/option page.
- topbar drag & drop

# 0.14.0 [2022-06-20]

add:

- settings: topbar background color.
- settings: topbar click to open in current tab.
- bookmark bar: If you want to show the title of a bookmark in top bar instead of its favicon you can put letter '!' in front of its title.

improve:

- stability of note & nav trigger

fix:

- spread view drag & drop.
- create note in unsaved page.

# 0.12.0 [2022-05-30]

add:

- link view in edit panel.
- search panel.

The search box supports javascript regular expressions. Now we add a panel to generate regular expressions for title/label/url. And we add some keywords for searching.

change:

- data editor.

In the 'Edit' mode, a node is updated by its id if the corresponding bookmark can be found. Nodes without 'id' field are treated as new bookmarks. A node with '-id' field instead of 'id' field will be removed.

All nodes are treated as new bookmarks if you are in the 'Create' mode.

# 0.10.0 [2022-04-20]

add:

- bookmark divider.
- shortcuts: save current tab.
- new tab: bing wallpapers.
- spread: context menu.
- settings: spread - topsites.
- duplicate bookmark checker.
- extension icon: bookmark(or remove) current tab directly.

improve:

- notes: resizable.
- title hovers with node path.
- search.

change:

- restore/open: will open all bookmarks in a folder (include subfolders).

# 0.9.0 [2022-03-15]

add:

- JSON import/export.
- auto monthly backup.
- settings: duplicate url.
- settings: new tab background.
- Top bar: drag & drop support.

fix:

- search bar: text composition system.

# 0.8.0 [2022-02-20]

add:

- top bar.
- spread view.
- mini sidebar.
- filter.
- id tag.

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

- add bookmark panel in web page with shortcut support.
- fix: the color of scroll bar in dark mode.
- fix: editor of bookmark labels and notes.

# 0.1.0

- add popup bookmark tree panel.

## 0.0.2

- fix lazyload.

## 0.0.1

- init publish.
