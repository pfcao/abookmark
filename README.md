# AsNote #bookmark preview

Think of bookmarks as notes.

Advanced bookmark manager with labels, sticky notes, and trash mode.

AsNote has the key features of onetab for tab managements, but use bookmarks as database.

## Features

- Cooperate with native bookmark system.
- Labels/Tags.
- The key features of onetab.
- Sticky notes in web page.
- Trash and Recycle mode.
- Picking mode.
- Advanced bookmark management.
- Export a selected bookmark folder.
- Auto sync.
- Shortcuts
- Popup bookmark tree view.
- Load thousands of nodes without lagging.

## Tips

- Select multi folders with 'Ctrl'.
- Select a list of nodes with 'Shift'.
- Select all the nodes in a folder by click the left edge.
- Move url nodes with [merge].
- Remove marks of trash with 'normalize', or just drag them out of trash folder.
- Open link in new tab with 'Ctrl'.
- Open link in current tab with 'Alt'.
- Drop nodes on nav buttons ([home], [trash], [top]...).
- Attach folders as tags into [top] folder.
- Unselect nodes by 'Escape' key.

## Privacy

All your data are stored in your browser system. AsNote do not transfer any of your data to anywhere else.

## Concepts

### node

A node is a bookmark or a bookmark folder in Chromium.

### home folder node

The Home folder is the default starting folder of AsNote.

### inbox folder node

Newly created bookmarks will be put into the subfolders of inbox folder. If there is no inbox folder appoited, home folder will be used as inbox.

### onetab

A 'tab' in onetab is nothing but a bookmark node in Asnote.

Save [one tab] / [all the tabs] / [tabs on the right] to inbox folder and close these tabs.

In app page, you can reopen these tabs/bookmarks by click the titles. But if you click the urls on the right side, the node will be removed at the same time. This is what we called 'restore'.

AsNote is built with performance in mind. You can save thousands of tabs easily. Your data's safety is guaranteed by your native bookmark system.

### labels/tags

Labels should start width '#' and contain no other symbols, but may have '-' or '\_'.

### Trash

When in 'Trash' mode, all deleted nodes will be marked as trash and moved into trash folder. You can restore them by 'Normalize' function.

You should select a trash folder node to enable trash mode. Any folder may be appoited as trash folder, even outside of working folder.

### Recycle

'Recycle' engine may reuse these 'trash' nodes when you create new nodes.

'Recycle' is designd to reuse node ids. Generally this is not necessary if you do not know what it is. So it is disabled by default.

Trash folder reserves at least 50 nodes from recycling.

### Picking mode

Suppose you are viewing a page contains many links. You want to mark some of the links and read them another day. This is what we called "link picking".

After switched to Picking mode, any links clicked with 'Ctrl' in that page will be bookmarked and the openning of new tabs will be terminated. You can click any other tab to exit Picking mode.

### top folder

Top folder is a folder for shortcuts. You can put anything you like into it.

### folder link label (test)

You can use labels as folder shortcuts.

format: '@' + 'folder id' + ':' + 'anything'
eg: @100:books

### toolbar: Fold

'Fold' creates a new folder besides the last selected node and moves all selected nodes into that folder.

Suppose you want to move several nodes into a folder.

### toolbar: Merge

'Merge' unfolds all other selected folders(if they are folders) and moves them into(or beside) the last selected node.

'Merge' is designed to merge several folders but it is also useful for bookmarks.

## FAQ

### Why do asnote need permission of "Site access On all sites"?

This is necessary only if you want to show sticky notes in web pages automatically. You can disable that permission (in extention detail page) if you do not need it. This does not affect any other features.

### May I rename the folders created by AsNote?

Of course.

Since bookmark importing can not restore the 'create date', we suggest you keep the 'date' in the folder name, but this is not enforced.

### How to import/export data?

AsNote is just bookmarks.
You can use the native bookmark manager to import/export them.

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

### Is AsNote running in all web pages in the background?

No.

AsNote do not inject anything into any web page unless it has notes to show or you evoke it explicitly (by shortcuts or button clicks).

Some other 'sidebar' extention will load the bookmarks records into every page beforehand, so they can boot up immediately when you click. This is OK if it works well for you. But this is not the philosophy of AsNote. It runs very fast only because it is extremely optimized.

## Buy me a coffee.

paypal: <https://paypal.me/pfcao>
