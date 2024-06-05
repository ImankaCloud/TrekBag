export default function Counter({
  totalNumberOfItems,
  totalNumberOfItemsPacked,
}) {
  return (
    <p>
      <b>{totalNumberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
