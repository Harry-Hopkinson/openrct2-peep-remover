import { label, window } from "openrct2-flexui";

export const allWidgets = window({
  title: "OpenRCT2 Guest Remover",
  width: { value: 300, min: 300, max: 350 },
  height: { value: 100, min: 100, max: 110 },
  content: [
    label({
      alignment: "centred",
      text: `Select guests to remove`,
    }),
  ],
});

export function main() {
  if (typeof ui !== "undefined") {
    const menuItemName = "Guest Remover";
    ui.registerMenuItem(menuItemName, () => allWidgets.open());
  }
}
