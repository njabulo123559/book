import React, { Component } from 'react';
import "../Style.css"
import { render } from "react-dom";
import {NavigationBar} from "../auth/NavigationBar";




class Service extends Component{


    render() {
        return (
          <div>
            <NavigationBar/>

            
          </div>

        );
      }


   
}



export { Service };