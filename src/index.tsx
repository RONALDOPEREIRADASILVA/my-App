import  {Reagir}  from  'reagir' ;
import { ReactDOM} from  'react-dom' ;
import  './index.css' ;
import  App from  './App' ;
import reportWebVitals from './reportWebVitals' ;

ReactDOM . renderizar (
  < Reagir.StrictMode >
    <App/>
  </Reagir.StrictMode > ,
  document.getElementById ( 'root' )                 
);

// Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals ( ) ;