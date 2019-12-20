Types

    <div>
        <Input type='text' placeholder='input text' defaultValue='test' onBlur={event => console.log('blur', event)} />
        <Input type='color' placeholder='input color' />
        <Input type='date' />
        <Input type='time' />
        <Input type='number' placeholder='input number' />
        <Input type='password' placeholder='input password' />
        <Input type='text' placeholder='With error' isError errorMessage='Required field.' />
    </div>

Textarea

    <Input type='textarea' placeholder='Fill a text here.' defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
