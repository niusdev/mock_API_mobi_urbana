import { useEffect, useState } from "react";
import { getETA, getVeiculos } from "../services/api";

import ETA from "../components/ETA/index";
import Anomalias from "../components/Anomalias";

// DOCS: Responsável por renderizar a página principal do painel de mobilidade urbana.

export default function Dashboard() {

  const [eta, setEta] = useState([]); // ETA = exibir tempo estimado de chegada
  const [veiculos, setVeiculos] = useState([]);
  const [serverTime, setServerTime] = useState(null);

  // Função para carregar dados de ETA e veículos
  const carregar = async () => {
    const e = await getETA();
    const v = await getVeiculos();

    setEta(e.data);
    setVeiculos(v.data);
    setServerTime(e.serverTime);
    console.log(v.data)
  };

  useEffect(() => {
    carregar();
    const timer = setInterval(carregar, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minWidth: "70vw" }}>
      <header style={{ padding: 20 }}>
        <h1>Painel de Mobilidade Urbana</h1>
      </header>

      {/* Tempo Estimado */}
      <ETA itens={eta} />

      {/* Anomalias */}
      <Anomalias veiculos={veiculos} etas={eta} serverTime={serverTime} />
    </div>
  );
}
