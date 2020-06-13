import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    BooleanField,
    BooleanInput,
    DateField,
    DateInput,
    NumberInput,
    NumberField,
    SelectField,
    SelectInput, Show, SimpleShowLayout,

} from 'react-admin';


const UserShow = props => (
    <Show
        {...props}
        title=" "
    >
        <SimpleShowLayout>
            <TextField source="pass series"/>
            <NumberField source="pass number"/>
            <DateField source="date of passport issue"/>
            <SelectField source="city of birth" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>
            <SelectField source="family status" choices={[
                {id: '1', name: 'single'},
                {id: '2', name: 'married'},
                {id: '3', name: 'divorced'},
                {id: '4', name: 'widowed'},
            ]}/>
            <NumberField source="home phone"/>
            <SelectField source="citizenship" choices={[
                {id: '1', name: 'Ukrainian'},
                {id: '2', name: 'Belarusian'},
                {id: '3', name: 'U.S.'},
                {id: '4', name: 'Russian'},
                {id: '5', name: 'Cuban'},
            ]}/>
            <SelectField source="disability" choices={[
                {id: '1', name: '1 disability group'},
                {id: '2', name: '2 disability group'},
                {id: '3', name: '3 disability group'},
                {id: '4', name: '4 disability group'},
                {id: '5', name: '5 disability group'},
                {id: '6', name: 'no'},
            ]}/>
            <BooleanField source="retiree"/>

            <BooleanField source="liable(army)"/>
        </SimpleShowLayout>
    </Show>
);


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" expand={<UserShow/>}>
            <TextField source="name"/>
            <TextField source="surname"/>
            <TextField source="patronymic"/>
            <DateField source="birthdate"/>
            <SelectField source="gender" choices={[
                {id: 'M', name: 'Male'},
                {id: 'F', name: 'Female'},
            ]}/>

            <SelectField source="city of residence" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>

            <TextField source="address.street"/>
            <NumberField source="phone"/>
            <EmailField source="email"/>
            <NumberField options={{style: 'currency', currency: 'BYN'}} source="income"/>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name" resettable/>
            <TextInput source="surname" resettable/>
            <TextInput source="patronymic" resettable/>
            <DateInput source="birthdate"/>
            <SelectInput source="gender" choices={[
                {id: 'M', name: 'Male'},
                {id: 'F', name: 'Female'},
            ]}/>
            <TextInput source="pass series" resettable/>
            <NumberInput source="pass number"/>
            <DateInput source="date of passport issue"/>
            <SelectInput source="city of residence" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>
            <SelectInput source="city of birth" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>
            <TextInput source="address.street" resettable/>
            <NumberInput source="home phone"/>
            <TextInput source="email" resettable/>
            <SelectInput source="family status" choices={[
                {id: '1', name: 'single'},
                {id: '2', name: 'married'},
                {id: '3', name: 'divorced'},
                {id: '4', name: 'widowed'},
            ]}/>
            <NumberInput source="phone"/>
            <SelectInput source="citizenship" choices={[
                {id: '1', name: 'Ukrainian'},
                {id: '2', name: 'Belarusian'},
                {id: '3', name: 'U.S.'},
                {id: '4', name: 'Russian'},
                {id: '5', name: 'Cuban'},
            ]}/>
            <SelectInput source="disability" choices={[
                {id: '1', name: '1 disability group'},
                {id: '2', name: '2 disability group'},
                {id: '3', name: '3 disability group'},
                {id: '4', name: '4 disability group'},
                {id: '5', name: '5 disability group'},
                {id: '6', name: 'no'},
            ]}/>
            <BooleanInput source="retiree"/>
            <NumberInput source="income"/>
            <BooleanInput source="liable(army)"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" resettable/>
            <TextInput source="surname" resettable/>
            <TextInput source="patronymic" resettable/>
            <DateInput source="birthdate"/>
            <SelectInput source="gender" choices={[
                {id: 'M', name: 'Male'},
                {id: 'F', name: 'Female'},
            ]}/>
            <TextInput source="pass series" resettable/>
            <NumberInput source="pass number"/>
            <DateInput source="date of passport issue"/>
            <SelectInput source="city of residence" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>
            <SelectInput source="city of birth" choices={[
                {id: '1', name: 'Minsk'},
                {id: '2', name: 'Moscow'},
                {id: '3', name: 'New-York'},
                {id: '4', name: 'Vitebsk'},
                {id: '5', name: 'Grodno'},
            ]}/>
            <TextInput source="address.street" resettable/>
            <NumberInput source="phone"/>
            <TextInput source="email" resettable/>
            <SelectInput source="family status" choices={[
                {id: '1', name: 'single'},
                {id: '2', name: 'married'},
                {id: '3', name: 'divorced'},
                {id: '4', name: 'widowed'},
            ]}/>
            <NumberInput source="home phone"/>
            <SelectInput source="citizenship" choices={[
                {id: '1', name: 'Ukrainian'},
                {id: '2', name: 'Belarusian'},
                {id: '3', name: 'U.S.'},
                {id: '4', name: 'Russian'},
                {id: '5', name: 'Cuban'},
            ]}/>
            <SelectInput source="disability" choices={[
                {id: '1', name: '1 disability group'},
                {id: '2', name: '2 disability group'},
                {id: '3', name: '3 disability group'},
                {id: '4', name: '4 disability group'},
                {id: '5', name: '5 disability group'},
                {id: '6', name: 'no'},
            ]}/>
            <BooleanInput source="retiree"/>
            <NumberInput source="income"/>
            <BooleanInput source="liable(army)"/>
        </SimpleForm>
    </Create>
);



