import Styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = Styled.h1`
        font-size: 48px;
        color: #3a3a3a;
        max-width: 450px;
        line-height: 56px;
        margin-top: 80px;
    `;

export const Form = Styled.form<FormProps>`
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
            
            ${props =>
              props.hasError &&
              css`
                border-color: #c53030;
              `}

            &::placeholder {
                color: #a8a8b3;
            }
        }

        button {
            width: 200px;
            weight: 70px;
            background: #7475e5;
            border-radius: 0 5px 5px 0;
            border: 0;
            color: #fff;
            font-weight: bold;
            transition: background 0.2s;

            &:hover {
                background: ${shade(0.2, '#7475e5')};
            }

        }
    `;

export const Properties = Styled.div`
        margin-top: 80px;
        max-width: 700px;

        a {
            background: #fff;
            color: #3a3a3a;
            border-radius: 5px;
            width: 100%;
            padding: 24px;
            display: block;
            text-decoration: none;
            display: flex;
            align-items: center;
            transition: transform 0.2s;

            & + a {
                margin-top: 16px;
            }

            &:hover {
                transform: translateX(10px);
            }

            div {
                margin:  0 30px;
                flex: 1;
                
                ul {
                    list-style: none;
                }

            }

        }
`;

export const Error = Styled.span`
display: block;
color: #c53030;
margin-top: 8px;
`
