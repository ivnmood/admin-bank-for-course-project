import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Edit,
    Create,
    SelectField,
    NumberInput,
    NumberField

} from 'react-admin';



export const AccountList = props => (
    <List {...props}>
        <Datagrid>

            <TextField source="title"/>
            <SelectField source="account code" choices={[
                { id: '1', name: 'Current account - 3014' },
                { id: '2', name: 'Credit account - 2400' },
                { id: '3', name: "Bank's Cash Register - 1010" },
                { id: '4', name: 'Bank development Fund - 7327' },
                { id: '5', name: 'Correspondent account in the national Bank of Belarus - 1201' },
            ]} />
            <SelectField source="type of activity" choices={[
                { id: '1', name: 'active' },
                { id: '2', name: 'passive' },
            ]} />
            <NumberField source="the original amount" step={20}/>
            <ReferenceField source="client" reference="clients">
                <TextField source="name"/>
            </ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
);

export const AccountEdit = props => (
    <Edit  {...props}>
        <SimpleForm>

            <TextInput source="title" resettable/>
            <SelectInput source="account code" choices={[
                { id: '1', name: 'Current account - 3014' },
                { id: '2', name: 'Credit account - 2400' },
                { id: '3', name: "Bank's Cash Register - 1010" },
                { id: '4', name: 'Bank development Fund - 7327' },
                { id: '5', name: 'Correspondent account in the national Bank of Belarus - 1201' },
            ]} />
            <SelectInput source="type of activity" choices={[
                { id: '1', name: 'active' },
                { id: '2', name: 'passive' },
            ]} />
            <NumberInput source="the original amount" step={20}/>
            <ReferenceInput source="client" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const AccountCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" resettable/>
            <SelectInput source="account code" choices={[
                { id: '1', name: 'Current account - 3014' },
                { id: '2', name: 'Credit account - 2400' },
                { id: '3', name: "Bank's Cash Register - 1010" },
                { id: '4', name: 'Bank development Fund - 7327' },
                { id: '5', name: 'Correspondent account in the national Bank of Belarus - 1201' },
            ]} />
            <SelectInput source="type of activity" choices={[
                { id: '1', name: 'active' },
                { id: '2', name: 'passive' },
            ]} />
            <NumberInput source="the original amount" step={20}/>
            <ReferenceInput source="client" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

