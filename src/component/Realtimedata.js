import React from 'react'
import GetFirebase from './firebaseconfig/config'
import {ref, onValue} from 'firebase/database'
import {useState, useEffect} from 'react';

const db = GetFirebase();

const Realtimedata = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const dbRef = ref(db, 'database');

        onValue(dbRef, (getdata)=>{
            let records = [];
            getdata.forEach(record =>{
                let keyName = record.key;
                let data1 = record.val();
                records.push({"key": keyName, "data" : data1});
            });
            setData({records});
            console.log(records);

        })
    },[])
  return (
    <div>
     <h1> Data</h1> 
      {
        data.map((ele,i)=>(

          
          <li key={i}>{ele.name}</li>
        

        ))
      }
      
    </div>
  )
}

export default Realtimedata
