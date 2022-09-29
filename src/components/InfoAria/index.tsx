import * as C from './styles' ;
import { formatCurrentMonth } from '../../helpers/dateFilter' ;
import { ResumeItem } from '../ResumeItem' ;

type Props = {
    currentMonth : string ;
    onMonthChange : ( newMonth : string ) => void ;
    income : number ;
    expense : number ;
}

export const InfoArea = ( { currentMonth , onMonthChange , income , expense } : Props ) => {
    
    const handlePrevMonth = ( ) => {
        let [ year , month ] = currentMonth . split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate . setMonth ( currentDate . getMonth ( ) -1 ) ; _
        onMonthChange ( ` $ { currentDate . getFullYear ( ) } - $ { currentDate.getMonth ( ) + 1 } ` ) ;
    }

    const handleNextMonth = ( ) => {
        let [ year , month ] = currentMonth . split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate . setMonth ( currentDate . getMonth ( ) + 1 ) ;
        onMonthChange ( ` $ { currentDate . getFullYear ( ) } - $ { currentDate.getMonth ( ) + 1 } ` ) ;
    }

    turn back  (
        < C . container >
            < C . MonthArea >
                < C . MonthArrow onClick = { handlePrevMonth } > ⬅️ < / C . Month arrow >
                < C . MonthTitle > { formatCurrentMonth ( currentMonth ) } < / C . Title of the month >
                < C . MonthArrow onClick = { handleNextMonth } > ➡️ < / C . Month arrow >
            < / C . MonthArea >
            < C . Curriculum area >
                < ResumeItem title = "Revenues" value = { income } / >
                < ResumeItem title = "Expenses" value = { expense } / >
                < ResumeItem
                    title = "balance sheet"
                    value = { income - expense }
                    color = { ( income - expense ) < 0 ? 'Red Green' }
                / >
            < / C . Curriculum area >
        < / C . container >
    ) ;
}