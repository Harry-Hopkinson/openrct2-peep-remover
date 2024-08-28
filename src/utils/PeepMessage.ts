import { GuestIds } from "./stores";

export function PeepMessage() {
  const selectedPeepIds = GuestIds.get();
  if (selectedPeepIds.length === 0) {
    return park.postMessage("No peeps selected");
  }

  const peepNames = selectedPeepIds.map((id) => {
    const peep: Guest | Staff = map.getEntity(id) as Guest | Staff;
    return peep.name;
  });

  const message = peepNames.join(", ");
  park.postMessage(message);
}
