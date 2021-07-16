import React from "react";
//import RowBlock from "../rowBlock/rowBlock";
import ItemList from "../itemList/itemList";
import GotService from "../../services/gotService";
//import ItemDetails,{Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import {withRouter} from 'react-router-dom'


 class BookPage extends React.Component{
    state = {
        selectedBook:null,
        error:false,
    }
    
    gotService = new GotService();

    componentDidCatch(){
        this.setState({error:true})
    }

  

    onItemSelected = (id) => {
        this.setState({selectedBook:id})
    }

    render(){
        
        // const itemList = (
        //     // <ItemList 
                    
        //     // onItemSelected={this.onItemSelected}
        //     // getData={this.gotService.getAllBooks}
        //     // renderItem={({name,numberOfPages}) => `${name} (${numberOfPages})`}/>
        // )
        // const itemDetails = (
        //     <ItemDetails 
        //         itemId={this.state.selectedBook}
        //         getData={this.gotService.getBook} >
        //         <Field field='numberOfPages' label='Number of pages'/>
        //         <Field field='isbn' label='ISBN'/>
        //         <Field field='country' label='Country'/>
        //         <Field field='released' label='Released'/>
        //     </ItemDetails>
        // )
         
        if(this.state.error){
            return <ErrorMessage/>
        }
        return(
            // <RowBlock left={itemList} right={itemDetails}/>
            <ItemList 
                    
            onItemSelected={(itemId)=>{
                this.props.history.push(itemId);
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name,numberOfPages}) => `${name} (${numberOfPages})`}/>
        )
 }
}

export default withRouter(BookPage);