import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
        <Breadcrumb>
            <BreadcrumbItem active><Link to="/">Game of Thrones DB</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/characters/">Characters</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/houses/">Houses</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/books/">Books</Link></BreadcrumbItem>
        </Breadcrumb>
        </div>
    );
};

export default Header;