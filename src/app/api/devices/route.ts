export async function GET() {
  const milvus = process.env.TOKEN || "";

  const res = await fetch(
    "https://api.milvus.com.br/api/dispositivos/list?is_paginate=true&order_by=id&is_descending=true&total_registros=100",
    {
      method: "POST",
      headers: { Token: milvus, "Content-Type": "application/json" },
      body: JSON.stringify({
        filtro_body: { filtro_status_tipo: "__servidores__" },
      }),
      next: { revalidate: 120 },
    }
  );
  const data: MilvusResponse = await res.json();
  return Response.json(data.lista);
}
