# Abookmark advanced bookmark & tab manager

Abookmark uses the native bookmarks as its database and it has some advanced features as labels, sticky notes, and trash mode...

Abookmark can store and restore tabs as onetab and toby, but it saves tabs as bookmarks.

<https://chrome.google.com/webstore/detail/abookmark/poeodakgiedndmmkabehagjgpbjkcfgg>

<https://microsoftedge.microsoft.com/addons/detail/abookmark/njffnfkceagiolcjfjdnofoobckaeanb>

<!-- <https://addons.mozilla.org/firefox/addon/abookmark/>

The firefox version is experimental. -->

A bookmark is a sleeping tab and a tab is a living bookmark. The two can be converted into each other. Abookmark is good at managing a large number of tabs and bookmarks, and making them useable.

If abookmark doesn't work for you, there are some related extensions to try out, such as onetab, toby, workona, braintool, tabs outliner, tree style tab (firefox), sidebery (firefox), tab stash (firefox), bookmark sidebar, card bookmarks, finder bookmarks. 

**abookmark tab inbox** is a subset of abookmark. It has the minimal features for tab management.

## Features

- Labels/Tags.
- Tab managements.
- Sticky notes in web pages.
- Trash/Recycle.
- Advanced search.
- Link picking.
- Link replacing.
- Sailing.
- Tree view.
- Link view.
- Spread view & top bar / nav page.
- Data text editor.
- Export any bookmark folder.
- Import selected bookmarks from a file.
- Monthly backup.
- Recent bookmarks.
- Cooperate with native bookmark system.
- Auto sync.
- Keyboard shortcuts.
- Link hint.

## Privacy

All your bookmarks are stored in your browser system. Abookmark does not transfer any of your data to anywhere else.

## Tips

- Unselect all nodes by 'Escape'.
- Select a list of nodes with 'Shift' on checkbox.
- Right click on a checkbox to select it exclusively.
- Select all the nodes in a subfolder by click the left edge of that openned folder.
- Remove marks of trash with 'normalize', or just drag them out of trash folder.
- Click a node's icon to edit it.
- Move bookmarks with [merge].
- Drop nodes into nav buttons ([home], [trash], [top]...).
- If you want to show the title of a bookmark in top bar you can put a letter '!' in front of its title.
- Drop a node on blank area to reveal it.

## Shortcuts

- Search: Ctrl +f
- Undo: Ctrl + z
- Clear selection: Escape
- Remove a node: Delete
- Remove a tag: Shift + click
- Save in bookmark editor: Ctrl + enter
- Spread view (for any tag/folder): Alt + click
- Link hint: `f`
- keyboard manual: ? (disabled by default)
- Alt + store buttons = add bookmarks (without close tabs)
- Shift + store buttons = store without creating new folders.
- Alt + open button = close other tabs & open
- Alt + restore button = close other tabs & restore
- Alt + update button (~) = update & close saved tabs. 

## Concepts

### node

A node is a bookmark or a folder.

### home folder node

The Home folder is the default starting folder of Abookmark.

Abookmark uses the 'Other bookmarks/favorites' as home folder by default.

### inbox folder node

Newly created bookmarks will be put into inbox folder. If there is no inbox folder appoited, home folder will be used as inbox.

### top folder

Top folder is a folder for shortcuts. You can put anything you like into it.

Abookmark uses the 'Bookmarks/Favorites bar' as top folder by default.

### date stamp

Abookmark prefers to store the date in the title explicitly. Generally it is a four-character string. eg: [231a]. The first two characters represent the year: 23 -> 2023. The third character represent the month: 1 -> January. The last character is the date: a -> 10, b -> 11, u->30.
### onetab

A 'tab' in onetab is nothing but a bookmark node in Abookmark.

Save [one tab] / [all the tabs] / [tabs on the right] to inbox folder and close these tabs.

In app page, you can reopen these tabs/bookmarks by click the titles. But if you click the urls on the right side, the node will be removed at the same time. This is what we called 'restore'.

Abookmark is built with performance in mind. You can save thousands of tabs easily. Your data's safety is guaranteed by your native bookmark system.

