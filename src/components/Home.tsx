import { GET } from "@/app/api/devices/route";
import DeviceList from "./DeviceList";
import Select from "./Select";
import Stats from "./Stats";

export default async function Home() {
  const data = await GET()
  const devices: MilvusDevice[] = await data.json();

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 px-4 mt-6 w-full h-full max-w-5xl mx-auto gap-3 pb-4">
        <h1 className="text-xl font-semibold text-zinc-900">
          Monitoramento de dispositivos
        </h1>
        <section className="card w-full text-zinc-900 flex text-sm px-3 py-2 gap-4 mt-3 flex-wrap">
          <Select title="Nome do cliente" />
          <Select title="Tipo de dispositivo" />
          <Select title="Status" />
        </section>
        <Stats devices={devices}/>
        <DeviceList devices={devices}/>
      </div>
    </main>
  );
}
