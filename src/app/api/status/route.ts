export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const key = process.env.API_KEY || "";

  const res = await fetch(
    `https://apiintegracao.milvus.com.br/api/dispositivos/status/${id}`,
    { headers: { Authorization: key } }
  );

  try {
    const data: MilvusStatus = await res.json();
    var today = new Date();
    return Response.json({ id: id, status: data, date: today });
  } catch (error) {
    return Response.json({
      message: `Erro ao buscar status do dispositivo ${id}`,
      error: error,
    });
  }
}
