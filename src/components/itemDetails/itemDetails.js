import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner/spinner';
import React, {useState,useEffect} from 'react';

const Field = ({item, field, label}) => {
    item[field]=item[field]||"no data :("
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}


function ItemDetails(props){
    const [item,setItem] = useState(null);
    const {itemId, getData} = props;

    useEffect(()=>{
        updateItem();
    },[itemId])
  

    function updateItem(){
        if(!itemId){
            return
        }

        getData(itemId)
            .then(item => {
                setItem(item)
            });
    }


    if(!item){
        return (
        <>
            <span className="rounded" style={{padding:"15px", backgroundColor: "white"}}>Please select a item</span>
            <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px"}}><Spinner /></div>
            
        </>)
    }
    return (
        <div className='bg-light mb-5 p-4 rounded'>
            <View item={item} props={props}/>
            
        </div>
    );

        
    
}

const View = ({item,props}) => {
    let { name }= item;
    name = name || "no data :(";
  
    return (
        <>
            <h4 className="mb-4 text-center">{name}</h4>
            <ListGroup>
                {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, {item})
                })}
            </ListGroup>
        </>
    )
}

export default ItemDetails

export {Field}