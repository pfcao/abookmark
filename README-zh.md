# Abookmark 专业书签及标签页管理插件

Abookmark 是一款高级书签及标签页管理插件, 与 chrome/edge 原生书签完全兼容, 并在其基础上增加了一些功能:

- tab 管理. 具有类似于 onetab 的功能. 您可以把当前打开的所有或部分网址保存起来, 在需要的时候重新打开. 所保存的网页与书签系统无缝衔接, 可以在多浏览器间同步.
- 标签.
- 便签. 您可以在常见网页上添加便利贴, 当您再次浏览该网页的时候可以看到这些便利贴.
- 回收站. 启用此功能后, 您删除的书签会转移到回收站, 这些书签可以恢复.
- 链接采集模式. 开启后, 您在当前网页上 ctrl+点击的链接(也即在新标签页中打开的链接)会直接保存为书签.
- 更新到当前网址 - 手动版航行模式.
- 导出指定文件夹下的书签.
- 临时加载/预览导出的书签.
- 定时备份书签.
- 搜索最近添加的书签.
- 多列单屏展示
- 文本编辑器.
- 书签栏与导航页. 书签栏相当于 chrome 的书签栏 + 多列单屏展示, 尤其适合书签较多的用户. 书签栏提供 Abookmark 的核心功能.

## Privacy

所有数据均保存于本地. Abookmark 不会向别处传输任何用户数据.

abookmark.dev@outlook.com

## Tips

- 'Escape': 清空选择.
- 'Shift'+点击 复选框选择连续的节点, 'Ctrl' 多选节点.
- 点击子文件夹的左侧空白选择所有其下的节点.
- 将回收站的节点拉到其它文件夹使其恢复正常.
- 用 [合并] 移动节点.
- 导航栏用 "!" 开头强制显示标题.
- 导航页中拖拽到空白区域来做为子书签栏打开或在管理器中打开.

## Shortcuts

- 搜索: Ctrl +f
- 回退: Ctrl + z
- 清空选择: Escape
- 删除节点: Delete
- 删除标签: Shift + click
- 编辑界面保存: Ctrl + enter
- Spread view (for any tag/folder): Alt + click
- Link hint: `f`
- 快捷键盘手册: ? (disabled by default)
- Alt + store buttons = 收存但不关闭标签页
- Shift + store buttons = 收存但不新建文件夹
- Alt + open button = 打开节点并关闭其它标签页
- Alt + restore button = 恢复节点并关闭其它标签页
- Alt + update button (~) = 更新节点并关闭(已保存的)标签页. 

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

在 onetab 中所保存的所谓的标签页不过是 Abookmark 中的一个普通书签.

收存: 缺省情况下, Abookmark 将指定标签页 "收存" 于 收件箱文件夹并关闭标签. 同时收存多个标签页时会创建子文件夹.

恢复: 点击恢复按钮或者网址时 Abookmark 会打开对应网址并移除书签.

与 onetab 相比, Abookmark 可以轻松浏览上万节点, 这些数据由原生书签系统保存并同步.

### labels/tags

标签应该以 '#' 开始, 并不要包含 '-' 或 '\_' 之外的任何符号. 虽然 Abookmark 对此并不强制.

Abookmark 申明保留所有其它符号.

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

指定垃圾箱文件夹后, 普通节点被删除时会移入垃圾箱, 并标记为垃圾. 将节点拖拽出垃圾箱可使其恢复正常.

删除有垃圾标记的节点会使其彻底删除.

### Recycle

'Recycle' engine may reuse these 'trash' nodes when you create new nodes.

'Recycle' is designd to reuse node ids. Generally this is not necessary if you do not know what it is. So it is disabled by default.

Trash folder reserves at least 50 (100 after v0.6) nodes from recycling by default.

### Fold

"打包" 会将所选节点包裹到一新建文件夹.

### Merge

'归并' 会将所有其它所选节点 '拆包', 并移入最末所选节点.

如果最末节点不是文件夹, 这些拆包后的节点会移至其后.

### link picking

开启链接采集模式后, 新开启的标签页(通常用Ctrl)会被自动收存. 默认情况下, 切换到其它标签页会退出采集模式.

