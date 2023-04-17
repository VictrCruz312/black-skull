# Black skull

#### [Acesse a aplicação online](https://black-skull.vercel.app/)

# Informações da aplicação

## Tecnologias utilizadas
- React
- React icons
- Styled components
- TypeScript

## Requisitos
- NodeJS `18.x` ou superior
- gerenciador de pacotes `yarn`

## Opcional

Este repositório utiliza o docker-compose que pode ser usado para criar uma imagem Docker que suporta ambientes de desenvolvimento e produção para a aplicação.

## Pré-requisitos

Para usar, você precisará ter os seguintes softwares instalados em seu sistema:

- Docker
- Docker-compose
- Yarn

## Como usar

Para começar, clone este repositório em seu computador e navegue até o diretório raiz do projeto:

```sh
git clone git@github.com:VictrCruz312/black-skull.git
cd black-skull
```

## Executando em ambiente de desenvolvimento e produção ao mesmo tempo

Para executar a aplicação em um ambiente de desenvolvimento e produção, execute o seguinte comando:

```sh
docker compose up
#ou
docker-compose up
```

## Executando em ambiente de desenvolvimento

Para executar a aplicação em um ambiente de desenvolvimento, execute o seguinte comando:

```sh
docker compose up development
#ou
docker-compose up development
```

Isso iniciará o servidor de desenvolvimento da aplicação React na porta 5173 do seu computador. Você poderá acessar a aplicação em seu navegador visitando o endereço [http://localhost:5173](http://localhost:5173)

## Executando em ambiente de produção

Para executar a aplicação em um ambiente de produção, execute o seguinte comando:

```sh
docker compose up production
#ou
docker-compose up production
```

Isso iniciará o servidor da aplicação React em um contêiner Docker na porta 8080 do seu computador. Você poderá acessar a aplicação em seu navegador visitando o endereço [http://localhost:8080](http://localhost:8080)
