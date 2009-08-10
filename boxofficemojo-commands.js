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
    Utils.openUrlInBrowser("http://boxofficemojo.com/search/?q=" + args.object.text);
  }
});

CmdUtils.CreateCommand({
  names: ["boxofficemojo top weekend movies", "bom top weekend movies", "box office mojo top weekend movies"],
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
    Utils.openUrlInBrowser("http://boxofficemojo.com/weekend/chart/");
  }
});
