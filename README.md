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

Este repositório contém um Dockerfile que pode ser usado para criar uma imagem Docker que suporta ambientes de desenvolvimento e produção para a aplicação.

## Pré-requisitos

Para usar esta imagem Docker, você precisará ter os seguintes softwares instalados em seu sistema:

- Docker
- Yarn
- NodeJS 18.x ou superior

## Como usar

Para começar, clone este repositório em seu computador e navegue até o diretório raiz do projeto:

```sh
git clone git@github.com:VictrCruz312/black-skull.git
cd black-skull
```

Em seguida, execute o seguinte comando para construir a imagem Docker:

```sh
docker build -t black-skull .
```

Isso criará uma imagem Docker com o nome black-skull.

## Executando em ambiente de desenvolvimento

Para executar a aplicação em um ambiente de desenvolvimento, execute o seguinte comando:

```sh
docker run -it -p 3000:3000 black-skull
```

Isso iniciará o servidor de desenvolvimento da aplicação React na porta 3000 do seu computador. Você poderá acessar a aplicação em seu navegador visitando o endereço [http://localhost:3000](http://localhost:3000)

## Executando em ambiente de produção

Para executar a aplicação em um ambiente de produção, execute o seguinte comando:

```sh
docker run -d -p 80:80 black-skull
```

Isso iniciará o servidor da aplicação React em um contêiner Docker na porta 80 do seu computador. Você poderá acessar a aplicação em seu navegador visitando o endereço [http://localhost:8080](http://localhost:8080)
