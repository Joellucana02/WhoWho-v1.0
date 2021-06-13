import React, { useState, useEffect } from 'react';
const initialCard= {    
    id:null,
    content:'',
    time:'',
    date:'',
    heart:0,
    share:0,
    view:0,
    img:'',
    name:'',
}

const FormBox = ({createData, updateData, manageData, setManageData}) => {
    const [form, setForm] = useState(initialCard)
    const handleChange= (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    useEffect(()=>{
        if(manageData){
            setForm(manageData)
        }else{
            setForm(initialCard)
        }
    },[manageData])
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!form.content ){
        alert('Data required')
        return;
        }
        if(form.id===null){
            //console.log(form.id)
            //console.log(form)
            createData(form)
        }else{
            updateData(form)
        }
        
        handleReset();
    }
    const handleReset= ()=>{
        setForm(initialCard);
        setManageData(null)
    }
    return (
        <>
    <form className="form-content " onSubmit={handleSubmit}>
      <textarea name="content" rows="4" cols="50" placeholder="What's Happening?" onChange={handleChange}  value={form.name}/>
      <input type="submit" value="Publish" />
    </form>
    </>
    )
}

export default FormBox
