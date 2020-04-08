import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    Edit,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
} from 'react-admin';

export const PostList = props => (
    <List {...props}>
        {/*<Datagrid rowClick="edit">*/}

        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="body"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = props => (
       <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id"/>
            </ReferenceInput>
            <SelectInput optionText="name"/>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };




