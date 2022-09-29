import {styled} from 'styled-components' ;

export const TableLine = styled . tr`` ; _

export columntable const = styled . all `
     padding: 10px 0;
` ;

export const Category = styled . div < { color : string } > `
     display: in-line block;
     padding: 5px 10px;
     edge radius: 5px;
     color: #FFF;
     background-color: ${ props => props . color } ;
` ;

export const Value = styled . div < { color : string } > `
     color: ${ props => props . color } ;
` ;