## bulma-lit element web app example project

## Contém a versão 0.94 da Bulma css encapsulada para uso no componente.

- um arquivo css foi gerado a partir de
```
npx sass bulma-0.9.4/bulma.sass src/bulma.css

```
- o arquivo foi encapsulado na tag `css` do Lit no arquivo `bulma-encapsulated.js`
- sobre bulma: https://bulma.io/documentation/
- a versão no github: https://github.com/jgthms/bulma/tree/0.9.4
- sobre sass: https://sass-lang.com/documentation/cli/dart-sass/
- sobre estilização com lit: https://lit.dev/docs/v2/components/styles/ 

## Conformidade ao standardJS, linting com eslint

## 100% de cobertura de testes e acessibilidade.

## Construído a partir de um starter app da open-wc, gerado a partir as instruções abaixo: 

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```bash
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
