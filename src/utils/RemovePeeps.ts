import { PeepIds } from "./stores";

export function RemovePeep(): void {
  const SelectedPeepIds = PeepIds.get();

  if (SelectedPeepIds.length == 0)
    return ui.showError("Select Peeps", "You must select a peep to remove");

  SelectedPeepIds.forEach((id) => {
    const entity = map.getEntity(id);
    if (entity && (entity.type === "guest" || entity.type === "staff")) {
      entity.remove();
    }
  });

  PeepIds.set([]);
}

export function RemoveLostGuests(): void {
  const guests = map.getAllEntities("guest");

  guests.forEach((guest) => {
    const peep = guest as Guest;
    if (peep.getFlag("lost")) {
      park.postMessage("Removing peep " + peep.id);
      peep.remove();
    }
  });
}
