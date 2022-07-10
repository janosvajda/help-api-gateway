## Description

This repository is part of my !Help project:  https://miro.com/app/board/uXjVOnXji6E=/

## Repositories

- https://github.com/janosvajda/help-grpc-proto - Shared Proto Repository of gRPC Protocol Buffers (proto) files.
- https://github.com/janosvajda/help-api-gateway - API Gateway
- https://github.com/janosvajda/help-auth-svc - Authentication SVC (gRPC)
- https://github.com/janosvajda/help-virtual-hat-svc Virtual Hat SVC (gRPC)
- https://github.com/janosvajda/help-mobile-app - Web, mobile app (React Native)

## Installation

Install protobuf compiler

Ubuntu:

sudo apt install protobuf-compiler

Mac:

brew install grpc protobuf


```bash
$ npm install
$ npm run proto:install
$ npm run proto:all
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Author

- Janos Vajda
