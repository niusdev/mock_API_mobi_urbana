import axios from "axios";

// DOCS: Responsável por configurar a comunicação com a API backend

export const API_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
});

// endpoints
export const getVeiculos = () => api.get("/veiculos");
export const getETA = async () => {
  const response = await api.get("/previsaoChegada");
  
  return {
    data: response.data,
    serverTime: response.headers['x-server-time']
  };
};

export const getTransito = () => api.get("/transito");
export const getLinhas = () => api.get("/linhas");
export const getParadas = () => api.get("/paradas");