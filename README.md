# 📘 **Sistema de Mobilidade Urbana (Grupo F)**

## 🚌 Visão Geral

Este repositório reúne duas partes integradas:

* **/api** → Mock API utilizando JSON Server ([acesse aqui](https://github.com/niusdev/mock_API_mobi_urbana));
* **/panel** → Aplicação cliente, responsável por consumir os dados da API e exibir um painel de mobilidade urbana;

O objetivo central é demonstrar **interoperabilidade**, consumo de dados em JSON e detecção de inconsistências em um ambiente distribuído.

---

# 📂 **Estrutura do Repositório**

```
/
├── api/         → Mock API
│   ├── db.json
│   ├── package.json
│   └── server.json
│
└── panel/       → Painel Cliente
    ├── src/
    │   ├── components/
    │   │   ├── Map/           → veículos no mapa
    │   │   ├── ETAList/       → previsão de chegada (ETA)
    │   │   ├── Anomalias/     → validação e inconsistências
    │   │   └── Header/        → menu/topo
    │   ├── services/          → integração com API
    │   ├── utils/             → funções de validação e cálculo
    │   ├── pages/             → Dashboard principal
    │   └── main.jsx
    ├── public/
    └── package.json
```

---

# 🚀 **Como executar a API (pasta /api)**

```bash
cd api
npm install
npm run server
```

A API ficará disponível em:

👉 **[http://localhost:3000](http://localhost:3000)**

### Endpoints principais

* `/linhas`
* `/horariosOnibus`
* `/paradas`
* `/veiculos`
* `/transito`
* `/rotasOnibus`
* `/eventosTransito`
* `/previsaoChegada`
* `/regioes`

---

# 🚀 **Como executar o Painel (pasta /panel)**

```bash
cd panel
npm install
npm run dev
```

Aplicação disponível em:

👉 **[http://localhost:5173](http://localhost:5173)**
*(ou porta exibida no terminal)*

---

# 📡 **Funcionalidades do Painel – Grupo F**

### ✔ **1. Previsão de Chegada (ETA)**

Consome `/previsaoChegada` e apresenta:

* linha
* parada
* horário previsto
* tempo restante

### ✔ **2. Veículos no Mapa**

Usa `/veiculos` para mostrar:

* posição (lat/lng)
* status
* velocidade
* linha correspondente

Mapa implementado via **Leaflet**.

### ✔ **3. Detecção de Anomalias**

Validação automática dos dados recebidos:

* Coordenadas inválidas
* Velocidade incoerente (negativa, muito alta etc.)
* ETA no passado
* Campos ausentes
* Dados inconsistentes

---

# 🔗 **Integração e Interoperabilidade**

O painel utiliza comunicação HTTP com a API mock via JSON, garantindo:

* padronização
* facilidade de consumo
* independência entre grupos
* rastreabilidade das inconsistências

As requisições são centralizadas em:

```
panel/src/services/api.js
```

---

# 📄 **Licença**

Projeto educacional — IFCE, Campus Tianguá.

---