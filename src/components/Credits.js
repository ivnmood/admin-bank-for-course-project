import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    SelectInput,
    Edit,
    Create,
    NumberInput,
    ReferenceInput,
    SelectField,
    DateField,
    DateInput,
    NumberField
} from 'react-admin';


export const CreditList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField source="client" reference="clients">
                <TextField source="name"/>
            </ReferenceField>
            <NumberField source="contract number"/>
            <SelectField source="currency" choices={[
                { id: '1', name: 'BYN' },
                { id: '2', name: 'US' },
                { id: '3', name: 'EUR' },
            ]} />
            <DateField source="start date"/>
            <DateField source="expiry date"/>
            <SelectField source="credit period" choices={[
                { id: '1', name: '1 month' },
                { id: '2', name: '6 month' },
                { id: '3', name: '1 year' },
            ]} />
            <NumberField source="credit amount" step={10}/>
            <NumberField source="interest rate" options={{ style: 'percent' }}/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const CreditEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="client" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <NumberInput source="contract number"/>
            <SelectInput source="currency" choices={[
                { id: '1', name: 'BYN' },
                { id: '2', name: 'US' },
                { id: '3', name: 'EUR' },
            ]} />
            <DateInput source="start date"/>
            <DateInput source="expiry date"/>
            <SelectInput source="credit period" choices={[
                { id: '1', name: '1 month' },
                { id: '2', name: '6 month' },
                { id: '3', name: '1 year' },
            ]} />
            <NumberInput source="credit amount" step={10}/>
            <NumberInput source="interest rate" format={v => v * 100} parse={v => parseFloat(v) / 100}/>
        </SimpleForm>
    </Edit>
);

export const CreditCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="client" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <NumberInput source="contract number"/>
            <SelectInput source="currency" choices={[
                { id: '1', name: 'BYN' },
                { id: '2', name: 'US' },
                { id: '3', name: 'EUR' },
            ]} />
            <DateInput source="start date"/>
            <DateInput source="expiry date"/>
            <SelectInput source="credit period" choices={[
                { id: '1', name: '1 month' },
                { id: '2', name: '6 month' },
                { id: '3', name: '1 year' },
            ]} />
            <NumberInput source="credit amount" step={10}/>
            <NumberInput source="interest rate" format={v => v * 100} parse={v => parseFloat(v) / 100}/>
        </SimpleForm>
    </Create>
);

