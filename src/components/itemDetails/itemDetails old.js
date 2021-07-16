import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import ItemList from '../itemList/itemList';

const Field = ({item, field, label}) => {
    item[field]=item[field]||"no data :("
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {Field}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
        error:false,
    }

    componentDidMount(){
        this.updateItem();
    }

     
    componentDidCatch(){
        this.setState({error:true})
    }

  

    updateItem(){
        const {itemId,getData} = this.props;
        if(!itemId){
            return
        }

        getData(itemId)
            .then(item => {
                this.setState({item})
            });
    }

    componentDidUpdate(prevProps){
        if(prevProps.itemId!==this.props.itemId){
            this.updateItem()
        }
    }

    render() {
        if(this.state.error){
            return <ErrorMessage/>
        }
        if(!this.state.item){
            return (
            <>
                <span className="rounded" style={{padding:"15px", backgroundColor: "white"}}>Please select a item</span>
                <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px"}}><Spinner /></div>
                
            </>)
        }
        return (
            <div className='bg-light mb-5 p-4 rounded'>
                <View item={this.state.item} props={this.props}/>
               
            </div>
        );

        
    }
}

ItemList.defaultProps = {
    onItemSelected: () => {}
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