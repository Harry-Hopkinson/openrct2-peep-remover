import { button, window } from "openrct2-flexui";
import { RemoveGuestWithFlags } from "../utils/RemovePeeps";

export const RemoveGuestsWindow = window({
  title: "Remove Guests",
  width: { value: 215, min: 215, max: 215 },
  height: { value: 210, min: 210, max: 210 },
  content: [
    button({
      text: "Remove Angry Guests",
      height: 23,
      onClick: () => RemoveGuestWithFlags("angry"),
    }),
    button({
      text: "Remove Lost Guests",
      height: 23,
      onClick: () => RemoveGuestWithFlags("lost"),
    }),
    button({
      text: "Remove Guests leaving park",
      height: 23,
      onClick: () => RemoveGuestWithFlags("leavingPark"),
    }),
    button({
      text: "Remove Nauseous Guests",
      height: 23,
      onClick: () => RemoveGuestWithFlags("nausea"),
    }),
    button({
      text: "Remove Hungry Guests",
      height: 23,
      onClick: () => RemoveGuestWithFlags("hunger"),
    }),
    button({
      text: "Remove Guests in Overcrowded Areas",
      height: 23,
      onClick: () => RemoveGuestWithFlags("crowded"),
    }),
    button({
      text: "Remove Guest that need the toilet",
      height: 23,
      onClick: () => RemoveGuestWithFlags("toilet"),
    }),
  ],
});
