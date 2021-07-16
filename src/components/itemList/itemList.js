import React, {useState,useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner/spinner';

function ItemList({getData, onItemSelected, renderItem}){

    const [itemList,setList] = useState([]);
    const [loading, setLoading] = useState(true)
    const items = renderItems(itemList)


    function onItemListLoaded(itemList){
        setList(itemList)
        setLoading(false)
    }
    let spinner = loading ? <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px"}}><Spinner /></div> : null;

    useEffect(()=>{
        getData()
        .then(data => {
            onItemListLoaded(data);
        })
    },)
     
    return (
        <>
        {spinner}
        <ListGroup >
            {items}
        </ListGroup>
        </>

    )

   

    function renderItems(arr){
        return arr.map((item)=>{
            const label = renderItem(item);
            return (<>
                
                <ListGroupItem 
                key={item.url.substring(item.url.lastIndexOf('/'))} 
                onClick={ () => onItemSelected(item.url.substring(item.url.lastIndexOf('/')+1))}
                style={{cursor:"pointer"}}>
                {label}
                </ListGroupItem >
                </>
            )
        })
    }

  

    
  
}



export default ItemList;