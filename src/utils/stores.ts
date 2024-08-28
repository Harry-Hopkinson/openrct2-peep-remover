import { store, WritableStore } from "openrct2-flexui";

let PeepIds: WritableStore<number[]> = store([]);
let MultiSelectMode: WritableStore<Boolean> = store(false);

export { PeepIds, MultiSelectMode };
