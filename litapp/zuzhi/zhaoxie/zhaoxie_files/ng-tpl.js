(function (window, define) {
  "use strict";
  var TPL_MODULE_NAME = 'triton.tpl.v5.paper-cp';
  var tplBox = window.tn_ng_tpl_box = window.tn_ng_tpl_box || {};
  tplBox[TPL_MODULE_NAME] = function (angular) {
    return angular.module(TPL_MODULE_NAME, []).run(['$templateCache', function ($templateCache) {
    }]);
  };
})(window, window.define);