### labels/tags

User tags should start with '#' and contain no other symbols, but may have '-' or '\_'.

All other symbols are reserved by Abookmark.

'@' tags are for all kinds of links. Generally they are created automatically by Abookmark.

'#!' tags are for macros.

'$' tags are reserved for system usage.

<!-- ### id tag:

format: '@' + 'folder id' + ':' + 'anything'
eg: @100:books

The 'id' may be omitted. Then id tag becomes: '@:' + 'node_name'
eg: @:books

The 'node_name' can be any part of that node's title. When you click a id tag, AsNote will search out all titles matched the 'node_name'. -->

### Trash

When in 'Trash' mode, all deleted nodes will be marked as trash and moved into trash folder. You can restore them by 'Normalize' function.

You should select a trash folder node to enable trash mode. Any folder may be appoited as trash folder, even outside of working folder.

### Recycle

'Recycle' engine may reuse these 'trash' nodes when you create new nodes.

'Recycle' is designd to reuse node ids. Generally this is not necessary if you do not know what it is. So it is disabled by default.

Trash folder reserves at least 50 (100 after v0.6) nodes from recycling by default.

### Fold

'Fold' creates a new folder besides the last selected node and moves all selected nodes into that folder.

Suppose you want to move several nodes into a folder.

### Merge

'Merge' unfolds all other selected folders(if they are folders) and moves them into(or beside) the last selected node.

'Merge' is designed to merge several folders but it is also useful for bookmarks.

### link picking

Suppose you are viewing a page contains many links. You want to bookmark some of the links and read them another day. This pattern is what we called "link picking".

After switched to Picking mode, any links clicked with 'Ctrl' (by default) in that page will be bookmarked and the openning of new tabs will be terminated. You can click any other tab to exit Picking mode.

### link sailing

Generally a bookmark is a note of a 'static' url. But sometimes this is not enough. For example, you are surfing from bookmark of site/page1, then you go to site/page2, site/page3... Now you want the bookmark to point to site/page3. Abookmark can do this automatically. This is the 'link sailing'.

When in sailing mode, Abookmark will always update the bookmark to the latest page of that site you are surfing. That page will inherit the former notes and tags.

<!-- When a tab is in link sailing mode, there will be a 'S' shown in the extention icon badge. -->

<!-- How to trigger 'link sailing'? -->

<!-- - Click a bookmark in Abookmark tagged with #!sailing.
- Click a bookmark in Abookmark whose parent folder tagged with #!sailing.
- Click a bookmark in Abookmark with alt/shift according to your settings.
- Trigger 'toggle sail mode' command in any web page bookmarked. -->

<!-- How to exit 'link sailing'?

- Go to another site.
- Close that tab. -->
<!-- - Trigger 'toggle sail mode' command in that web page. -->

After v0.29, link sailing is integrated into folder/window sailing.

### folder sailing

Folder sailing is a two way binding between bookmarks of the selected folder and the tab bar.

When it is booted:

- a sailing window is formed, with a pinned abookmark page as its sailing engine.
- bookmarks under the sailing folder are loaded as tabs in the sailing window.
- everything happens in the sailing window may change the sailing folder:
  add a tab = create a bookmark
  close a tab = remove the bookmark
  update a tab = update the bookmark
  ...
- everything happens in the sailing folder by the sailing engine may affect the sailing window.
- close the tab of sailing engine = stop sailing

You can setup how many tabs be loaded in one time by the "Max tabs per window" option. Then you can use sail.refresh shortcut to load tabs in corresponding range with current tab as the first one.

There are some other shortcuts for sailing.

warning:

- sailing is dangerous. make a backup first, start from a temporary folder to try it.
- it is not warranted to use other tab managers in the sailing window.
- do not modify the sailing folder outside of its sailing engine.

### window sailing

Window sailing is similar to folder sailing. The key difference is that window sailing uses the bookmark root node as its root folder, and it keeps the cached tabs in a limited amount. As the contract, folder sailing deletes unmatched tabs at the start, but it keeps all the tabs as cache afterwards.

