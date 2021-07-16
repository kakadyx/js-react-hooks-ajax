import React, {useState, useEffect} from 'react'

function App(){
    const [count, setCount] = useState(0);
    const [data,refreshData] = useState([{name: 'Ivan', sex: 'male'}])

    
    useEffect(()=> {
        if(data){
            console.log(data)
        }
        
     });

    return( 
        <div>
            <p>Вы кликнули {count} раз</p>
            <button 
                onClick={()=> setCount(count+1)}>
            Кликни на меня!</button>
           
            {data.map(item => {
                return (
                    <div>Name: {item.name}, sex: {item.sex}</div>
                )
            })}
            <button onClick={()=>refreshData(data=> ([...data, {name:'Alex', sex: 'female'}]))}>
                Добавить данные
            </button>
        </div>
        
    )
}

export default App;