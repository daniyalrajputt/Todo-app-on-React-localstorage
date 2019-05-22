import React, { Component } from 'react';
import MenuBar from './MenuBar'




class MainPage extends Component {
    render() {
        return (
            <div>
                <div >
                    <MenuBar />
                </div>
               
                    {this.props.children}
                           
            </div>
        );
    }
}

export default MainPage;