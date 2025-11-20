API Mock de Transporte Urbano (usando o JSON server)
Obs.: Nesse caso não precisei fazer nenhuma implementação de funções pois o próprio Json Server já faz isso por baixo dos panos. 

Para utilizar: 
- Instalar dependências: **npm install**
- Iniciar o servidor: **npm run server**
- A API roda em: http://localhost:3000 (essa é a rota base)

Rotas Disponíveis(Todas vão ser GET já que é só um mock): <br>
    Coloquei descritas aqui algumas rotas e coloquei também alguns filtros (parametros de busca) que o jsonserver aceita. Lembrando que para fazer a requisição tem que por a rota base antes. Assim: http://localhost:3000/linhas (se jogar isso no navegador com o "servidor" rodando você já tem acesso as informações em JSON)

    OBS.: 
        - o ":id" deve ser substitído também pelo indice do item dentro do array.
    Rotas: 
    - Linhas de Ônibus: 
        GET /linhas
        GET /linhas/:id
    - Paradas: 
        GET /paradas
        GET /paradas/:id
    - Horários de Ônibus:
        GET /horariosOnibus
        GET /horariosOnibus/:id
    - Veículos:
        GET /veiculos
        GET /veiculos/:id
    - Rotas de Ônibus (pontos GPS da linha):
        GET /rotasOnibus
        GET /rotasOnibus/:id
    - Trânsito:
        GET /transito
        GET /transito/:id
    - Eventos de Trânsito:
        GET /eventosTransito
        GET /eventosTransito/:id
    - Previsão de Chegada:
        GET /previsaoChegada
        GET /previsaoChegada/:id
    - Regiões: 
        GET /regioes
        GET /regioes/:id

Parâmetros de busca aceitos (JSON Server): <br>
    urlBase: http://localhost:3000
    
    - OBS.: após o "=" substituir o valor pelo que deseja filtrar
    -   Igualdade, ex.: urlBase/veiculos?linha=101
    -   Busca Parcial: urlBase /linhas?nome_like=Centro
    -   Maior que/menor que: 
                            urlBase/veiculos?velocidade_gte=30
                            urlBase/regioes?congestionamento_lte=5
    -   Diferente: urlBase/eventosTransito?tipo_ne=obra
    -   Ordenação: urlBase/veiculos?_sort=velocidade&_order=asc
    -   Múltiplos valores (ou): urlBase/linhas?codigo=101&codigo=202

Para testar as rotas basta deixar o json server rodando e jogar a url desejada
no navegador. Depois no front é só implementar as funções para consumir as rotas.





 



















  
    