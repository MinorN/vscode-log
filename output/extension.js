// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
module.exports.activate = function activate (context) {
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.myTabConsoleLog', function (textEditor, edit) {
		console.log('active')
		var position = textEditor.selection.active
		var line = textEditor.document.lineAt(position.line)
		var lineText = line.text

		if (/\.log$/.test(lineText)) {
			var prefix = lineText.substring(0, lineText.length - 4).trim()
			var replaceText = `console.log('${prefix}', ${prefix})`
			return edit.replace(line.range, replaceText);
		}
	}))
}
module.exports.deactivate = function deactivate () { }
