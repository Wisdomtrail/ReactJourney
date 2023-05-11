import React, {useReducer, useState} from "react";
function KeysValue(){

    let initialState = {
        institute:"",
        cohort:"",
        admissionYear:"",
        admissionMonth:"",
        firstName:"",
        lastName:"",
        email:"",
        age:""
    }
    
    function reducer(state, action){
        switch(action.type){
            case 'handleInput':
                return{
                    ...state,
                    [action.field]:action.payload
                }
                default:
                break;
        }
    }

    const[state,dispatch] = useReducer(reducer,initialState)

    function handleChange(e){
        dispatch({
            type: "handleInput",
            field: e.target.name,
            payload: e.target.value
        })
    }
    return(
        <React.Fragment>
            <div className="ptags">
                <p className="one">First Name: {state.firstName}</p>
                <p className="two">Last Name: {state.lastName}</p>
                <p className="Three">Email: {state.email}</p>
                <p className="four">Age: {state.age}</p>
                <p className="five">institute: {state.institute}</p>
                <p className="six">Chorot: {state.cohort}</p>
                <p className="seven">Admission Year: {state.admissionYear}</p>
                <p className="eight">Admisson Month: {state.admissionMonth}</p>
            </div>
            <label htmlFor="fName">
                First Name: <input type="text" name="firstName" id="fName" value={state.firstName} onChange={handleChange}/>
            </label><br/><br/>
            <label htmlFor="lName">
                lastName: <input type="text" name="lastName" id="lName" value={state.lastName} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="email">
                Email: <input type="text" name="email" id="email" value={state.email} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="age">
                Age: <input type="text" name="age" id="age" value={state.age} onChange={handleChange}/>
            </label><br/><br/> 

            <label htmlFor="iName">
                Institute: <input type="text" name="institute" id="institute" value={state.institute} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="cohort">
                Cohort: <input type="text" name="cohort" id="cohort" value={state.cohort} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="aYear">
                Admission Year: <input type="text" name="admissionYear" id="admissionYear" value={state.admissionYear} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="aMonth">
                Admission Month: <input type="text" name="admissionMonth" id="admissionMonth" value={state.admissionMonth} onChange={handleChange}/>
            </label><br/><br/>

        </React.Fragment>
    )
}

export default KeysValue;