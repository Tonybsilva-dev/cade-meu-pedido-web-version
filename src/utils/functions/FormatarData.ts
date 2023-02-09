export function formatarDataPTBR(data: any) {
  const dataFormatada = new Date(data);

  data = dataFormatada.toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  return data;
}
