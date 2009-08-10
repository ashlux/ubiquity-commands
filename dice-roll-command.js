CmdUtils.CreateCommand({
  names: ["roll"],
  icon: "http://boxofficemojo.com/favicon.ico",
  description: "Roll a die with the given ",
  help: "TODO",
  author: {name: "Ash Lux", email: "ashlux@gmail.com"},
  license: "GPL",
  homepage: "http://www.ashlux.com/wordpress/ubiquity-commands",
  arguments: [{role: 'object', nountype: noun_arb_text}],
  preview: function preview(pblock, args) {
    pblock.innerHTML = "Roll a <b>" + args.object.html + "-sided die.</b>.";
  },
  execute: function execute(args) {
    var randomnumber=Math.floor(Math.random()* args.object.text + 1);
	var doc = CmdUtils.getWindowInsecure();
	doc.alert("You rolled a " + randomnumber + " on a " + args.object.text + "-sided die.");
  }
});