### sailing on nodes

You can select a list of continues nodes as targets to boot the sailing. A temporary window sailing will be booted for them in this case, which will turn to normal window sailing if you click on other bookmarks in the sailing engine.

### context menu: update ~

Update (~) button updates a bookmark by current tab. The tags and notes may be preserved. 

It can also update a folder with the tabs of current window. The folder will have bookmarks corresponding to the tabs but subfolders will be ignored. It also ignores pinned tabs and groups. 

### filter

The 'filter' only effects the first level nodes in main panel. It does not change the database, but only rearranges the view dynamicaly.

You can use filter to do something as 'search in current folder'.

You can use 'regular expression' in the filter, just as in the 'search'.

### top bar

Top bar is similar to chrome/edge's bookmark bar, but it is more 'spreaded'.

You can load the top bar by its keyboard shortcut. If the top bar 'trigger' is active (in settings), you can load the top bar by click on the top of the left edge in a typical web page.

A 'typical web page' is a normal 'http/https' web page.

### spread view

Spread view is the backend of top bar menu, and it works in app page as well. It supports basic dragging / dropping.

Left click on the 'arrows' in a folder (or drag a node upon the right arrow) to load its spread view.

Since v0.21, a icon is a checkbox at the same time. You can use Shift to select successive nodes.

Alt + Click the icons in spread menu to reveal the corresponding node.

### search

The search box supports javascript regular expressions (regex). We add some keywords for search, and they can be generated by search panel.

### data editor

With data editor you can edit the data of bookmarks directly in JSON formate. You can use your favorite text editor for further editing.

In the 'Edit' mode, a node is updated by its id if the corresponding bookmark can be found. Nodes without 'id' field are treated as new bookmarks. A node with '-id' field instead of 'id' field will be removed.

All nodes are treated as new bookmarks if you are in the 'Create' mode.

### snapshot

A snapshot is a copy of all the bookmarks, but you can also copy what you selected. It is another version of export. But they are stored in the browser natively and it keeps 12 snapshots. You can load and view them as file nodes. You can drag to copy the nodes selected.

## FAQ

### Why does Abookmark need permission of "Site access On all sites"?

This is necessary only if you want to show sticky notes in web pages automatically (and to load the top bar trigger since v0.8). This does not affect any other features.

### May I rename the folders created by Abookmark?

Of course.

Since bookmark importing can not restore the 'create date', we suggest you keep the 'date' in the folder name, but this is not enforced.

### How to import/export data?

Abookmark is just bookmarks.
You can use the native bookmark manager to import/export all the data.

### May I transfer my data from Session Buddy?

Yes. Just export your data from Session Buddy in json format, then load the json file from abookmark main menu. You can browse the loaded file nodes then select what you need and drag them into a real bookmark folder.

### May I transfer my data from onetab?

Yes.

You can import onetab's export data into bookmarks directly. But that data has no folder or date information. We write a little exporter to parse and download the full data as bookmarks:

[onetab-to-bookmarks.js](onetab-to-bookmarks.js)

### What's the benefits if I switch from onetab?

- Sync across browsers. You can even view the saved 'tabs' ( as bookmarks) on your mobile phone.
- Transform smoothly from 'saved tabs' to bookmarks at any time.
- As bookmarks, you can see (from the 'star' in the address bar) whether that page has been saved before. You can remove saved pages directly by clicking that bookmark icon (or our app icon, with trash support).
- Backup without losing data structures.
- Fast.
- Trash.

### Is Abookmark running in all web pages in the background?

No.

Abookmark does not inject anything into any web page unless it has notes to show or you evoke it explicitly (by shortcuts or button clicks).

Since v0.8, there is an option (inactive by default) to load a top bar trigger into web pages. This trigger is no more than a button.

Some other in page bookmark extention will load the bookmarks into every page beforehand, so they can boot up immediately when you click. This is OK if it works well for you. But this is not the philosophy of Abookmark. It runs very fast only because it is extremely optimized.

## Buy me a coffee.

paypal: <https://paypal.me/pfcao>

## Email

abookmark.dev@outlook.com
