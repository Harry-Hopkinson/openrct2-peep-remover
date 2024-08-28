import { GuestIds } from "./stores";

export function RemovePeep(): void {
  const SelectedPeepIds = GuestIds.get();

  SelectedPeepIds.forEach((id) => {
    const entity = map.getEntity(id);
    if (entity && (entity.type === "guest" || entity.type === "staff")) {
      entity.remove();
    }
  });

  GuestIds.set([]);
}
