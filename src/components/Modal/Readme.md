    import Button from '../../components/Button';
    import ButtonGroup from '../ButtonGroup';

    initialState = {
      content: 'Default content',
      isOpen: false
    };

    const toggle = () => setState({ isOpen: !state.isOpen });

    <div>
      <Button color='primary' onClick={toggle}>Open Modal</Button>

      <Modal
        isOpen={state.isOpen}
        title="Default Title"
        isDismissible
        hasBackdrop
        onDismiss={toggle}
        footer={
          <ButtonGroup>
            <Button onClick={toggle}>Cancel</Button>
            <Button color='primary' onClick={toggle}>Do it!</Button>
          </ButtonGroup>
        }
        footerDirection="right">
        {state.content}
      </Modal>
    </div>
