import DeviceList from "./DeviceList";
import Select from "./Select";
import Stats from "./Stats";

const getDevices = async () => {
  const res = await fetch("http://localhost:3000/api/devices");
  const data = await res.json();
  return data as MilvusDevice[];
};


export default async function Home() {
  const devices = await getDevices();

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 px-4 mt-6 w-full h-full max-w-5xl mx-auto gap-3">
        <h1 className="text-xl font-semibold text-zinc-900">
          Monitoramento de dispositivos
        </h1>
        <section className="card w-full text-zinc-900 flex text-sm px-3 py-2 gap-4 mt-3">
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
