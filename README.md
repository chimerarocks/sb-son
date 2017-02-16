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

 