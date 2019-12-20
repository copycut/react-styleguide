    initialState = {
        checkboxes: [{
            label: 'First Checkbox',
            name: 'checkbox-buttons',
            id: 'first_checkbox',
            isDisabled: false,
            isSomeChecked: false,
            isChecked: false
        },
        {
            label: 'Second Checkbox',
            name: 'checkbox-buttons',
            id: 'second_checkbox',
            isDisabled: false,
            isSomeChecked: false,
            isChecked: true
        },
        {
            label: 'Third Checkbox (disabled)',
            name: 'checkbox-buttons',
            id: 'third_checkbox',
            isDisabled: false,
            isSomeChecked: true,
            isChecked: false
        },
        {
            label: 'Fourth Checkbox',
            name: 'checkbox-buttons',
            id: 'fourth_checkbox',
            isDisabled: true,
            isSomeChecked: false,
            isChecked: false
        },{
            label: 'Fifth Checkbox',
            name: 'checkbox-buttons',
            id: 'fifth_checkbox',
            isDisabled: true,
            isSomeChecked: true,
            isChecked: false
        },
        {
            label: 'Sixth Checkbox',
            name: 'checkbox-buttons',
            id: 'sixth_checkbox',
            isDisabled: true,
            isSomeChecked: false,
            isChecked: true
        }]
    };
    const onCheck = (id, value) => setState({
        checkboxes: state.checkboxes.map(checkbox => {
            return {
                ...checkbox,
                isChecked: checkbox.id === id ? value : checkbox.isChecked,
                isSomeChecked: checkbox.id === id && value ? false : checkbox.isSomeChecked
            };
        })
    });
    <div>
        {state.checkboxes.map(checkbox => (
            <div key={checkbox.id}>
                <Checkbox
                    isChecked={checkbox.isChecked}
                    isDisabled={checkbox.isDisabled}
                    isSomeChecked={checkbox.isSomeChecked}
                    label={checkbox.label}
                    onClick={value => onCheck(checkbox.id, value)}
                    onChange={value => console.log('onChange:', value)}
                    onFocus={event => console.log('onFocus:', event)}
                    onBlur={event => console.log('onBlur:', event)}
                />
            </div>
        ))}
    </div>
