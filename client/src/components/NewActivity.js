import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getCountries, postActivity} from '../actions/index';
import './styles/NewActivity.css';

function NewActivity() {

    const history = useHistory()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({name:""});
    const [input, setInput] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:[],
        id:[]
    });

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleCountry(e){
        if(input.id.includes(e.target.value)){
            alert("Country Added")
        }else{
        setInput({
                ...input,
            id: [...input.id, e.target.value]
        })}
    }

    function handleDelete(e){
        e.preventDefault();
        setInput({
            ...input,
            id: input.id.filter( c => c !== e.target.value)
        })
    }

    function handleCheck(e){
        if (e.target.checked){
            setInput({
                ...input,
                season: [...input.season, e.target.value]
            })
        }
        if (!e.target.checked){
            setInput({
                ...input,
                season: input.season.filter((s)=> s !== e.target.value)
            })
        }
    }

    function validate(input) {
        let errors = {};
        if(!input.name){
            errors.name = "¡Activity is required!"
        }
        if(!input.dificulty && input.dificulty < 1 || input.dificulty > 5){
            errors.dificulty = "¡Input is a number between one and five!"
        }
        if(!input.duration){
            errors.duration = "¡Duration is required!"
        }
        if(input.season.length < 1){
            errors.season = "¡Season is required!"
        }
        if(input.id.length < 1){
            errors.id = "¡Country is required!"
        }
        return errors;
    }

    function handleSubmit (e){
        e.preventDefault();
        setErrors (validate({
            ...input,
            [e.target.name]:e.target.value
        }));
        if(Object.entries(errors).length === 0) {
            dispatch(postActivity(input));
            alert("Activity Created");
            history.push('/home');
        }
    }

    return(
        <div className="div_container">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="title">
                    <h2>Add Activity</h2>
                </div>
                <div>
                <label>Activity:</label>
                <input className="input" type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}></input>
                {!errors.name ? null :
                    <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>Dificulty:</label>
                    <input className="input" type="number" value={input.dificulty} name="dificulty" onChange={(e)=>handleChange(e)}></input>
                    {!errors.dificulty ? null :
                        <p className="error">{errors.dificulty}</p>}
                </div>
                <div>
                    <label>Duration:</label>
                    <input className="input" type="number" value={input.duration} name="duration" onChange={(e)=>handleChange(e)}></input>
                    {!errors.duration ? null :
                        <p className="error">{errors.duration}</p>}
                </div>
                <div>
                    <label>Country:</label>
                    <select className="input" onChange={(e)=>handleCountry(e)}>
                        <option value="Countries">Select Countries</option>{countries.map(c => <option value={c.id} key={c.name}>{c.name}</option>)}
                        </select>
                    <a>{input.id.map(c => 
                        <div className="code" key={c + "_key"}>{c}<button value={c}className="botonX" onClick={(c)=>handleDelete(c)}>x</button></div>)}
                    </a>
                    {!errors.id ? null :
                        <p className="error">{errors.id}</p>}
                </div>
                <div>
                    <label>Season:</label>
                </div>
                <div className="inputC">
                    <label>Winter<input name="season" type="checkbox" id="Winter" value="Winter" onChange={(e)=>handleCheck(e)} /></label>
                    <label>Autumn<input name="season" type="checkbox" id="Autumn" value="Autumn" onChange={(e)=>handleCheck(e)} /></label>
                    <label>Summer<input name="season" type="checkbox" id="Summer" value="Summer" onChange={(e)=>handleCheck(e)} /></label>
                    <label>Spring<input name="season" type="checkbox" id="Spring" value="Spring" onChange={(e)=>handleCheck(e)} /></label>
                    {!errors.season ? null :
                        <p className="error">{errors.season}</p>}
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewActivity;