import { detectarAnomalias } from "../../utils/validators";

export default function Anomalias({ veiculos, etas, serverTime }) {
  const erros = detectarAnomalias(veiculos, etas, serverTime);

  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Anomalias Detectadas
      </h2>

      {erros.length === 0 && (
        <p style={{ textAlign: "center", color: "#5efc82" }}>
          Nenhuma anomalia encontrada
        </p>
      )}

      {erros.length > 0 &&
        erros.map((erro, i) => (
          <div
            key={i}
            style={{
              background: "#2c2c2c",
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
              borderLeft: "4px solid #ff4d4d",
            }}
          >
            <strong>{erro.tipo}</strong>
            <pre
              style={{
                marginTop: 8,
                fontSize: 12,
                background: "#111",
                padding: 10,
                borderRadius: 6,
              }}
            >
              {JSON.stringify(erro.item, null, 2)}
            </pre>
          </div>
        ))}
    </div>
  );
}
