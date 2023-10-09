import getStatus from "@/api/getStatus";

export default async function Card({ device }: { device: MilvusDevice }) {
  let data = await getStatus(device.id);
  const isOnline = data?.status.status == "Online";
  const updateTimer = 120000 * (device.id % 100);

  // setInterval(async () => {
  //   let newData = await getStatus(device.id);
  //   if (newData?.status.status != data?.status.status) {
  //     data = newData;
  //   }
  // }, updateTimer);

  return (
    <div className="flex bg-zinc-100 border border-zinc-300 shadow-md items-center rounded-2xl text-zinc-600 gap-2 py-2 px-3 h-fit w-72">
      <div
        className={
          `h-3 w-3 rounded-full ` + (isOnline ? "bg-green-400" : "bg-red-400")
        }
      />
      <div className="">
        <h2 className="text-zinc-800 font-medium truncate w-32">
          {device.hostname || "N/A"}
        </h2>
        <h4 className="text-xs capitalize truncate w-32">
          {device.nome_fantasia}
        </h4>
      </div>
      <div className="flex flex-col text-center flex-1">
        <p className="text-xs">{data?.status.status || "Não encontrado"}</p>
        <p className="text-[10px]">{device.tipo_dispositivo_text}</p>
      </div>
    </div>
  );
}
