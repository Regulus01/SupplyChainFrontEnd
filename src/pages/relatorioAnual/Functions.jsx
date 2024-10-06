function AtualizarGrafico(documentStyle, dataCharp) {
  return {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],

    datasets: [
      {
        label: "Entradas",
        backgroundColor: documentStyle.getPropertyValue("--green-500"),
        borderColor: documentStyle.getPropertyValue("--green-500"),
        data: [
          dataCharp?.janeiro?.totalDeEntrada,
          dataCharp?.fevereiro?.totalDeEntrada,
          dataCharp?.março?.totalDeEntrada,
          dataCharp?.abril?.totalDeEntrada,
          dataCharp?.maio?.totalDeEntrada,
          dataCharp?.junho?.totalDeEntrada,
          dataCharp?.julho?.totalDeEntrada,
          dataCharp?.agosto?.totalDeEntrada,
          dataCharp?.setembro?.totalDeEntrada,
          dataCharp?.outubro?.totalDeEntrada,
          dataCharp?.novembro?.totalDeEntrada,
          dataCharp?.dezembro?.totalDeEntrada,
        ],
      },
      {
        label: "Saidas",
        backgroundColor: documentStyle.getPropertyValue("--red-500"),
        borderColor: documentStyle.getPropertyValue("--red-500"),
        data: [
          dataCharp?.janeiro?.totalDeSaida,
          dataCharp?.fevereiro?.totalDeSaida,
          dataCharp?.março?.totalDeSaida,
          dataCharp?.abril?.totalDeSaida,
          dataCharp?.maio?.totalDeSaida,
          dataCharp?.junho?.totalDeSaida,
          dataCharp?.julho?.totalDeSaida,
          dataCharp?.agosto?.totalDeSaida,
          dataCharp?.setembro?.totalDeSaida,
          dataCharp?.outubro?.totalDeSaida,
          dataCharp?.novembro?.totalDeSaida,
          dataCharp?.dezembro?.totalDeSaida,
        ],
      },
    ],
  };
}

export default AtualizarGrafico;
