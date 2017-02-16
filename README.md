# Integrando doctrine com zend-expressive

 Enquanto Doctrine não tem suporte nativo ao Zend3 é necessário uma adaptação do código.

## Getting Started

Remova a versão 3 do zend lib

```javascript
{
    ...
    "zendframework/zend-stdlib": "^2.7 ",
    ...
}
```

Atualize o projeto

```bash
$ composer update
```

Adicione a biblioteca do DoctrineORMModule

```bash
$ composer require doctrine/doctrine-orm-module
```

Criação dos arquivos de configuração do doctrine

doctrine-config.global.php
doctrine-module.php
aliases (Config, configuration, Configuration)

Rodando doctrine
```bash
$ vendor/bin/doctrine-module
```

Definir configurações do doctrine - doctrine.global.php

Definir configurações de annotation - doctrine.global.php , doctrine.php , DoctrineMiddleware

Registrar DoctrineMiddleware