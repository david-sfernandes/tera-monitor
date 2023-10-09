export default async function getStatus(id: number) {
  let revalidate = 120;
  const key = process.env.API_KEY || "";
  
  const res = await fetch(
    `https://apiintegracao.milvus.com.br/api/dispositivos/status/${id}`,
    { headers: { Authorization: key }, next: { revalidate } }
  );
  try {
    const data: StatusResponse = await res.json();
    var today = new Date();
    return { status: data, date: today };
  } catch (error) {
    console.error(">> Err: ", id);
  }
}
