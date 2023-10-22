"use client";
import Info from "./Info";
import useStatusStore from "@/store/StatusStore";

export default function Stats({ devices }: { devices: MilvusDevice[] }) {
  const { statusList } = useStatusStore();
  const online = statusList.filter((i) => i.status == "Online");
  const offline = statusList.filter((i) => i.status == "Offline");
  const other = statusList.filter((i) => i.status == "");

  return (
    <section className="w-full text-zinc-900 gap-3 my-4 grid grid-cols-2 md:grid-cols-4">
      <Info title="Cadastrados" color="orange" value={devices.length} />
      <Info title="Online" color="green" value={online.length} />
      <Info title="Offline" color="red" value={offline.length} />
      <Info title="Não encontrado" color="zinc" value={other.length} />
    </section>
  );
}
