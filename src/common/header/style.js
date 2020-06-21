import styled from "styled-components";
import logoPic from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #eee;
`

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    height: 58px;
    width: 100px;
    display: block;
    background: url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:58px;
    line-height:58px;
    padding-right:70px;
    box-sizing:boder-box;
`

export const NavItem = styled.div`
    color:#333;
    padding:0 15px;
    font-size:17px;
    &.left{
        float:left;    
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    text-align:center;
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
   width:160px;
   height:38px;
   border:none;
   outline:none;
   padding:0 20px;
   box-sizing:border-box;
   border-radius:19px;
   background:#eee;
   font-size:14px;
   margin-left:20px;
   &::placeholder{
       color:#999;
   }
`

export const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
`

export const Button = styled.div `
    float:left;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6f5a;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`