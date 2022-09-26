import { useState } from 'react';
import { Container,Header,HeaderText,Body } from './App.styles';
import { Item } from './types/item';
import { category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {
  const[list, setList] = useState(items);
  const[currentMonth, setCurrentMonth]= useState()
                  

  return (
    <Container>
      <Header>
       <HeaderText>Sistema Financeiro</HeaderText>

      </Header>
      <Body>
       {/*Área de informações*/}

       {/*Área de inserção*/}

       {/*Tabela de itens*/}

      </Body>

    </Container>

  );

}

  
export default App;
