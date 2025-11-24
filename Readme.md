# API Mock de Transporte Urbano (usando o JSON server)
> Obs.: Não foi necessário implementar as funções de requisição pois o próprio Json Server faz a criação de rotas de requisição de forma automática.

Para utilizar: 
- Instalar dependências: **npm install**
- Iniciar o servidor: **npm run server**
- A API roda em: http://localhost:3000 (essa é a rota base)

## Rotas Disponíveis <br>
Deixamos descritas aqui algumas rotas e filtros (parametros de busca) que o jsonserver aceita. Exemplo: http://localhost:3000/linhas (se jogar isso no navegador com o "servidor" rodando você já tem acesso as informações em JSON)

    
> ":id" deve ser substitído também pelo indice do item dentro do array.

### Rotas: 
#### Linhas de Ônibus: 
`GET /linhas`
<br> 
`GET /linhas/:id`
#### Paradas: 
`GET /paradas`
<br> 
`GET /paradas/:id`
#### Horários de Ônibus: 
`GET /horariosOnibus`
<br> 
`GET /horariosOnibus/:id`
#### Veículos: 
`GET /veiculos`
<br> 
`GET /veiculos/:id`
#### Rotas de Ônibus (pontos GPS da linha): 
`GET /rotasOnibus`
<br> 
`GET /rotasOnibus/:id`
#### Trânsito:
`GET /transito`
<br> 
`GET /transito/:id`
#### Eventos de Trânsito: 
`GET /eventosTransito`
<br> 
`GET /eventosTransito/:id`
#### Previsão de Chegada: 
`GET /previsaoChegada`
<br> 
`GET /previsaoChegada/:id`
#### Regiões: 
`GET /regioes`
<br> 
`GET /regioes/:id`

# Detalhes dos Dados de Mobilidade

## linhas
Representa as linhas de ônibus disponíveis.
- **id**: Identificador único da linha.  
- **codigo**: Código oficial da linha.  
- **cor**: Cor identificadora do ônibus.  
- **nome**: Nome da linha.

---

## horariosOnibus
Define os horários de operação das linhas.
- **id**: Identificador único do registro.  
- **linha**: Linha à qual o horário pertence.  
- **saidaInicial**: Horário de partida do ponto inicial.  
- **chegadaFinal**: Horário estimado de chegada ao destino.

---

## paradas
Lista e descreve as paradas oficiais do trajeto.
- **id**: Identificador único da parada.  
- **nome**: Nome da parada.  
- **lat**: Localização geográfica.
- **lng**: Localização geográfica.
---

## veiculos
Informações sobre os veículos em circulação.
- **id**: Identificador único do veículo.  
- **linha**: Linha que o veículo está atendendo.  
- **placa**: Placa do ônibus.  
- **status**: Situação atual (operando, manutenção, parado). 
- **velocidade**: Velocidade no momento da captura.
- **lat**: Localização geográfica.
- **lng**: Localização geográfica.

---

## transito
Dados gerais sobre o status do trânsito nas regiões.
- **id**: Identificador único do registro.  
- **regiao**: Nome da região monitorada.  
- **status**: Condição do trânsito (leve, moderado, intenso).  
- **velocidadeMedia**: Velocidade média dos veículos na região.

---


## Parâmetros de busca aceitos (JSON Server): <br>

urlBase: `http://localhost:3000`
    
Após o "=" substituir o valor pelo que deseja filtrar.
-   Igualdade, ex.:<br> `urlBase/veiculos?linha=101`
-   Busca Parcial:<br> `urlBase /linhas?nome_like=Centro`
-   Maior que/menor que: <br>
        `urlBase/veiculos?velocidade_gte=30` <br>
        `urlBase/regioes?congestionamento_lte=5`
-   Diferente:<br> `urlBase/eventosTransito?tipo_ne=obra`
-   Ordenação:<br> `urlBase/veiculos?_sort=velocidade&_order=asc`
-   Múltiplos valores:<br> `urlBase/linhas?codigo=101&codigo=202`






 



















  
    