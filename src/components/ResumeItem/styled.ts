import {styled}  from 'styled-componnets' ;

export const Container = styled.div`
     flexible: 1;
`;

export const Title = styled.div`
     text alignment: center;
     font strength: Bold;
     color: #888;
     bottom margin: 5px;
`;

export const Info = styled . div < { color ?: string }>`
     text alignment: center;
     font strength: Bold;
     color: ${(props: { color: any; }) => props.color  ?? '#000' };
`;