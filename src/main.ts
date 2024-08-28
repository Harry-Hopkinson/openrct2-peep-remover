import { MainWindow } from "./ui/MainWindow";

export function main() {
  if (typeof ui !== "undefined") {
    const menuItemName = "Peep Remover";
    ui.registerMenuItem(menuItemName, () => MainWindow.open());
  }
}
