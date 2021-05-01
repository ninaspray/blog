import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ColourPalette = {
Pink: '#C884A6',
Gold: '#D5A021',
Green: '#0B7A75',
Mint: '#BAF2D8',
Blossom: '#FFB7C3',
};


export const PageWrapper = Styled.div`

    height: 100vh;
    `;

export const PageContainer = Styled.div`
    display: block;
    max-width: 1024px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
`;

export const StyledHeader = Styled.header`
    font-size: 28px;
    color: ${ColourPalette.Gold};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 40px;
    .header_title {
        margin-bottom: 20px;
        font-size: 40px;
    }
    .header_button-wrap {
        margin-bottom: 20px;
    }
`;

export const StyledLikeWrapper = Styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 20px;
    .like-wrapper__counter {
        margin-right: 20px;
    }
    .like-wrapper__button {
        margin-right: 20px;
    }
`;

export const StyleButton = Styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
    ${props =>
        props.primary &&
        css`
            background: ${ColourPalette.Pink};
        `};
    ${props =>
        props.secondary &&
        css`
            background: ${ColourPalette.Gold};
        `};
`;

export const StyledButtonSmall = Styled.button`
    font-size: 0.8rem;
    padding: 6px 12px;
    font-weight: 700;
`;

export const StyledNavWrap = Styled.nav`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const StyledNav = Styled.ul`
    list-style: none;
    display: inline-flex;
    li:not(:last-of-type){
        margin-right: 3rem;
    }
    a {
        font-size: 2rem;
        color: ${ColourPalette.Mint};
        position: relative;
        &::after {
            content: '';
            display: block;
            background-color: ${ColourPalette.Mint};
            width: 0%;
            height: 2px;
            transition: width 0.5s;
        }
        &:hover::after {
            width: 100%;
        }
    }
`;

export const NavLink = Styled(Link)`
font-size: 1.6rem;
    color: ${ColourPalette.Mint};
    position: relative;
    &::after{
     content: '';
    display: block;
     background-color: ${ColourPalette.Mint};
    width: 0%;
    transition: width 0.5s;
        }
        &:hover::after {
            width: 100%;
        }
`;

export const PlainLink = Styled(Link)`
 color: ${props => props.theme};
`;

export const StyledArticle = Styled.article`
    padding: 20px;
`;

export const PostListWrapper = Styled.div`
    .post-entry {
        border-radius: 20px;
        margin-bottom: 32px;
    }
    .post-entry:nth-child(even) {
        border: 2px solid ${ColourPalette.green};
    }
    .post-entry:nth-child(odd) {
        border: 2px solid ${ColourPalette.blue};
    }
`