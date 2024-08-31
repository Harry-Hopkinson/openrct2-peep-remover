import { button, label, toggle, window } from "openrct2-flexui";
import { PeepSelect } from "./PeepSelect";
import { RemovePeep, RemoveLostGuests } from "../utils/RemovePeeps";
import { MultiSelectMode, PeepIds } from "../utils/stores";
import { PeepMessage } from "../utils/PeepMessage";

export const MainWindow = window({
  title: "Peep Remover",
  width: { value: 150, min: 150, max: 150 },
  height: { value: 220, min: 220, max: 220 },
  content: [
    button({
      image: "eyedropper",
      isPressed: false,
      tooltip: "Select a peep to remove",
      height: 23,
      onClick: () => PeepSelect(),
    }),
    label({
      text: "Select peeps to remove",
    }),
    button({
      image: 5165,
      isPressed: false,
      tooltip: "Remove the selected peeps",
      height: 23,
      onClick: () => RemovePeep(),
    }),
    label({
      text: "Remove selected peeps",
    }),
    button({
      text: "Show Selected Peeps",
      height: 23,
      onClick: () => PeepMessage(),
    }),
    button({
      text: "Cancel Selection",
      height: 23,
      onClick: () => PeepIds.set([]),
    }),
    toggle({
      text: "Multi Select Mode",
      disabled: false,
      height: 23,
      onChange: (isChecked) => MultiSelectMode.set(isChecked),
    }),
    button({
      text: "Remove Lost Guests",
      height: 23,
      onClick: () => RemoveLostGuests(),
    }),
  ],
});
