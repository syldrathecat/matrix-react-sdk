/*
Copyright 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var DEFAULTS = {
};

class SdkConfig {

    static get() {
        return global.mxReactSdkConfig;
    }

    static put(cfg) {
        var defaultKeys = Object.keys(DEFAULTS);
        for (var i = 0; i < defaultKeys.length; ++i) {
            var key = defaultKeys[i];
            if (cfg[key] === undefined) {
                cfg[key] = DEFAULTS[key];
            }
        }
        global.mxReactSdkConfig = cfg;
    }

    static unset() {
        global.mxReactSdkConfig = undefined;
    }
}

module.exports = SdkConfig;
