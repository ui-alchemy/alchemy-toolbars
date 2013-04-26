angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("app/views/example.html",
    "<p>Horizontal toolbar, buttons left aligned.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li><button>Button 1</button></li>" +
    "    <li><button>Button 2</button></li>" +
    "    <li><button>Button 3</button></li>" +
    "    <li><button>Button 4</button></li>" +
    "    <li><button>Button 5</button></li>" +
    "    <li><button>Button 6</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Horizontal toolbar, buttons right aligned.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li class=\"right\"><button>Button 6</button></li>" +
    "    <li class=\"right\"><button>Button 5</button></li>" +
    "    <li class=\"right\"><button>Button 4</button></li>" +
    "    <li class=\"right\"><button>Button 3</button></li>" +
    "    <li class=\"right\"><button>Button 2</button></li>" +
    "    <li class=\"right\"><button>Button 1</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Horizontal toolbar, buttons split between left and right.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li class=\"left\"><button>Button 1</button></li>" +
    "    <li class=\"left\"><button>Button 2</button></li>" +
    "    <li class=\"left\"><button>Button 3</button></li>" +
    "    <li class=\"right\"><button>Button 6</button></li>" +
    "    <li class=\"right\"><button>Button 5</button></li>" +
    "    <li class=\"right\"><button>Button 4</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Horizontal toolbar with buttons on the left and a group of buttons on the right.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li class=\"left\"><button>Button 1</button></li>" +
    "    <li class=\"left\"><button>Button 2</button></li>" +
    "    <li class=\"left\"><button>Button 3</button></li>" +
    "    <li>" +
    "      <ul class=\"nav-group right\">" +
    "        <li><button>Group 1</button></li>" +
    "        <li><button>Group 2</button></li>" +
    "        <li><button>Group 3</button></li>" +
    "      </ul>" +
    "    </li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Horizontal toolbar with a group of buttons on the left and buttons on the right.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li>" +
    "      <ul class=\"nav-group left\">" +
    "        <li><button>Group 1</button></li>" +
    "        <li><button>Group 2</button></li>" +
    "        <li><button>Group 3</button></li>" +
    "      </ul>" +
    "    </li>" +
    "    <li class=\"right\"><button>Button 3</button></li>" +
    "    <li class=\"right\"><button>Button 2</button></li>" +
    "    <li class=\"right\"><button>Button 1</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Horizontal toolbar with a button, a group of buttons followed by two buttons.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav\">" +
    "    <li><button>Button 1</button></li>" +
    "    <li>" +
    "      <ul class=\"nav-group\">" +
    "        <li><button>Group 1</button></li>" +
    "        <li><button>Group 2</button></li>" +
    "        <li><button>Group 3</button></li>" +
    "      </ul>" +
    "    </li>" +
    "    <li><button>Button 2</button></li>" +
    "    <li><button>Button 3</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<br/><br/><br/>" +
    "<p>Basic vertical toolbar.</p>" +
    "<div class=\"nav-container\">" +
    "  <ul class=\"nav nav-stacked\">" +
    "    <li><button>Button 1</button></li>" +
    "    <li><button>Button 2</button></li>" +
    "    <li><button>Button 3</button></li>" +
    "    <li><button>Button 4</button></li>" +
    "    <li><button>Button 5</button></li>" +
    "    <li><button>Button 6</button></li>" +
    "  </ul>" +
    "</div>" +
    "" +
    "" +
    "<!-- " +
    "<br/><br/><br/>" +
    "<p>Fixed vertical toolbar.</p>" +
    "<ul class=\"nav nav-stacked nav-fixed\">" +
    "  <li><button>Button 1</button></li>" +
    "  <li><button>Button 2</button></li>" +
    "  <li><button>Button 3</button></li>" +
    "</ul>" +
    " -->" +
    "" +
    "" +
    "<br/><br/><br/><br/>" +
    "<p>" +
    "Are the floats cleared?" +
    "</p>" +
    "<br/><br/><br/><br/>" +
    "");
});
