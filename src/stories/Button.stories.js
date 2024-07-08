import React from 'react';
import Button from '../components/Button';
// Importing the component for which we will create the story

export default {
    title : "Button",
    component : Button,
}

// Defining the stories by exporting const functions
// Name of the function = name of the story

export const Red = () => <Button label="Press me" backgroundColor='red' />
