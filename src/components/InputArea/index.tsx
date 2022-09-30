import { useState } from 'react' ;
import * as C from '.' ;
import { Item} from '../../types/Item' ;

import { categories } from '../../data/categories' ;
import { newDateAdjusted} from '../../helpers/dateFilter' ;

type Props = {
  onAdd : ( item : Item ) => void ;
} ;

export const InputArea = ( { onAdd } : Props ) => {
  const [ dataField , setDateField ] = useState ( '' ) ;
  const [ CategoryField , setCategoryField ] = useState ( '' ) ;
  const [ titleField , setTitleField ] = useState ( '' ) ;
  const [ fieldValue , setFieldValue ] = useState ( 0 ) ;

  let categoryKeys : string[ ] = Object . keys (categories);

  const handleAddEvent = ( ) => {
    let errors : string [ ] = [ ] ;

    if ( isNaN ( new Date ( dateField ) . getTime ( ) ) ) {
      errors . push('Invalid data!' );
    }
    if ( ! categoryKeys . includes ( categoryField ) ) {
      errors . push('Invalid Category!' );
    }
    if ( titleField === '' ) {
      errors . push('Empty title!' );
    }
    if ( fieldValue <= 0 ) {
      errors . push('Invalid value!' );
    }

    if ( errors . length > 0 ) {
      alert ( errors . join( "\n" ) );
    } else {
      onAdd( {
        date : newDateAdjusted(dateField),
        category : categoryField ,
        title : titleField ,
        value : valueField
      } ) ;
      clearFields();
    }
  }

  const clearFields = ( ) => {
    setDateField( '');
    setCategoryField( '');
    setTitleField( '');
    setValueField(0);
  }

  return (

    <C.container>
        <C.Inputtag >
          <C.InputTitle > Data </C.InputTitle>
          < C.Input type = "date" value = { dateField } onChange = { e => setDateField ( e . target.value ) }/>
        </C.Inputtag>
        <C.Inputtag>
          <C.InputTitle> Category </C.InputTitle >
          <C.Select value = {categoryField} onChange = { e => setCategoryField ( e.target.value)}>
            < >
              <option> </option >
              { categor.yKeys . map ( ( key , index ) => (
                <option key = { index } value = { key } > { categories [ key ] . title } </option>
              ) ) }
            </>
          </C.Select>
        </C.Inputtag >
        <C.Inputtag>
          < C.InputTitle > Title </C.InputTitle >
          < C . Input type = "text" value = { titleField } onChange = { e => setTitleField ( e . target . value ) } / >
        </C.Inputtag>
      <C.Inputtag>
        <C.EntryTitle > Value </C.EntryTitle>
          < C . Input type = "number" value = { value.Field } onChange = { e => setValueField ( parseFloat ( e . target . value ) ) }/>
      </C.InputLabel>
      <C.InputLabel>
        <C.EntryTitle> </C.EntryTitle>
        <C.Button onClick = { handleAddEvent } > Add </C.Button>
      </C.InputLabel>
    </C.container>
  );

} 

function setValueField(arg0: number) {
  throw new Error('Function not implemented.');
}
