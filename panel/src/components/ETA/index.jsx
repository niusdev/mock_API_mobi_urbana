import { useState } from "react";
import ETAList from "./ETAList";
import ETAChart from "./ETAChart";

export default function ETA({ itens }) {
  
  const [busca, setBusca] = useState("");
  const [limite, setLimite] = useState(5); 

  const filtrados = itens.filter((item) =>
    item.linha.toString().includes(busca) ||
    item.paradaId?.toString().includes(busca)
  );

  const exibidos = filtrados.slice(0, limite);

  return (
    <div style={{ background: "#2c2c2c", padding: 20, borderRadius: 10 }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          paddingTop: 20,
          fontSize: 24,
          width: "100%",
        }}
      >
        Tempo Estimado de Chegadas (ETA)
      </h2>

      <input
        type="text"
        placeholder="Buscar por linha ou parada..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          setLimite(5);  
        }}
        style={{
          width: "70%",
          padding: "10px 16px",
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #555",
          background: "#111",
          color: "white",
          display: "block",
          margin: "0 auto 20px auto",
        }}
      />

      <div
        style={{
          display: "flex",
          background: "#0d0d0d",
          color: "white",
          width: "100%",
        }}
      >
        {/* Gráfico */}
        <div
          style={{
            flex: 1,
            borderRight: "1px solid #333",
            padding: 20,
            minHeight: 400, 
          }}
        >
          <ETAChart data={filtrados} />
        </div>

        {/* Lista */}
        <div
          style={{
            width: 420,
            background: "#1a1a1a",
            padding: 20,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ETAList itens={exibidos} />

          {limite < filtrados.length && (
            <button
              onClick={() => setLimite((prev) => prev + 5)}
              style={{
                marginTop: 20,
                padding: "10px 16px",
                background: "#333",
                border: "1px solid #555",
                borderRadius: 8,
                color: "white",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              Mostrar mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
