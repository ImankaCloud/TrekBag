import { useItemsStore } from "../stores/itemsStore";
import AddItemsForm from "./AddItemsForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemsForm handleAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
