# Abookmark change log

Extentions are forbidden to run inside system pages, other extention pages or chrome/edge store for security reasons.

As chrome is going to shut down the support of manifest v2, we have to migrate to manifest v3. Chrome > v105 is required then. (Since google postponed the process, we will revise the schedule.)

<!--
# 0.30.0

unsupported:

- bookmarket -->
<!-- - [nav] context menu: 'Create shortcut in top folder'. -->

# 0.32.0 [2023-5-15]

abookmark tab inbox: a new extension which is a subset of abookmark. It has the minimal features for tab management.

# 0.31.3

add:

- sort nodes by date added.
- download a snapshot.

fix:

- file import: id collision.

# 0.31.2

fix:

- restore.
- buffer nodes: dateAdded.

# 0.31.1

add:

- link view. Link view renders bookmarks as raw links. It takes the place of grid view.
- buffer nodes: now it is possible to set a buffer node as inbox folder. It is also possible to drop a buffer node into the background area to reveal it in the manager in nav page. The buffer nodes are for testing purposes only.

remove:

- grid view. After nav page and spread view matures, grid view is not used much. It is removed for simplicity. 

fix:

- context menu: add separator
- search: recent

# 0.31.0 [2023-5-1]

add:

- main menu: snapshots. A snapshot is a copy of all the bookmarks, but you can also copy what you selected. It is another version of export. They are stored in the browser natively and it keeps 12 snapshots. You can load and view them as file nodes. You can drag to copy the nodes selected.
- context menu: Update (~) button updates a bookmark by current tab. The tags and notes may be preserved. Now it can also update a folder with the tabs of current window. The folder will have bookmarks corresponding to the tabs but subfolders will be ignored. It also ignores pinned tabs and groups.  
- context menu: Alt + update (~) = update & close saved tabs.
- context menu: open + alt = close other tabs & open
- context menu: restore + alt = close other tabs & restore

remove:

- sail: Add "from title" tag to incoming nodes
- sail: Add "from link" tag to incoming nodes

fix:

- undo: remove: recover the marks.

# 0.29.4

add:

- import from the json file exported by 'Session Buddy'.
- shortcuts: sail.exit
- settings: sail: close the tabs when exit sailing.
- vi keyboard: sail (G).

fix:

- restore subfolders recursively.
- sail: reload notes after the tab updated.

# 0.29.3

add:

- sail: sail from selected continuous bookmarks.

# 0.29.2

add:

- basic firefox support.
- settings: favicon provider.

# 0.29.1

add:

- sail: sail from a url bookmark.
- settings: sail: close the cache when exit sailing.

# 0.29.0 [2023-04-10]

add:

- url tag: tags start with 'http(s)://'. eg: https://google.com. Clicking on a url tag is equal as clicking on a bookmark.
- context menu: fold with url tag.
- settings: sailing: fold with url tag.
- settings: lab: note: Do not load notes without meta data. This option gives you a choice to add a simple note to a bookmark but do not let it to be loaded as sticky note in its web page.

fix:

- drag & drop support for address bar url. You can drag a url from address bar and drop it into a folder.
- buffer nodes: remove folders recursively.

# 0.28.5

- context menu: search in a folder.
- new sticky note framework.

# 0.28.4

- sailing: auto fix order.
- sailing: create window sailing.
- tag list.
- fix folder.html.click

# 0.28.0 [2023-01-05]

add:

- window sailing.
- folder sailing with folder support.
- sailing: tab cache.
- keyboard: go to first tab.
- keyboard: sail.refresh. sail.fold. sail.upward (go to upper level).
- temporary node order.
- buffer nodes (preview).

Buffer nodes are nodes stored in local storage. They are similar to bookmarks but are not counted as bookmarks. You can active it in settings-lab.

Window sailing is similar to folder sailing. The key difference is that window sailing uses the bookmark root node as its root folder, and it keeps the cached tabs in a limited amount. As the contract, folder sailing deletes unmatched tabs at the start, but it keeps all the tabs as cache afterwards.

Sailing is powerful. It is good at exploring. But it also can be used as your "tree style tab". It is a vertical tab bar. It is a workspace manager. It is a task manager. It depends on how you use it.

# 0.27.0 [2022-12-15]

