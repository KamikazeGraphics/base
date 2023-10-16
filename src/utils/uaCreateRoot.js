import ReactDOM from "react-dom/client";
import {findRenderedDOMComponentWithTag} from "react-dom/test-utils";

export default function uaCreateRoot():void{
    try {
        const root: HTMLDivElement = document.createElement(tagName:'div')
        document.body.appendChild(root)
        return ReactDOM.createRoot(root)

    }catch (e) {
        console.error(e);
        throw new Error("Error Server")
    }

    
}