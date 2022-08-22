# Abookmark 书签及标签页管理插件

Abookmark 是一款专业书签及标签页管理插件, 与 chrome/edge 原生书签完全兼容, 并在其基础上增加了一些有趣的功能:

- tab 管理. 具有类似于 onetab 的功能. 您可以把当前打开的所有或部分网址保存起来, 在需要的时候重新打开. 所保存的网页与书签系统无缝衔接, 可以在多浏览器间同步.
- 标签.
- 便签. 您可以在常见网页上添加便利贴, 当您再次浏览该网页的时候可以看到这些便利贴.
- 回收站. 启用此功能后, 您删除的书签会转移到回收站, 这些书签可以恢复.
- 采集模式. 开启后, 您在当前网页上 ctrl+点击的链接(也即在新标签页中打开的链接)会直接保存为书签.
- 航行模式. 书签网址会随着浏览网页而移动.
- 更新到当前网址 - 手动版航行模式.
- 导出指定文件夹下的书签.
- 临时加载/预览导出的书签.
- 定时备份书签.
- 多列单屏展示
- 文本编辑器.
- 书签栏与导航页. 书签栏相当于 chrome 的书签栏 + 多列单屏展示, 尤其适合书签较多的用户. 书签栏提供 Abookmark 的核心功能.

## Privacy

所有数据均保存于本地. Abookmark 不会向别处传输任何用户数据.

## Tips

- 'Escape': 清空选择.
- 'Shift'+点击 在复选框或节点图标选择连续的节点, 'Ctrl' 多选节点.
- 点击节点的图标: 编辑该节点.
- 右击复选框: 单选该节点.
- 点击子文件夹的左侧空白选择所有其下的节点.
- 将回收站的节点拉到其它文件夹使其恢复正常.
- 用 [合并] 移动节点.
- 导航栏中 "!" 开头的标题不会隐藏.

## Shortcuts

- Search: Ctrl+f.
- Undo: Ctrl + z.
- Clear selection: Escape.
- Remove: Delete.

## 概念

### node 节点

书签或者文件夹有同样的数据格式, 统称为节点.

### home folder node

用户文件夹. Abookmark 默认的用户文件夹是 '其它文件夹', 2 号节点.

### inbox folder node 收件箱文件夹

新建节点默认会放入收件箱文件夹. 用户可以随意指定任意文件夹为收件箱, 如果没有指定, 会用用户文件夹替代.

### top folder 桌面文件夹

桌面文件夹用于存放最经常使用的书签, 同时也是 topbar 的主文件夹.

默认桌面文件夹是 '书签栏', 1 号节点.

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

### spread view:

Spread view is a form of top bar menu in main app panel. Unlike top bar, it supports basic dragging / dropping.

Left click on the 'arrows' in a folder (or drag a node upon the right arrow) to load its spread view.

Click the icons in spread menu to edit the corresponding node.

### search:

The search box supports javascript regular expressions (regex). We add some keywords for search, and they can be generated by search panel.

### text editor:

With text editor you can edit the data of bookmarks directly in JSON formate. You can use your favorite text editor for further editing.

In the 'Edit' mode, a node is updated by its id if the corresponding bookmark can be found. Nodes without 'id' field are treated as new bookmarks. A node with '-id' field instead of 'id' field will be removed.

All nodes are treated as new bookmarks if you are in the 'Create' mode.

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

<https://raw.githubusercontent.com/pfcao/asnote/main/onetab-to-bookmarks.js>

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
