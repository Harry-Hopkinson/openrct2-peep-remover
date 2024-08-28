import { PeepIds, MultiSelectMode } from "../utils/stores";

export function PeepSelect() {
  ui.activateTool({
    id: "select-peep",
    cursor: "cross_hair",
    onDown: (e) => {
      const EntityId = e.entityId;
      if (EntityId !== undefined) {
        const Entity = map.getEntity(EntityId);
        if (!Entity || Entity.type === "car") {
          ui.showError("You can only select a guest", "or staff member");
          return;
        } else if (
          !Entity ||
          (Entity.type !== "guest" && Entity.type !== "staff")
        ) {
          ui.showError("You must select a guest", "or staff member");
          return;
        }
        PeepIds.set([...PeepIds.get(), EntityId]);
        if (!MultiSelectMode.get()) return ui.tool?.cancel();
      }
    },
  });
}
