
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-camera.Camera",
          "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "Camera"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverHandle",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverHandle"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverOptions",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverOptions"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-camera.camera",
          "file": "plugins/cordova-plugin-camera/www/Camera.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "navigator.camera"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-camera": "6.0.0",
      "cordova-sqlite-storage": "6.0.0",
      "phonegap-plugin-barcodescanner": "8.1.0"
    };
    // BOTTOM OF METADATA
    });
    