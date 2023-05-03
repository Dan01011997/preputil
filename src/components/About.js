    import React, { useState } from 'react';

    import PropTypes from 'prop-types';

    // #region constants

    // #endregion

    // #region styled-components

    // #endregion

    // #region functions

    // #endregion

    // #region component
    const propTypes = {};

    const defaultProps = {};

    /**
     * 
     */
    const About = () => {
        const enabledark = () =>{
            let k=mystyle


let newtext="Disable dark"
if(text=="Enable Dark"){
    setText("Disable Dark")
    setMode(mystyle)
    
}

else {
setText("Enable Dark")
setMode(mystyle1)
}

        }
        let mystyle={
            color:'white',
            backgroundColor:'Black'

            
        }
        let mystyle1={
            color:'black',
            backgroundColor:'white'

            
        }
        const [text,setText]=useState("Enable Dark")
        
        const [mode,setMode]=useState(mystyle1)
        return <div className='container' style={mode}>
            <h1>About Us</h1>        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mode}>
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mode}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mode}>
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mode}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mode}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>

    </div>
    </div>
    <button type="button" class="btn btn-dark" onClick={enabledark} className="mybutton1 my-2">{text}</button>
        </div>;
    }

    About.propTypes = propTypes;
    About.defaultProps = defaultProps;
    // #endregion

    export default About;