<!-- ### link sailing

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
- Trigger 'toggle sail mode' command in that web page. -->

### top bar:

Topbar 相当于书签栏, 但它也是自成一页的, 称为导航页.

可以通过如下渠道开启 topbar:

1, 设定浏览器系统快捷键.
2, 开启页内触发器.
3, 开启新标签页加载导航页功能.
4, 通过其它界面提供的topbar启动按钮或菜单.

### spread view:

扩展视图是尽可能利用屏幕展示所有节点的单屏多级多栏菜单模式.

扩展视图是 topbar 的主视图, 同时在书签管理器中也可以触发. 所有文件夹或标签都可以用扩展视图展示. 通过 Alt 键来选择 是否触发扩展视图.

### context menu: update ~

更新按钮(~)用于把一个书签更新为当前标签页的网址, 并保留其原有标签及便签. 

它也可以用于文件夹. 整个文件夹会被替换为当前窗口打开的标签页. 

更新可以看为是手动模式的航行, 但两者的结果有细微区别. 更新会保留所有的子文件夹, 并忽略固定了的标签页. 更新不能保存文件夹加载页(~/folder.html). 

### filter:

'filter' 并不改变数据本身, 而是在运行时改变节点的显示.

'filter' 仅对当前文件夹下的节点起作用.

You can use 'regular expression' in the filter, just as in the 'search'.

### search:

搜索框支持js的正则表达式. 系统提供了几个关键词, 但在内部仍然会转化为相应的正则表达式.

### text editor:

With text editor you can edit the data of bookmarks directly in JSON formate. You can use your favorite text editor for further editing.

In the 'Edit' mode, a node is updated by its id if the corresponding bookmark can be found. Nodes without 'id' field are treated as new bookmarks. A node with '-id' field instead of 'id' field will be removed.

All nodes are treated as new bookmarks if you are in the 'Create' mode.

### snapshot 快照

快照是对全部书签的备份, 但也可以选择部分书签创建快照. 

快照与导出类似, 但快照保存在浏览器内部, 可以保存12份快照. 它们可以加载为文件节点, 可以通过拖拽进行复制.

## FAQ

### 可以修改 Abookmark 创建的文件夹名称吗?

可以.

书签系统的任何数据都可以随意修改, ab 并不加以限制. 但因为 chrome 无法在导入书签时指定创建时间, 建议在标题中保留日期信息.

### 如何导入导出书签?

ab 的所有书签数据均保存于原生书签系统之内, 可以通过原生书签管理器来导入导出.

ab 另提供指定文件夹的导出及浏览. 浏览时可以通过拖拽将选定节点复制到书签系统, 实现精确导入.

### 如何从 onetab 迁入?

onetab 自身可以导出数据供原生书签导入, 但这一数据仅是所有网址的列表, 并不带有分组及日期信息. 我们写了一个简单的脚本, 可以导出更多的有用信息. 

[onetab-to-bookmarks.js](onetab-to-bookmarks.js)

### 比 onetab 有什么优势?

- 打通 "保存的标签页" 与 "书签", 两者可以随意转换. 从程序的角度来说两者本并没有区别, 存于两个系统会人为制造隔阂与麻烦.
- 可以通过文件夹, 标签及各管理功能来更方便的整理数据.
- 可以通过浏览器星标看到某页是否已经保存过了, 并直达该节点.
- 原生同步. 甚至可以在手机中查看.
- 完善的导入导出, 避免数据丢失.
- 启动迅速, 轻松支持上万节点.

### Is Abookmark running in all web pages in the background?

No.

Abookmark do not inject anything into any web page unless it has notes to show or you evoke it explicitly (by shortcuts or button clicks).

Since v0.8, there is an option (inactive by default) to load a top bar trigger into web pages. This trigger is no more than a button.

Some other in page bookmark extention will load the bookmarks into every page beforehand, so they can boot up immediately when you click. This is OK if it works well for you. But this is not the philosophy of Abookmark. It runs very fast only because it is extremely optimized.

## Buy me a coffee.

paypal: <https://paypal.me/pfcao>

abookmark.dev@outlook.com