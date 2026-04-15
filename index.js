const command = process.argv[2];

switch (command) {
<<<<<<< HEAD
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
=======
  case "ui-thinking":
    console.log("🧠 UI Thinking Framework:\n- Define user goal\n- Identify constraints\n- Design flow");
    break;

  case "design-lang":
    console.log("🎨 Design Language:\n- Color system\n- Typography scale\n- Spacing rules");
    break;

  case "theme":
    console.log("🎯 Zoho Theme Factory:\n- Generate tokens\n- Apply brand colors");
    break;

  default:
    console.log(`
Available commands:
  mytool ui-thinking
  mytool design-lang
  mytool theme
    `);
}
>>>>>>> 6119dd7 (update)
