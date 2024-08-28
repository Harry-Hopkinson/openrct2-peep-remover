import { PeepIds } from "./stores";

export function RemovePeep(): void {
  const SelectedPeepIds = PeepIds.get();

  SelectedPeepIds.forEach((id) => {
    const entity = map.getEntity(id);
    if (entity && (entity.type === "guest" || entity.type === "staff")) {
      entity.remove();
    }
  });

  PeepIds.set([]);
}
