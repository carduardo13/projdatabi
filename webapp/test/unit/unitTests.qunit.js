/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projdataba/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
