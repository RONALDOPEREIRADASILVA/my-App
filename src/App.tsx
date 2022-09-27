
import { useState ,useEffect} from 'react';
import { Container,Header,HeaderText,Body } from './App.styles';
import { Item } from './types/item';
import { category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrenteMonth, filterListByMonth} from './helpers/dateFilter';
import { TableArea } from './components/TableArea';



const App= () =>{
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrenteMonth());

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);


  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>

      </Header>
      <Body>
        {/*Área de informações*/}

        {/*Área de inserção*/}

        <TableArea list={filteredList} />

      </Body>

    </Container>

  );

}

  
export default App;
