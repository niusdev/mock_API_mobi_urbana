// DOCS: Responsável pelas validações dos dados recebidos da API, detectando anomalias

export function validarCoordenadas(v) {
  return (
    typeof v.lat === "number" &&
    typeof v.lng === "number" &&
    v.lat >= -90 &&
    v.lat <= 90 &&
    v.lng >= -180 &&
    v.lng <= 180
  );
}

export function validarVelocidade(v) {
  return v.velocidade >= 0 && v.velocidade <= 120;
}

export function validarETA(item) {
  const agora = new Date();
  const chegada = new Date(`1970-01-01T${item.chegadaPrevista}:00`);
  return chegada > agora;
}

export function detectarAnomalias(veiculos, etas) {
  const erros = [];

  veiculos.forEach((v) => {
    if (!validarCoordenadas(v)) {
      erros.push({ tipo: "Coordenada inválida", item: v });
    }
    if (!validarVelocidade(v)) {
      erros.push({ tipo: "Velocidade incoerente", item: v });
    }
  });

  etas.forEach((e) => {
    if (!validarETA(e)) {
      erros.push({ tipo: "ETA negativo", item: e });
    }
  });

  return erros;
}