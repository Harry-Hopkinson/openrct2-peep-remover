import { button, label, window } from "openrct2-flexui";
import { PeepSelect } from "./PeepSelect";
import { RemovePeep } from "../utils/RemovePeeps";
import { PeepIds } from "../utils/stores";
import { PeepMessage } from "../utils/PeepMessage";

export const MainWindow = window({
  title: "Peep Remover",
  width: { value: 150, min: 150, max: 150 },
  height: { value: 165, min: 165, max: 165 },
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
  ],
});
