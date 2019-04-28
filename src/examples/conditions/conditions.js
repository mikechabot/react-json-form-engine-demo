export default {
    id: 'Conditions-Section',
    title: 'Conditions',
    faIcon: {
        name: 'code'
    },
    sections: [
        {
            id: 'section_condition',
            title: 'Conditions',
            subsections: [
                {
                    id: 'subsection_condition',
                    title: 'Conditions',
                    subtitle: 'Conditionally hide & show fields based on the state of the Model',
                    fields: [
                        {
                            id: 'bool5',
                            type: 'boolean',
                            title: 'Show children?',
                            options: [
                                {
                                    title: 'Yes',
                                    fields: [
                                        {
                                            id: 'arr6',
                                            type: 'array',
                                            title: 'Child 1',
                                            options: [
                                                {
                                                    id: 'op1',
                                                    title: 'Option 1',
                                                    fields: [
                                                        {
                                                            id: 'str20',
                                                            type: 'string',
                                                            title: 'Grandchild',
                                                            showCondition: {
                                                                type: 'CONTAINS',
                                                                expressions: [
                                                                    {
                                                                        type: 'FORM_RESPONSE',
                                                                        id: 'arr6'
                                                                    },
                                                                    {
                                                                        type: 'CONST',
                                                                        value: 'op1'
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 'op2',
                                                    title: 'Option 2',
                                                    fields: [
                                                        {
                                                            id: 'num10',
                                                            type: 'number',
                                                            title: 'Grandchild',
                                                            min: -20,
                                                            max: 20,
                                                            showCondition: {
                                                                type: 'CONTAINS',
                                                                expressions: [
                                                                    {
                                                                        type: 'FORM_RESPONSE',
                                                                        id: 'arr6'
                                                                    },
                                                                    {
                                                                        type: 'CONST',
                                                                        value: 'op2'
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ],
                                            showCondition: {
                                                type: 'EQUAL',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'bool5'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: true
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            id: 'num9',
                                            type: 'number',
                                            title: 'Child 2',
                                            min: 0,
                                            max: 10,
                                            showCondition: {
                                                type: 'EQUAL',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'bool5'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: true
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                { title: 'No' }
                            ]
                        },
                        {
                            id: 'str17',
                            type: 'string',
                            title: 'This field will be hidden if "Yes" is selected above',
                            placeholder: 'Enter some text to show child',
                            showCondition: {
                                type: 'EQUAL',
                                not: true,
                                expressions: [
                                    {
                                        type: 'FORM_RESPONSE',
                                        id: 'bool5'
                                    },
                                    {
                                        type: 'CONST',
                                        value: true
                                    }
                                ]
                            },
                            fields: [
                                {
                                    id: 'bool6',
                                    type: 'boolean',
                                    title: 'Field',
                                    options: [{ title: 'True' }, { title: 'False' }],
                                    inline: true,
                                    showCondition: {
                                        type: 'BLANK',
                                        not: true,
                                        expression: {
                                            type: 'FORM_RESPONSE',
                                            id: 'str17'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            id: 'date1',
                            type: 'date',
                            title: 'Select a date',
                            fields: [
                                {
                                    id: 'str22',
                                    type: 'string',
                                    title: 'Field',
                                    showCondition: {
                                        type: 'BLANK',
                                        not: true,
                                        expression: {
                                            type: 'FORM_RESPONSE',
                                            id: 'date1'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'section_condition_array',
            title: 'Arrays',
            subsections: [
                {
                    id: 'subsection_condition_array',
                    title: 'Array Conditions',
                    subtitle: 'Display children under option fields.',
                    fields: [
                        {
                            id: 'arr3',
                            type: 'array',
                            title: 'Select some options to display the children',
                            options: [
                                {
                                    id: 'op1',
                                    title: 'Option 1',
                                    fields: [
                                        {
                                            id: 'num4',
                                            type: 'number',
                                            title: 'Field',
                                            min: 0,
                                            max: 5,
                                            showCondition: {
                                                type: 'CONTAINS',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'arr3'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: 'op1'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    id: 'op2',
                                    title: 'Option 2',
                                    fields: [
                                        {
                                            id: 'arr7',
                                            type: 'array',
                                            title: 'Field',
                                            options: [
                                                {
                                                    id: 'op1',
                                                    title: 'Option 1'
                                                },
                                                {
                                                    id: 'op2',
                                                    title: 'Option 2'
                                                }
                                            ],
                                            showCondition: {
                                                type: 'CONTAINS',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'arr3'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: 'op2'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    id: 'op3',
                                    title: 'Option 3',
                                    fields: [
                                        {
                                            id: 'bool7',
                                            type: 'boolean',
                                            title: 'Field',
                                            inline: true,
                                            options: [
                                                {
                                                    title: 'Option 1'
                                                },
                                                {
                                                    title: 'Option 2'
                                                }
                                            ],
                                            showCondition: {
                                                type: 'CONTAINS',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'arr3'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: 'op3'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    id: 'op4',
                                    title: 'Option 4',
                                    fields: [
                                        {
                                            id: 'arr4',
                                            type: 'array',
                                            title: 'Field',
                                            options: [
                                                { id: 'op1', title: 'Option 1' },
                                                { id: 'op2', title: 'Option 2' },
                                                { id: 'op3', title: 'Option 3' },
                                                { id: 'op4', title: 'Option 4' }
                                            ],
                                            showCondition: {
                                                type: 'CONTAINS',
                                                expressions: [
                                                    {
                                                        type: 'FORM_RESPONSE',
                                                        id: 'arr3'
                                                    },
                                                    {
                                                        type: 'CONST',
                                                        value: 'op4'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'arr5',
                            type: 'array',
                            title: 'Show child regardless of the option(s) selected',
                            options: [
                                { id: 'op1', title: 'Option 1' },
                                { id: 'op2', title: 'Option 2' },
                                { id: 'op3', title: 'Option 3' },
                                { id: 'op4', title: 'Option 4' }
                            ],
                            fields: [
                                {
                                    id: 'num7',
                                    type: 'number',
                                    title: 'Child',
                                    showCondition: {
                                        type: 'EMPTY',
                                        not: true,
                                        expression: {
                                            type: 'FORM_RESPONSE',
                                            id: 'arr5'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'subsection_condition_numeric',
            title: 'Numeric',
            subsections: [
                {
                    id: 'Numeric-Condition-Subsection',
                    title: 'Numeric',
                    subtitle: 'Simple numeric expressions supported!',
                    fields: [
                        {
                            id: 'num5',
                            type: 'number',
                            title: 'Greater than (>)',
                            min: 0,
                            max: 10,
                            fields: [
                                {
                                    id: 'str19',
                                    type: 'string',
                                    title: 'Field',
                                    showCondition: {
                                        type: 'GREATER_THAN',
                                        expressions: [
                                            {
                                                type: 'FORM_RESPONSE',
                                                id: 'num5'
                                            },
                                            {
                                                type: 'CONST',
                                                value: 5
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: 'num8',
                            type: 'number',
                            title: 'Less than (<)',
                            fields: [
                                {
                                    id: 'str21',
                                    type: 'string',
                                    title: 'Field',
                                    showCondition: {
                                        type: 'LESS_THAN',
                                        expressions: [
                                            {
                                                type: 'FORM_RESPONSE',
                                                id: 'num8'
                                            },
                                            {
                                                type: 'CONST',
                                                value: 5
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: 'num11',
                            type: 'number',
                            title: 'Between 25 and 75',
                            min: 0,
                            max: 100,
                            fields: [
                                {
                                    id: 'str20',
                                    type: 'string',
                                    title: 'Field',
                                    showCondition: {
                                        type: 'BETWEEN',
                                        expressions: [
                                            {
                                                type: 'FORM_RESPONSE',
                                                id: 'num11'
                                            },
                                            {
                                                type: 'CONST',
                                                value: [25, 75]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    decorators: {
        arr3: {
            component: {
                type: 'checkboxgroup'
            }
        },
        arr6: {
            component: {
                type: 'checkboxgroup'
            }
        },
        arr7: {
            component: {
                type: 'checkboxgroup'
            }
        },
        bool7: {
            component: {
                type: 'radio'
            }
        },
        num4: {
            component: {
                type: 'range'
            }
        },
        num5: {
            hint: 'Show child if > 5',
            component: {
                type: 'range'
            }
        },
        num8: {
            hint: 'Show child if < 5'
        },
        num11: {
            component: {
                type: 'range'
            }
        }
    }
};
