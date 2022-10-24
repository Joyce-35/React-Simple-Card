import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import { Component } from "react";

class SimpleCard extends Component{
    render(){
        return(
            <div>
                <Title />,
                <Image />,
                <Description />
            </div>
        )
    }
}
export default SimpleCard;