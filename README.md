# Abookmark asnote preview

Advanced bookmark manager comes with labels, sticky notes, and trash mode.

Abookmark has the key features of onetab for tab managements, but use bookmarks as backend.

## Features

- Labels/Tags.
- Tab managements.
- Sticky notes in web pages.
- Trash and Recycle mode.
- Link Picking.
- Link sailing.
- Tree view.
- Grid view.
- Spread view & top bar.
- Data text editor.
- Export any bookmark folder.
- Cooperate with native bookmark system.
- Auto sync.
- Shortcuts

## Privacy

All your data are stored in your browser. Abookmark do not transfer any of your data to anywhere else.

## Tips

- Select a list of nodes with 'Shift'.
- Unselect all nodes by 'Escape', or by click the parentheses in the action bar.
- Select all the nodes in a subfolder by click the left edge of that open folder.
- Folder left edge context menu: advanced selection commands.
- right click on a checkbox to select it exclusively.
- right click on a node title to view its details.
- Remove marks of trash with 'normalize', or just drag them out of trash folder.
- click a node's icon to edit it.
- Move bookmarks with [merge].
- Drop nodes into nav buttons ([home], [trash], [top]...) to move them.
- Drop nodes into outlined tags (#todo, #!trending...) to tag them.
- [inbox] folder tags will be shown in nav tag bar (under nav buttons).

## Concepts

### node

A node is a bookmark or a bookmark folder in Chromium.

### home folder node

The Home folder is the default starting folder of Abookmark.

Abookmark uses the 'Other bookmarks/favorites' as home folder by default.

### inbox folder node

Newly created bookmarks will be put into the subfolders of inbox folder. If there is no inbox folder appoited, home folder will be used as inbox.

### top folder

Top folder is a folder for shortcuts. You can put anything you like into it.

Abookmark uses the 'Bookmarks/Favorites bar' as top folder by default.

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

### Trash

When in 'Trash' mode, all deleted nodes will be marked as trash and moved into trash folder. You can restore them by 'Normalize' function.

You should select a trash folder node to enable trash mode. Any folder may be appoited as trash folder, even outside of working folder.

### Recycle

'Recycle' engine may reuse these 'trash' nodes when you create new nodes.

'Recycle' is designd to reuse node ids. Generally this is not necessary if you do not know what it is. So it is disabled by default.

Trash folder reserves at least 50 (100 after v0.6) nodes from recycling by default.

### folder link label (test)

You can use labels as folder shortcuts.

format: '@' + 'folder id' + ':' + 'anything'
eg: @100:books

Be careful: 'id's can not be imported from backups. So, this feature is not suppported by Abookmark officially. It may be removed in the future.

### toolbar: Fold

'Fold' creates a new folder besides the last selected node and moves all selected nodes into that folder.

Suppose you want to move several nodes into a folder.

### toolbar: Merge

'Merge' unfolds all other selected folders(if they are folders) and moves them into(or beside) the last selected node.

'Merge' is designed to merge several folders but it is also useful for bookmarks.

### link picking

Suppose you are viewing a page contains many links. You want to mark some of the links and read them another day. This is what we called "link picking".

After switched to Picking mode, any links clicked with 'Ctrl' (by default) in that page will be bookmarked and the openning of new tabs will be terminated. You can click any other tab to exit Picking mode.

### link sailing

Generally a bookmark is a note of a 'static' url. But sometimes this is not the best choice. For example, I am surfing from bookmark of site/page1, then I go to site/page2, site/page3... Now I want my bookmark to point to site/page3. Abookmark can do this automatically. This is the 'link sailing'.

When in sailing mode, Abookmark will always update the bookmark to the latest page of that site you are surfing. That page will inherit the former notes and tags.

When a tab is in link sailing mode, there will be a 'S' shown in the extention icon badge.

How to trigger 'link sailing'?

- Click a bookmark in Abookmark tagged with #!sailing.
- Click a bookmark in Abookmark whose parent folder tagged with #!sailing.
- Click a bookmark in Abookmark with alt/shift according to your settings.
- Trigger 'toggle sail mode' command in any web page bookmarked.

How to exit 'link sailing'?

- Go to another site.
- Close that tab.
- Trigger 'toggle sail mode' command in that web page.

### id tag:

format: '@' + 'folder id' + ':' + 'anything'
eg: @100:books

The 'id' may be omitted. Then id tag becomes: '@:' + 'node_name'
eg: @:books

The 'node_name' can be any part of that node's title. When you click a id tag, AsNote will search out all titles matched the 'node_name'.

Unlike '#' tags, you can not drop into id tags to toggle the tag. But a id tag (of inbox folder on the left side bar) is droppable as a shortcut of the corresponding folder node if it matchs only one folder node.

### filter:

The 'filter' only effects the first level nodes in main panel. It does not change the database, but only rearranges the view dynamicaly.

You can use filter to do something as 'search in current folder'.

You can use 'regular expression' in the filter, just as in the 'search'.

### top bar:

Top bar is similar to chrome/edge's bookmark bar, but it is more 'spreaded'.

You can load the top bar by its keyboard shortcut. If the top bar 'trigger' is active (in settings), you can load the top bar by click (or hover by mouse) on the top of the left edge in a typical web page.

A 'typical web page' is a normal 'http/https' web page.

Top bar is read only.

### spread view:

Spread view is a form of top bar menu in main app panel. Unlike top bar, it supports basic dragging / dropping.

Left click on the 'arrows' in a folder (or drag a node upon the right arrow) to load its spread view.

Click the icons in spread menu to edit the corresponding node.

## FAQ

### Why do Abookmark need permission of "Site access On all sites"?

This is necessary only if you want to show sticky notes in web pages automatically (and to load the top bar trigger since v0.8). You can disable that permission (in extention detail page) if you do not need it. This does not affect any other features.

### May I rename the folders created by Abookmark?

Of course.

Since bookmark importing can not restore the 'create date', we suggest you keep the 'date' in the folder name, but this is not enforced.

### How to import/export data?

Abookmark is just bookmarks.
You can use the native bookmark manager to import/export all the data.

### May I transfer my data from onetab?

Yes.

You can import onetab's export data into bookmarks directly. But that data has no folder or date information. We write a little exporter to parse and download the full data as bookmarks:

<https://raw.githubusercontent.com/pfcao/asnote/main/onetab-to-bookmarks.js>)

### What's the benefits if I switch from onetab?

- Sync across browsers. You can even view the saved 'tabs' ( as bookmarks) on your mobile phone.
- Transform smoothly from 'saved tabs' to bookmarks at any time.
- As bookmarks, you can see (from the 'star' in the address bar) whether that page has been saved before. You can remove saved pages directly by clicking that bookmark icon (or our app icon, with trash support).
- Backup without losing data structures.
- Fast.
- Trash.

### Is Abookmark running in all web pages in the background?

No.

Abookmark do not inject anything into any web page unless it has notes to show or you evoke it explicitly (by shortcuts or button clicks).

Since v0.8, there is an option (inactive by default) to load a top bar trigger into web pages. This trigger is no more than a button.

Some other in page bookmark extention will load the bookmarks into every page beforehand, so they can boot up immediately when you click. This is OK if it works well for you. But this is not the philosophy of Abookmark. It runs very fast only because it is extremely optimized.

## Buy me a coffee.

paypal: <https://paypal.me/pfcao>
