import React from 'react';
import GotService from '../../services/gotService';
import ItemDetails,{Field} from '../itemDetails/itemDetails';

export default class BooksItem extends React.Component {


    gotService = new GotService();

    render() {
        return (
            <>
            <ItemDetails 
                itemId={this.props.bookId}
                getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='isbn' label='ISBN'/>
                <Field field='country' label='Country'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
            </>
        )
    }
}