import * as C from './styles'
import { Item } from '../../types/item';

type props = {
    list: Item[]
}


export const TableArea =({list}:props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>TÍtulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>vALOR</C.TableHeadColumn>
                </tr>

            </thead>

            <tbody>
                {list.map((item,index)=>(
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                ))}

            </tbody>
        </C.Table>
    );
}