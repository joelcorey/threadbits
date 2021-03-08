const { ipcMain, app } = require('electron');
const path = require('path');

const db = require('better-sqlite3')(path.join(app.getPath("userData"), "mapsnap.sqlite3"));

function main() {

	ipcMain.on('sqlite-send', (event, args,) => {

	const statement =
		`CREATE TABLE IF NOT EXISTS svg (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		svgId INT NOT NULL,
		svgName STRING NOT NULL,
		svgDate STRING,
		svgString STRING NOT NULL,
		selectedList STRING,
		lotList STRING,
		ignoreList STRINGL,
		associatedSheetId STRING,
		associatedSheetName STRING,
		associatedSheetData STRING
		);`;

		db.exec(statement);
	});

	ipcMain.on('sqlite-send-svg-all', (event, args) => {

		const statement = db.prepare(
      `
      SELECT
      svgId,
      svgName,
      svgDate,
      svgString,
      selectedList ,
      lotList,
      ignoreList,
      associatedSheetId,
      associatedSheetName,
      associatedSheetData
      FROM
      svg`
		);

	const rows = statement.all(); //get would return just 1 record, all .. is all ;P

	for (let i = 0; i < rows.length; i++) {
    // console.log(rows[i])
    rows[i].selectedList = rows[i].selectedList.split(',')
    rows[i].lotList = rows[i].lotList.split(',')
    rows[i].ignoreList = rows[i].ignoreList.split(',')
    //rows[i].associatedSheetData = rows[i].associatedSheetData.split(',')
	}

	event.reply('sqlite-reply-svg-all', rows);
	});

	ipcMain.on('sqlite-send-svg-delete', (event, data) => {
	//console.log(data)
	svgId = data;

	const statement = db.prepare(
    `
    DELETE FROM svg
    WHERE svgId = ${svgId}
    ;`
	)

	const deleteSvg = statement.run();

	event.reply('sqlite-reply-svg-delete', deleteSvg);
	});

}

