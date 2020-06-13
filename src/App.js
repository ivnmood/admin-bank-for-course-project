import React from 'react';
import {Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserCreate, UserEdit, UserList} from "./components/clients";
import {PostCreate, PostEdit, PostList} from './components/posts';
import authProvider from './components/authProvider';
import {DepositCreate, DepositEdit, DepositList} from "./components/deposits";
import {CreditCreate, CreditEdit, CreditList} from "./components/Credits";
import {AccountCreate, AccountEdit, AccountList} from "./components/accounts";





const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
    <Admin  authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name="clients" list={UserList} edit={UserEdit} create={UserCreate}/>
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>*/}
        <Resource name="deposits" list={DepositList} edit={DepositEdit} create={DepositCreate}/>
        <Resource name="credits" list={CreditList} edit={CreditEdit} create={CreditCreate}/>
        <Resource name="accounts" list={AccountList} edit={AccountEdit} create={AccountCreate}/>
    </Admin>
);

export default App;