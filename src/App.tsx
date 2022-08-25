import React, {useState} from "react";
import {Button} from "./components/button/index.syled";
import Popup from "./components/popup";
function App() {
    const [show, setShow] = useState(false);

    const pageReload = {
        title:"Page Reload",
        action:() => window.location.reload()
    }

    return (
        <>
            <Button primary onClick={() => setShow(true)}>Popup</Button>
            <Popup show={show} title={"Popup"} buttons={[pageReload]} close={()=> setShow(false)}/>
        </>
    );
}

export default App;
