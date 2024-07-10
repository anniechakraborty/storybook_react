import React from 'react';
import Button from '../components/Button';
// Importing the component for which we will create the story

export default {
    title : "Button",
    component : Button,
}

// Defining the stories by exporting const functions
// Name of the function = name of the story

// export const Red = () => <Button label="Press me" backgroundColor='red' />

// Adding Template to make the story more interactive
const Template = args => <Button {...args}/>
// template is defined as a function that takes in some arguments, 
// passes it to our component Button and then renders it

// For all our stories now, we copy the function defined in the Template 
// using the bind() method to which we pass an empty object {}
export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: "Press me",
    size: "md"
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: "Press me",
    size: "sm"
}

export const Long = Template.bind({})
Long.args = {
    backgroundColor: 'red',
    label: "Press me! Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam non pro id el usus. Ut enim ad minim veniam",
    size: "md"
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: "Press me",
    size: "md"
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: 'red',
    label: "Press me",
    size: "lg"
}