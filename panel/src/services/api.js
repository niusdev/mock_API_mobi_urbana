import axios from "axios";

export const API_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
});

// endpoints
export const getVeiculos = () => api.get("/veiculos");
export const getETA = () => api.get("/previsaoChegada");
export const getTransito = () => api.get("/transito");
export const getLinhas = () => api.get("/linhas");
