import React from "react";
import RowBlock from "../rowBlock/rowBlock";
import ItemList from "../itemList/itemList";
import GotService from "../../services/gotService";
import ItemDetails,{Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../errorMessage/errorMessage";



export default class CharacterPage extends React.Component{
    state = {
        selectedChar:null,
        error:false,
    }
    
    gotService = new GotService();

    componentDidCatch(){
        this.setState({error:true})
    }

  

    onItemSelected = (id) => {
        this.setState({selectedChar:id})
    }

    render(){

        const itemList = (
            <ItemList 
                    
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={({name,gender}) => `${name} (${gender})`}/>
        )
        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
         
        if(this.state.error){
            return <ErrorMessage/>
        }
        return(
            <RowBlock left={itemList} right={itemDetails}/>
        )
 }
}