var pdfMatcher = /.+\.pdf$/;

var css = [{file: "ui.css"},{file: "dark-mode.css"}];
var js  = [{file: "dark-mode.js"}];

var tabs = [];

browser.tabs.onActivated.addListener(activeInfo => {
	browser.tabs.query({currentWindow: true, active: true})
		.then(tabs => {
			let activeTab = tabs[0];
			let id = activeTab.id;

			if(!tabs.includes(id) && pdfMatcher.test(activeTab.url)) {
				/* does not work unfortunately,
				 * missing host permission
				 */
				css.forEach(s => browser.tabs.insertCSS(id, s));
				js.forEach(s => browser.tabs.executeScript(id, s));

				tabs.push(id);
			}
		});
});