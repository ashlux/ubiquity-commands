BOXOFFICEMOJO_BASE_URL = "http://boxofficemojo.com/";

/* Search Box Office Mojo. */
/* http://boxofficemojo.com/search/?q=Search Phrase */
CmdUtils.CreateCommand({
  names: ["boxofficemojo", "bom", "box office mojo"],
  icon: "http://boxofficemojo.com/favicon.ico",
  description: "Check out movie details on Box Office Mojo.",
  help: "TODO",
  author: {name: "Ash Lux", email: "ashlux@gmail.com"},
  license: "GPL",
  homepage: "http://www.ashlux.com/wordpress/ubiquity-commands",
  arguments: [{role: 'object', nountype: noun_arb_text}],
  preview: function preview(pblock, args) {
    pblock.innerHTML = "Search for movie <b>" + args.object.html + "</b>.";
  },
  execute: function execute(args) {
    Utils.openUrlInBrowser(BOXOFFICEMOJO_BASE_URL + "search/?q=" + args.object.text);
  }
});

BOXOFFICEMOJO_WEEKEND_CHART = BOXOFFICEMOJO_BASE_URL + "/weekend/chart/";

/* Show top weekend chart */
/* http://boxofficemojo.com/weekend/chart/ */
CmdUtils.CreateCommand({
  names: ["boxofficemojo top weekend movies", "bom top weekend movies", "box office mojo top weekend movies", "top weekend movies"],
  icon: "http://boxofficemojo.com/favicon.ico",
  description: "Check out this weekends top movies on Box Office Mojo.",
  help: "TODO",
  author: {name: "Ash Lux", email: "ashlux@gmail.com"},
  license: "GPL",
  homepage: "http://www.ashlux.com/wordpress/ubiquity-commands",
  preview: function preview(pblock, args) {
    pblock.innerHTML = "Show top weekend movies.";
  },
  execute: function execute(args) {
    Utils.openUrlInBrowser(BOXOFFICEMOJO_WEEKEND_CHART);
  }
});

CmdUtils.CreateCommand({
  names: ["say hello"],
  execute: function() {
    displayMessage( "Hello, World!");
  }
});