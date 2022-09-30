import { useState ,useEffect} from 'react';
import { Container,Header,HeaderText,Body } from './App.styles';
import { Item } from './types/item';
import { Category } from './components/tableitem/styles';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrenteMonth, filterListByMonth} from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import {InfoArea} from  './components/InfoAria';
import{InputArea} from './components/InputArea'



const App= () =>{
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrenteMonth());
  const [income , setIcome] = useState(0);
  const [expene , setExpense] = useState(0);

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  useEffect(() =>{
    let incomeCount = 0;
    let expeneCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expeneCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIcome(incomeCount);
    setExpense(expeneCount);
  },[filteredList]);

  const handleMomthChange = (newMonth : string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem =(item :Item) =>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }


  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>

      </Header>
      <Body>
        <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMomthChange}
        income={income}
        expense={expene}
        />

        <InputArea onAdd={ handleAddItem}/>

        <TableArea list={filteredList} />

      </Body>

    </Container>

  );

}

  
export default App;
