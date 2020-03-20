cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-background-app/backgroundapp.js",
        "id": "cordova-plugin-background-app.backgroundapp",
        "clobbers": [
            "cordova.backgroundapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-blob-constructor-polyfill/Blob.js",
        "id": "cordova-plugin-blob-constructor-polyfill.blob-constructor",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
        "id": "cordova-plugin-chrome-apps-common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
        "id": "cordova-plugin-chrome-apps-common.errors"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
        "id": "cordova-plugin-chrome-apps-common.stubs"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
        "id": "cordova-plugin-chrome-apps-common.helpers"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
        "id": "cordova-plugin-chrome-apps-storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/app/runtime.js",
        "id": "cordova-plugin-chrome-apps-runtime.app.runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/runtime.js",
        "id": "cordova-plugin-chrome-apps-runtime.runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/sha256.js",
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-sha256"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/enc-base64-min.js",
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-enc-base64-min"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/app/window.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.app.window",
        "clobbers": [
            "chrome.app.window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/mobile.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.mobile.impl",
        "clobbers": [
            "chrome.mobile.impl"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/helpers/ChromeExtensionURLs.android.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.helpers.ChromeExtensionURLs"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-i18n/i18n.js",
        "id": "cordova-plugin-chrome-apps-i18n.I18n",
        "clobbers": [
            "chrome.i18n"
        ]
    },
    {
        "file": "plugins/cordova-plugin-customevent-polyfill/customEvent.js",
        "id": "cordova-plugin-customevent-polyfill.customEvent",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-xhr-blob-polyfill/xhr-blob.js",
        "id": "cordova-plugin-xhr-blob-polyfill.xhr-blob",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});