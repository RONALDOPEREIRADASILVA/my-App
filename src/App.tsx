import { useState ,useEffect} from 'react';
import { Container,Header,HeaderText,Body } from './App.styles';
import { Item } from './types/item';
import { category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrenteMonth, filterListByNonth} from './helpers/dateFilter';

const App = () => {
  const[list, setList] = useState(items);
  const[filteredList,setfilteredList]= useState<Item[]>([]);
  const[currentMonth, setCurrentMonth]= useState(getCurrenteMonth());

  useEffect(()=>{
    setfilteredList( filterListByNonth(list , currentMonth));

  },[list, currentMonth]);
                  

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

  )

}

  
export default App;
