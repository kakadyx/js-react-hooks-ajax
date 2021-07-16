import React from "react";
import RowBlock from "../rowBlock/rowBlock";
import ItemList from "../itemList/itemList";
import GotService from "../../services/gotService";
import ItemDetails,{Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../errorMessage/errorMessage";



export default class HousePage extends React.Component{
    state = {
        selectedHouse:null,
        error:false,
    }
    
    gotService = new GotService();

    componentDidCatch(){
        this.setState({error:true})
    }

  

    onItemSelected = (id) => {
        this.setState({selectedHouse:id})
    }

    render(){

        const itemList = (
            <ItemList 
                    
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({name,region}) => `${name} (${region})`}/>
        )
        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse} >
                <Field field='coatOfArms' label='Coat of arms'/>
                <Field field='founded' label='Founded'/>
                <Field field='diedOut' label='Died'/>
                <Field field='region' label='Region'/>
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