import React, {useState,useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types'

function ItemList({getData, onItemSelected, renderItem}){

    const [itemList,updateList] = useState([]);
    const [error,updateError] = useState(false);

    useEffect(()=>{
        getData()
        .then( data => {
            updateList(data);
        })
    }, [])
     
    // componentDidCatch() {
    //     this.setState({error:true})
    // }

    function renderItems(arr){
        return arr.map((item)=>{
            const label = renderItem(item);
            return (
                <ListGroupItem 
                key={item.url.substring(item.url.lastIndexOf('/'))} 
                onClick={ () => onItemSelected(item.url.substring(item.url.lastIndexOf('/')+1))}
                style={{cursor:"pointer"}}>
                {label}
                </ListGroupItem >
            )
        })
    }


    // const {data} = this.props;

    const items = renderItems(itemList)

    // if(this.state.error){
    //     return <ErrorMessage/>
    // }

    // const {data} = this.state

    // if (!data){
    //     return <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px"}}><Spinner /></div>
    // }

    return (
        
        <ListGroup >
            {items}
        </ListGroup>

    )
}



export default ItemList;