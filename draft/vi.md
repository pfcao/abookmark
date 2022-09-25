About vi keyboard: 

You do not have to use this feature. It is for vi lovers, not for everyone. And it is an early preview for feedbacks. Some commands may be changed in the future. Type `?` to show the manual if vi is activated in settings.

Now we have 3 main modes: 
1, normal mode
2, command mode
3, hint mode
	click mode
	focus mode
	select mode

They are designed for nav pages, but bookmark manager also supports normal mode.

In normal mode, there are 10 main context commands corresponding to the context menu bar. 

Context commands should run in 'context', for they need selected nodes to be their targets. Generally they can be triggered either before or after the selection. Context commands can work in other modes if possible.

Click mode is almost the same as vimium link hints. The main difference is we only use lowercase letters as hint keys. All capital letters are reserved for commands.

The select mode works just as click mode, except it select nodes instead of click them.

Use space bar to sumbmit the inputs if necessary. If there is no prepending key to sumbmit: Space -> select, Enter -> click. Use Tab to focus next target.