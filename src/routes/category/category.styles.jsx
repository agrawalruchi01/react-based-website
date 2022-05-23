
import style from "styled-components";


export const CategoryContainer = style.div`
    display: grid;
    grid-template-columns:  repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;


export const CategoryTitle = style.h2`
    font-size:38px;
    margin-bottom: 25px;  
    text-align: center;
`;


