    import Button from '../../components/Button';
    import ButtonGroup from '../ButtonGroup';
    
    initialState = {
      content: 'Default content',
      isOpen: false,
      isReverse: false,
      isDismissible: false,
      hasBackdrop: false,
      title: 'Default Title',
      titleDirection: 'center',
      footerDirection: 'right',
      width: 'normal'
    };

    const toggle = () => setState({ isOpen: !state.isOpen });

    <div>
      <Button color='primary' onClick={toggle}>Open Modal</Button>

      <Modal
        isOpen={state.isOpen}
        isReverse={state.isReverse}
        title={state.title}
        isDismissible={state.isDismissible}
        hasBackdrop={state.hasBackdrop}
        onDismiss={toggle}
        footer={
          <ButtonGroup>
            <Button onClick={toggle}>Cancel</Button>
            <Button color='primary' onClick={toggle}>Do it!</Button>
          </ButtonGroup>
        }
        footerDirection={state.footerDirection}
        titleDirection={state.titleDirection}
        width={state.width}>
        {state.content}
      </Modal>
    </div>
