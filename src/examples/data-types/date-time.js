export default {
    id: 'DATETIME',
    title: 'Date/Time',
    faIcon: {
        name: 'calendar-alt'
    },
    sections: [
        {
            id: 'section_0',
            title: 'Date/Time',
            subsections: [
                {
                    id: 'subsection)',
                    title: 'Store Date/Time Values',
                    subtitle: 'Persists as [id]:[value:Date] in the Model',
                    fields: [
                        {
                            id: 'info',
                            type: 'info',
                            title:
                                'Implements <a href="https://reactdatepicker.com/">react-datepicker</a>',
                            content: `Any props that are available to <a href="https://reactdatepicker.com/">react-datepicker</a> 
                                    can be attached as field decorators. Such as <code>timeIntervals</code>, <code>dateFormat</code>, etc.`
                        },
                        {
                            id: 'date1',
                            type: 'date',
                            title: 'Date/Time field'
                        },
                        {
                            id: 'date2',
                            type: 'date',
                            title: 'Time field'
                        },
                        {
                            id: 'date3',
                            type: 'date',
                            title: 'Date field'
                        }
                    ]
                }
            ]
        }
    ],
    decorators: {
        date2: {
            hideCalendar: true,
            timeFormat: 'HH:mm'
        },
        date3: {
            hideTimeSelect: true
        }
    }
};
