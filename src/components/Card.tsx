"use client";
import useStatusStore from "@/store/StatusStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const getStatus = async (id: number) => {
  const router = useRouter();
  const res = await fetch(`${router.basePath}/api/status?id=${id}`);
  const data = await res.json();
  return data as StatusResponse;
};

export default function Card({
  device,
  id,
}: {
  device: MilvusDevice;
  id: number;
}) {
  const [color, setColor] = useState("bg-zinc-400");
  const [status, setStatus] = useState("");
  const { setStatusList } = useStatusStore();
  const [delay, setDelay] = useState(2000 + id * 1500);

  const updateStatus = async () => {
    getStatus(device.id)
      .then((res: StatusResponse) => {
        const currentStatus = res.status.status;
        setStatus(currentStatus);
        setStatusList(device.id, currentStatus);
        if (currentStatus == "Online") setColor("bg-green-400");
        else if (currentStatus == "Offline") setColor("bg-red-400");
        else setColor("bg-zinc-400");
        console.log(res);
      })
      .catch(() => {
        setStatus("")
        console.log("error");
      });
    console.log(device.hostname);
  };

  useEffect(() => {
    const timeout = setTimeout(updateStatus, 2000 + id * 1500);
    // const interval = setInterval(updateStatus, 122000 + id * 5000);
    return () => {
      clearTimeout(timeout);
      // clearInterval(interval);
    };
  }, []);

  return (
    <div className="card flex flex-col items-center text-zinc-600 h-fit overflow-hidden">
      <div className="flex text-center flex-1 items-center justify-between w-full">
        <p className="text-xs pl-3">{device.tipo_dispositivo_text}</p>
        <p
          className={`${color} py-2 px-4 text-white text-xs shadow-inner rounded-bl-md min-h-[32px]`}
        >
          {status}
        </p>
      </div>
      <div className="p-3">
        <h2 className="text-zinc-800 font-medium truncate w-32">
          {device.hostname || "N/A"}
        </h2>
        <h4 className="text-xs capitalize truncate w-32">
          {device.nome_fantasia}
        </h4>
      </div>
    </div>
  );
}
