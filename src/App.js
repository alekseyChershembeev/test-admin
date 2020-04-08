import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource} from 'react-admin';
import {UserList} from "./Users";
import { PostList, PostEdit, PostCreate } from './Posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
            <Resource name="users" list={UserList} />
          </Admin>
    );
export default App;
