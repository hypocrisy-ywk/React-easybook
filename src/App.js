import React , { Component } from 'react';
import { GlobalStyle } from './style.js';//全局样式构建
import { IconGlobalStyle } from './statics/iconfont/iconfont'

import Header from './common/header'

class App extends Component {
    render(){
        return (
            <div>
                <GlobalStyle />
                <IconGlobalStyle />
                <Header/>
            </div>
        )
    }
}

export default App;
