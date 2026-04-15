const command = process.argv[2];

switch (command) {
  case "design-lang":
    require("./design-lang");
    break;
  case "ui-thinking":
    require("./ui-thinking");
    break;
  case "theme":
    require("./zoho-theme-factory");
    break;
  default:
    console.log("Available commands: design-lang, ui-thinking, theme");
}
