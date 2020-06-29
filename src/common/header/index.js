import React , {Component} from 'react';

import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         SearshWrapper,
         NavSearch,
         Addition,
         Button } from './style'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused:false
        };
        this.focusedOnFocus = this.focusedOnFocus.bind(this);
        this.focusedOnBlur = this.focusedOnBlur.bind(this)
    }

    render(){
        return (
            <div>
                <HeaderWrapper>
                    <Logo href = '/'/>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        <SearshWrapper>
                            <NavSearch 
                                className = {this.state.focused ? 'focused' : ''}
                                onFocus = {this.focusedOnFocus}
                                onBlur = {this.focusedOnBlur}
                            ></NavSearch>
                            <i
                                className = {this.state.focused ? 'iconfont focused' : 'iconfont'}
                            >&#xe614;</i>
                        </SearshWrapper>
                    </Nav>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe616;</i>
                            &nbsp;写文章
                        </Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }

    focusedOnFocus(){
        this.setState({
            focused:true
        })
    }

    focusedOnBlur(){
        this.setState({
            focused:false
        })
    }
}

export default Header;