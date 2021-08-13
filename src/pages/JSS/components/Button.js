import styled from 'styled-components';

export const Button = styled.button`
    color:red;
    background-color:${props => props.primary?'blue':'green'};
    font-size: ${props =>props.size === '2x'?'5rem':'1rem'}
        &:hover{
            color:${props => props.primary?'blue':'green'};
            background-color:red;
        }
`

export const ButtonYellow = styled(Button)`
        background-color:yellow;
`