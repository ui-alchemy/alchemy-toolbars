angular.module("app/views/example.html", []).run(function($templateCache) {
  $templateCache.put("app/views/example.html",
    "<div>" +
    "  <h3 example-directive></h3>" +
    "</div>" +
    "");
});
