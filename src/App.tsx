import React, {useState} from "react";
import {Button} from "./components/button/index.syled";
import Popup from "./components/popup";
import {Wrapper} from "./App.styled";
function App() {
    const [show, setShow] = useState(false);

    const pageReload = {
        title:"Button Title",
        action:() => window.location.reload()
    }

    return (
        <Wrapper>
            <Button primary onClick={() => setShow(true)}>Popup</Button>
            <Popup show={show} title={"Popup Title"} buttons={[pageReload]} close={()=> setShow(false)}/>
        </Wrapper>
    );
}

export default App;
