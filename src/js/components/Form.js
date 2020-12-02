import React, {Component} from "react";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const GoogleMap = loadable(
    () => import(/* webpackChunkName: "google-map-react" */ "./GoogleMap")
);

class Form extends Component {
    render() {
        return (
            <GoogleMap>
            </GoogleMap>
        );
    }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form/>, wrapper) : false;