// TODO: This is supposed to be dynamic
module.exports.getWidevinePath = function () {
    return process.cwd() + '/plugins/widevine/1.4.8.885/_platform_specific/mac_x64/widevinecdmadapter.plugin'; // mac
    // return process.cwd() + '/plugins/widevine/1.4.8.885/_platform_specific/win_x86/widevinecdmadapter.dll'; // windows
};

module.exports.getCDMVersion = function () {
    return '1.4.8.885'; // This one works
};