add:

- context menu: set home folder id.
- search in a folder.
- tab nodes.
- folder sailing.
- lazy loader.

This edition may be buggy, for we have rewritten the data engine for further develpments. The new features are added for preview. They are supposed to be improved gradually.

### Reveal button.

Though it has been there for a long time, we have never given the reveal button a document. Just like the Esc key, the effect of the reveal button depends on it's running environment:

1. If there is one bookmark selected, it will search for related nodes of that bookmark.
2. If it is loaded in another web page or in popup mode: it will reveal the corresponding bookmark of the tab url (if the page is saved before) or search for related nodes of that url.
3. If it is in sail mode, it will reveal the sailing folder.
4. If it is in the app page and there is nothing else to reveal, it will reveal the current folder. In this case, it is equal to go to the upper level.

### What is tab nodes?

Tab nodes are tabs shown as virtual bookmarks. They are a bridge between bookmarks and tabs.

### What is folder sailing?

For simplicity, think of a sailing folder as the tab bar of the sailing window. Nodes under the sailing folder act as tab nodes temporarily.

When it is booted:

- a sailing window is formed, with a pinned abookmark page as its sailing engine.
- bookmarks under the sailing folder are loaded as tabs in the sailing window. (sub-folders are not loaded in this edition)
- everything happens in the sailing window may change the sailing folder:
  - add a tab = create a bookmark
  - close a tab = remove the bookmark
  - update a tab = update the bookmark
  - ...
- everything happens in the sailing folder by the sailing engine may affect the sailing window.
- close the tab of sailing engine = stop sailing
- It will fallback to a normal tab if there is some other tab before the sailing engine in the sailing window.

notice:

- Sailing is dangerous. make a backup first, start from a temporary folder as your sandbox.
- It is not warranted to use other tab managers in the sailing window.
- Do not modify the sailing folder outside of its sailing engine.

Folder sailing is a superset of link sailing. The auto mode of link sailing has been removed for simplicity. It is suggested to use the "~" (sail to current tab) in context menu to update the node by current tab URL.

# 0.26.0 [2022-11-10]

add:

- [nav] tile mode - bigger icons & seperated bookmarks and folders.
- [popup] nav view.
- context menu: set top folder id.
- context menu: cut & paste
- {app path}/mini.html (for vivaldi side panel, etc).
- basic touch support.

fix:

- [nav] context menu: path: click to reveal.
- note width.

# 0.25.0 [2022-10-20]

add:

- rewritten drag & drop engine. Now you can drop a link into abookmark. It also supports to drag abookmark nodes across windows and drop it anywhere.
- [nav] integrated manager in nav.
- [nav] drop a bookmark node on the blank area in nav page to reveal it or to attach to topbar.
- [nav] topbar pin mode.
- [nav] nav trigger: +Ctrl to open in new tab.
- [settings] url click options in tree view.
- [search] search for recently added bookmarks according abookmark date stamp.
- [search] search results sorted by date.
- separate date stamp field for title in bookmark editor.
- date column in tree view.
- recycle nodes.

fix:

- merge a single folder = unfold it.
- [nav] right edge trigger.
- link picking's working folder.
- more eye-pleasing color scheme in dark theme.

remove:

- drag & drop for tags.
- tag spread mode.
- Nav: Boot with link hints.
- Top folder auto grid view.

deprecated:

The following features may be removed in future versions:

- id tag.
- auto link sailing.

# 0.23.0 [2022-09-25]

change:

- By default newly created single bookmark will be stored under inbox folder directly (not under its first subfolder).

add:

- [tab] Store tabs by groups as folders
- [tab] Store current group
- [tab] Alt + click store buttons = add bookmarks (without close tabs)
- [tab] Shift + click store buttons = store without creating new folders.
- [nav] shortcut: open nav page. It always opens in new tab.
- vi-like keyboard (preview).
- keyboard manual: ? (disabled by default)

remove:

- recycle nodes.

fix:

- The crash caused by removing nodes in search results.
- Notes in nav.

# 0.22.0 [2022-09-10]

add:

- [nav] notes in nav page.
- [nav] link hint (vimium-like): `f`. Type space to confirm if necessary. Escape -> exit.
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

The following features may be removed in comming versions:

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
