export default function Info({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="text-center">
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
}
