# deferred-promise-ts

## Overview

A tiny library, containing a strongly typed deferred-promise class, that leverages ES6 promises and implements the Promise<T> interface

## The Problems Being Solved

Allows deferred resolution of promises

## Key Features

A DeferredPromise class, that both satisfies the Promise interface, and also allows promise resolution to be triggered

## Installation

```
    // npm
    npm i @ablestack/deferred-promise-ts --save

    // yarn
    yarn add @ablestack/deferred-promise-ts
```

## Abridge Usage Example

```TypeScript
// TODO

```

### Disclaimers

This code was initially developed for use in a single commercial project. It is being shared in case useful to others, and as a contribution to the development community and the great tools and libraries that already exist.

### Refinements and Enhancements Needed

- Open to suggestions and contributions

## Companion Libraries

This library is part of a collection of companion tools and libraries under the [AbleStack](https://github.com/ablestack) umbrella. All of these libraries share the common goal:

> Helping small teams and solo-developers build big ideas rapidly and affordably

To achieve these goals, the following principles are applied:

- Selectively **leverage existing open source tools and libraries**, where, high quality, open source tools and libraries where possible
  - Curate usage examples, and guidance where available, and create where not available
- Prioritize technology choices that **embrace open source**
  - PostgreSQL over MSSQL is an example of this
- **Avoid** technology choices that could result in **hosting vendor lock-in**
  - ApolloGraphQL over AWS Amplify is an example of this
- **Automate wherever possible**, from development, through testing, to deployment, monitoring, and maintenance
  - Codegen from strongly types schemas is a good example of this.
- Where needed, **develop high quality, open source tools and libraries** to augment and automate existing open source tooling and libraries

## Release Notes

### Notes 0.3.0

- Initial beta-ready release
