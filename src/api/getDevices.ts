export default async function getDevices() {
  const token = process.env.TOKEN || "";
  
  const res = await fetch(
    "https://apiintegracao.milvus.com.br/api/dispositivos/listagem?order_by=tipo_dispositivo_id&is_descending=false&total_registros=25",
    { method: "POST", headers: { Authorization: token } }
  );
  const data: DeviceResponse = await res.json();
  return data.lista;
}
