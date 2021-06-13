import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FeedCard from './FeedCard'
import FormBox from './FormBox'
import FormTopBox from './FormTopBox'
import { v4 as uuid_v4 } from "uuid";
import FeedButtons from './FeedButtons';


const FeedPage = () => {
  const [db, setDb] = useState([])
  const [manageData, setManageData] = useState(null)
  let api = 'http://localhost:5000/user-card';
  useEffect(()=>{
    let dataRequest= async ()=>{
        try {
            let rawData = await axios.get(api),
            data = await rawData.data;
            //console.log(data)
            //console.log(rawData)
            setDb(data)
        } catch (error) {
            console.log(error)    
        }
    }
    dataRequest();
},[])
console.log(db)
const createData= (data)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let time = new Date(),
    h = time.toLocaleTimeString(undefined),
    d = time.toLocaleDateString(undefined, options);
    console.log(h,d)
  data.id = uuid_v4();
  data.time = h;
  data.date = d;
  data.heart = 1;
  data.share = 1;
  data.view = 1;
  let dataRequest= async ()=>{
     try {
         let rawData = await axios.post(api,data),
         res = await rawData.data;
         //console.log(options)
         console.log(res)
         setDb([
             ...db, res
         ])
     } catch (error) {
         console.log(error)    
     }
 }
 dataRequest();
}
 const updateData= (data)=>{
     let endpoint = `${api}/${data.id}`
     console.log(endpoint)
     let dataRequest= async ()=>{
         try {
             let rawData = await axios.put(endpoint,data),
             res = await rawData.data;
             console.log(res)
              let newData = db.map(el=>el.id===data.id?data:el)
             setDb(newData)

         } catch (error) {
             console.log(error)    
         }
     }
     dataRequest();

 }
 const deleteData= (id)=>{
     let endpoint = `${api}/${id}`
     let dataRequest= async ()=>{
         try {
             let rawData = await axios.delete(endpoint),
             res = await rawData.data;
             console.log(res)
              let newData = db.filter(el=>el.id!==id)
              setDb(newData)

         } catch (error) {
             console.log(error)    
         }
     }
     dataRequest();
  
 }
    return (
        <div>
      <FormTopBox/>
      <FormBox createData={createData} updateData={updateData} manageData={manageData} setManageData={setManageData}/>
      <FeedCard data={db} deleteData={deleteData} setManageData={setManageData}/>
        <FeedButtons/>
</div>
    )
}

export default FeedPage
