// Export widget models and views, and the npm package version number.
module.exports = {};

var loadedModules = [
    require('./example'),
    require('./helloworld2'),
    require('./imgdisplay'),
    require('./imageslider'),
];

for (var i in loadedModules) {
    if (loadedModules.hasOwnProperty(i)) {
	var loadedModule = loadedModules[i];
	for (var target_name in loadedModule) {
	    if (loadedModule.hasOwnProperty(target_name)) {
		module.exports[target_name] = loadedModule[target_name];
	    }
	}
    }
}