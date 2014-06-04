angular.module('templates', ['partials/partial1.html', 'partials/partial2.html']);

angular.module("partials/partial1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/partial1.html",
    "<p>This is the partial for view 1.</p>\n" +
    "");
}]);

angular.module("partials/partial2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/partial2.html",
    "<p>This is the partial for view 2.</p>\n" +
    "<p>\n" +
    "  Showing of 'interpolate' filter:\n" +
    "  {{ 'Current version is v%VERSION%.' | interpolate }}\n" +
    "</p>\n" +
    "");
}]);
