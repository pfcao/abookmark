// download onetab data as bookmarks
// by: Abookmark, pfcao
// 1. open the onetab display page in your browser.
// 2. open the 'developer tools' panel of your browser. (Ctrl+Shif+i)
// 3. click 'console' tab of the 'developer tools'.
// 4. copy this code and paste it into 'console'.
// 5. press 'enter' in keyboard to start download.

chrome.storage.local.get('state', storage => {
	function downloadBlob(filename, blobUrl) {
		const element = document.createElement('a')
		element.setAttribute('href', blobUrl)
		element.setAttribute('download', filename)
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}
	const dateNow = new Date().toJSON().substring(0, 10)
	const jsonStateBlobURL = URL.createObjectURL(new Blob([storage.state], { type: 'text/plain' }))
	downloadBlob(dateNow + '_onetab_data.txt', jsonStateBlobURL)
	const state = JSON.parse(storage.state)
	const html = state.tabGroups
		.reverse()
		.map(group => {
			const date = Math.floor(group.createDate / 1000)
			const tabs = group.tabsMeta
				.reverse()
				.reduce(
					(pre, mt) =>
						pre + `<DT><A HREF="${mt.url}" ADD_DATE="${date}">${mt.title?.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</A>\n`,
					'',
				)
			return `<DT><H3 ADD_DATE="${date}">${group.starred || group.locked ? '* ' : ''}[${
				new Date(group.createDate).toJSON().split('T')[0]
			}] ${group.label ?? ''}</H3>\n<DL>\n${tabs}\n</DL>`
		})
		.join('\n')
	const bm = URL.createObjectURL(new Blob(['<DL>\n', html, '\n</DL>'], { type: 'text/plain' }))
	downloadBlob(dateNow + '_onetab2bookmarks.html', bm)
})
