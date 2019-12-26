    import Button from '../Button';
    const content = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.';
    const buttonText = 'click me and check the console';
    const myFunc = () => console.log('clicked!');
    const width = `${100/3}%`;

    <div style={{textAlign: 'center'}}>
        <Popover
          isDisabled
          isDismissible
          title='Popover'
          content={content}
          buttonText={buttonText}
          buttonColor='warning'
          onClick={myFunc}
          style={{width}}>
          <Button color='primary'>Popover (disabled)</Button>
        </Popover>

        <Popover
          isDismissible
          content={content}
          buttonText={buttonText}
          buttonColor='warning'
          onClick={myFunc}
          style={{width}}>
          <Button color='primary'>Popover</Button>
        </Popover>

        <Popover
          buttonText={buttonText}
          buttonColor='warning'
          onClick={myFunc}
          style={{width}}>
          <Button color='primary'>Popover</Button>
        </Popover>
    </div>
