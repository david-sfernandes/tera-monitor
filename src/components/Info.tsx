export default function Info({
  title,
  value,
  color = "black",
}: {
  title: string;
  value: number;
  color?: string;
}) {
  const colors: { [key: string]: string } = {
    black: "bg-black",
    zinc: "bg-zinc-400",
    green: "bg-green-400",
    red: "bg-red-400",
    orange: "bg-orange-400",
  };

  return (
    <div className="card flex flex-row p-4 gap-3 w-full">
      <div className={`w-2 h-auto rounded-lg ${colors[color as keyof typeof colors]}`} />
      <div>
        <h2 className="text-zinc-600">{title}</h2>
        <p className="text-4xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
