const Utils = require('ee-core/module/utils');
const Log = require('ee-core/module/log');

exports.hello = function () {
  Log.info('[child-process] [jobs/test] hello -------- ');
}

exports.utilsMod = function () {
  let utilsApis = {
    getBaseDir: Utils.getBaseDir(),
    getEnv: Utils.getEnv(),
    isDev: Utils.isDev(),
    isRenderer: Utils.isRenderer(),
    isMain: Utils.isMain(),
    isForkedChild: Utils.isForkedChild(),
    getHomeDir: Utils.getHomeDir(),
    getStorageDir: Utils.getStorageDir(),
    getLogDir: Utils.getLogDir(),
    getRootDir: Utils.getRootDir(),
    getBaseDir: Utils.getBaseDir(),
    getAppUserDataDir: Utils.getAppUserDataDir(),
    getHomeDir: Utils.getHomeDir(),
    getUserHomeDir: Utils.getUserHomeDir(),
    getMainPort: Utils.getMainPort(),
    getSocketPort: Utils.getSocketPort(),
    getHttpPort: Utils.getHttpPort(),
    getExecDir: Utils.getExecDir(),
    getPackage: Utils.getPackage(),
    getEeConfig: Utils.getEeConfig(),
    getAppVersion: Utils.getAppVersion(),
    getAddonConfig: Utils.getAddonConfig(),
    getMainServerConfig: Utils.getMainServerConfig(),
    getHttpServerConfig: Utils.getHttpServerConfig(),
    getSocketServerConfig: Utils.getSocketServerConfig(),
    getSocketChannel: Utils.getSocketChannel(),
    getExtraResourcesDir: Utils.getExtraResourcesDir(),
  }
  Log.info('[child-process] [jobs/test] Utils -------- ', utilsApis);
}