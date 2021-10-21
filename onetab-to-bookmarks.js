// 1. open the onetab page in your browser.
// 2. open the 'developer tools' panel of your browser. (Ctrl+Shif+i)
// 3. click 'console' tab of the 'developer tools'.
// 4. copy our codes and paste them into 'console'.
// 5. press 'enter' key.

function downloadBlob(filename, blobUrl) {
	var element = document.createElement('a')
	element.setAttribute('href', blobUrl)
	element.setAttribute('download', filename)
	element.style.display = 'none'
	document.body.appendChild(element)
	element.click()
	document.body.removeChild(element)
}
var dateNow = new Date().toJSON()
chrome.storage.local.get('state', storage => {
	var jsonStateBlobURL = URL.createObjectURL(new Blob([storage.state], { type: 'text/plain' }))
	downloadBlob(dateNow + '_onetab.json', jsonStateBlobURL)
	var state = JSON.parse(storage.state)
	var html = state.tabGroups
		.reverse()
		.map(group => {
			var date = Math.floor(group.createDate / 1000)
			var tabs = group.tabsMeta
				.reverse()
				.reduce(
					(pre, mt) =>
						pre + `<DT><A HREF="${mt.url}" ADD_DATE="${date}">${mt.title}</A>\n`,
					'',
				)
			return `<DT><H3 ADD_DATE="${date}">${!group.starred && !group.locked ? '' : '* '}${
				group.label ? group.label + ' ' : ''
			}[${new Date(group.createDate).toJSON().split('T')[0]}]</H3>\n<DL>\n${tabs}\n</DL>`
		})
		.join('\n')
	var bm = URL.createObjectURL(new Blob([html], { type: 'text/plain' }))
	downloadBlob(dateNow + '_onetab2bookmarks.html', bm)
})
