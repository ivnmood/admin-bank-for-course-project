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
    BooleanInput,
    BooleanField,
    Show,
    SimpleShowLayout,
    RichTextField,
    NumberInput,
    NumberField

} from 'react-admin';

const PostShow = props => (
    <Show
        {...props}
        title=" "
    >
        <SimpleShowLayout>
            <RichTextField source="body" />
            <RichTextField source="title" />
        </SimpleShowLayout>
    </Show>
);

export const PostList = props => (
    <List {...props}>
        <Datagrid expand={<PostShow />}>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="clients">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="title"/>
            <TextField source="body"/>
            <BooleanField source="Yes"/>
            <NumberField source="deposit amount" step={1} resettable/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <TextInput source="title"/>
            <TextInput multiline source="body"/>
            <BooleanInput source="Yes"/>
            <NumberInput source="deposit amount" step={1} resettable/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="client" reference="clients">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title" resettable/>
            <TextInput multiline source="body"/>
            <BooleanInput source="Yes"/>
            <NumberInput source="deposit amount" step={1} />
        </SimpleForm>
    </Create>
);

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};