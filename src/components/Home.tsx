"use client";
import getDevicesByType from "@/api/getDevicesByType";
import Card from "@/components/Card";
import Info from "@/components/Info";
import Image from "next/image";

export default async function Home() {
  const devices = (await getDevicesByType()) || [];

  return (
    <main className="flex flex-col min-h-screen px-16 bg-cyan-500">
      <header className="flex items-center">
        <div className="px-8 py-2 bg-white rounded-b-2xl inline-block shadow-md">
          <div className="w-32 h-8 relative">
            <Image
              src="/logo.png"
              alt="Logo"
              width={134}
              height={27}
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold ml-4">
          Monitoramento de dispositivos
        </h1>
      </header>
      <div className="flex flex-wrap bg-white flex-1 py-6 px-24 mt-6 w-full h-full rounded-t-2xl shadow-md gap-3">
        <div className="w-full text-zinc-900 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Servidores</h1>
          <Info title="Dispositivos" value={devices.length} />
        </div>
        {devices.map((device, i) => (
          <Card key={device.id} device={device}/>
        ))}
      </div>
    </main>
  );
}
