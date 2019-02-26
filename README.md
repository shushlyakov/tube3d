# Tube3D

## Install pre-requisites

1. [Install Git](https://git-scm.com/).
2. [Install npm and Node.js](https://nodejs.org/).
3. Update npm:
    ```
    # npm install -g npm@latest
    ```
4. Install Polymer CLI:
    ```
    # npm install -g polymer-cli@latest
    ```
5. [Install Yarn](https://yarnpkg.com/en/docs/install).

## Install application

1. Clone repository:
    ```
    $ git clone https://github.com/shushlyakov/tube3d.git
    ```
    
2. Install dependencies:
    ```
    $ cd tube3d
    $ yarn install
    ```
3.  Start app
    ```
    $ polymer serve 
    ```


## Build and serve

Build:
```
$ polymer build 
```
Serve:
```
$ polymer serve -H 0.0.0.0 build/es6prod
```
