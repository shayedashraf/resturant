import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuIteam = props => {

    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: 0.7 }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onclick={props.onDishSelecct}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>


        </div>

    );
}
export default MenuIteam;