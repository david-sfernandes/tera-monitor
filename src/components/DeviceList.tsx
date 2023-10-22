import Card from "./Card";

export default async function DeviceList({
  devices,
}: {
  devices: MilvusDevice[];
}) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {devices.map((device, i) => (
        <Card key={device.id} device={device} id={i} />
      ))}
    </section>
  );
}
