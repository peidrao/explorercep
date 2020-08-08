import Styled from 'styled-components';
import { shade } from 'polished';

export const Title = Styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = Styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        font-size: 30px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 200px;
        weight: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }

    }
`;

export const Properties = Styled.span``;
