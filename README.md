# TODO
* Add propTypes
* Add redux for each component not global.
* Add i18n
* Add test

** UNDERSTAND HOW IS WORK REDUX WITH GATSBY **



 A continuación son las librerias que se han instalado para el testing de componentes. Has tenido problemas con el testing del header porque tiene un compnente dentro que usa redux, por lo que estas haciendo el shallow testing. Has visto que con 
* enzyme es posible, has conseguido pasar que el test pase pero lo que ocurre es que snapshot no es como deberia
* react-testing-library, es lo que sugiere la documentacion de gatsby pero no sabes como hacer el shallow con ella
* react-addons-test-utils --> navegando has llegado a este

  "devDependencies": {
    "babel-jest": "^24.5.0",
    "babel-preset-gatsby": "^0.1.10",
    "enzyme": "^3.9.0",                   //shallow
    "enzyme-adapter-react-16": "^1.12.1", //shallow
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.5.0",
    "prettier": "^1.15.2",
    "react-addons-test-utils": "^15.6.2", // https://stackoverflow.com/questions/42348397/shallow-rendering-jest-snapshots
    "react-test-renderer": "^16.8.6",
    "react-testing-library": "^7.0.0",  //https://www.gatsbyjs.org/docs/testing-react-components/
    "redux-mock-store": "^1.5.3"
  },