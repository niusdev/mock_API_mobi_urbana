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
  return v.velocidade >= 0 && v.velocidade <= 100;
}

export function validarETA(item, serverTime) {
  if (!/^\d{2}:\d{2}$/.test(item.chegadaPrevista)) {
    return { valido: false, anomalia: true, motivo: "Formato inválido" };
  }

  const [h, m] = item.chegadaPrevista.split(":").map(Number);
  if (h > 23 || m > 59) {
    return { valido: false, anomalia: true, motivo: "Hora ou minuto inválido" };
  }

  const agoraUTC = new Date(serverTime);

  const agoraBR = new Date(
    agoraUTC.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );

  const chegadaBR = new Date(agoraBR);
  chegadaBR.setHours(h, m, 0, 0);

  const valido = chegadaBR > agoraBR;

  return {
    valido,
    anomalia: !valido,
    motivo: !valido ? "ETA passado (ETA negativo)" : null
  };
}

export function validarStatusVelocidade(v) {
  // Se veículo está em manutenção, não pode ter velocidade > 0
  if (v.status === "manutenção" && v.velocidade > 0) {
    return {
      tipo: "Movimento inconsistente",
      motivo: `Veículo em manutenção não pode estar em movimento (velocidade = ${v.velocidade})`,
      item: v
    };
  }

  // Se veículo está parado, mas velocidade > 0, também pode ser inconsistente
  if (v.status === "parado" && v.velocidade > 0) {
    return {
      tipo: "Velocidade incoerente",
      motivo: `Veículo parado, mas velocidade = ${v.velocidade}`,
      item: v
    };
  }

  return null;
}

export function detectarAnomalias(veiculos, etas, serverTime) {
  const erros = [];

  veiculos.forEach((v) => {
    if (!validarCoordenadas(v)) {
      erros.push({ tipo: "Coordenada inválida", item: v });
    }
    if (!validarVelocidade(v)) {
      erros.push({ tipo: "Velocidade incoerente", item: v });
    }
    const statusVelocidadeErro = validarStatusVelocidade(v);
    if (statusVelocidadeErro) {
      erros.push(statusVelocidadeErro);
    }
  });

  etas.forEach((e) => {
    const resultado = validarETA(e, serverTime);

    if (resultado.anomalia) {
      erros.push({
        tipo: resultado.motivo,
        item: e
      });
    }
  });

  return erros;
}
