export default function Select({ title }: { title: string }) {
  return (
    <div className="flex gap-1">
      <p>{title}:</p>
      <select name="" id="" className="border rounded-sm min-w-[80px]">
        <option value="" className="">Todos</option>
      </select>
    </div>
  );
}
