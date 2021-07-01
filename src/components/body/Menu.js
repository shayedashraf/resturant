import React, { Component } from 'react';
import DISHES from '../data/dishes';
import MenuIteam from './MenuIteam';

class Menu extends Component {
    state = {
        dishes: DISHES
    }
    render() {
        const menu = this.state.dishes.map(iteam => {
            return (
                <MenuIteam dish={iteam} key={iteam.id} />
            );
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }
}
export default Menu;