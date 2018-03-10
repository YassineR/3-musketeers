# Cash Converter

## Introduction

This library can converte an amount of money in 35 different currency. This library can be used with Node.Js

For example, if I want to convert 30 EUR in USD :
 ```console
node index.js 30 EUR USD
```
Gives : 
```console
✓ 36.87 (USD) US Dollar
```

##### What is Node.Js ? 
Node.js is an open source project designed to help you write JavaScript programs that talk to networks, file systems or other I/O (input/output, reading/writing) sources.

More information [here](https://github.com/92bondstreet/javascript-empire#course-3---nodejs-master-of-universe)

## Installation

To use this converter, multiple libraries are required. 
We need : 
* conf
* chalk
* update-notifier
* got
* ora

To install a library, it's very simple ! The command is :
```console
npm install [NameOfTheLibrary]
```

For example, to install the conf's library : 
```console
npm install conf
```

Very simple ! 

## How to use 

1. Launch node.js
1. Go to the bin directory (For example C:\Users\Username\Documents\GitHub\3-musketeers\cash\bin) using the cd command
1. Execute the index, like this : 
```console
node index.js [value] [CurrencieToConvert] [DesiredCurrencie]
```
As we saw : 
 ```console
node index.js 30 EUR USD
```
Gives : 
```console
✓ 36.87 (USD) US Dollar
```

## Good to know 

You can only give the currencie you want to convert. This will automatically convert the amount in US Dollar, in Pound Sterling and in Polish Zloty.

Example : 
 ```console
node index.js 30 EUR 
√ 36.87 (USD) US Dollar
√ 26.67 (GBP) Pound Sterling
√ 126.05 (PLN) Polish Zloty
```
