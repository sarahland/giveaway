import React from "react"
const dropdownItems = [
    {href: '#', name: ''},
    {href: '#', name: 'Home Goods'},
    {href: '#', name: 'Electronics'},
    {href: '#', name: 'Clothes'},
    {href: '#', name: 'Toys'},
    {href: '#', name: 'Others'},
];

const navbar = (
    <Navbar>
        <NavbarHeader href="homepage.html" name="giveaway"/>
        <NavbarItems>
            <Item link="index.html" title="navbar" />
            <NavbarDropdown name="Categories">
                  <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbar, document.getElementById('navbar'));
