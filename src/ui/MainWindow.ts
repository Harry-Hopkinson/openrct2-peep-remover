import { button, label, window } from "openrct2-flexui";
import { PeepSelect } from "./PeepSelect";
import { RemovePeep } from "../misc/RemovePeeps";
import { GuestIds } from "../misc/stores";

export const MainWindow = window({
  title: "Guest Remover",
  width: { value: 150, min: 150, max: 150 },
  height: { value: 135, min: 135, max: 135 },
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
      text: "Cancel",
      height: 23,
      onClick: () => GuestIds.set([]),
    }),
  ],
});
