Display alert on sticky position top or bottom.

    import Button from '../Button';

    initialState = { isActive: false };

    toggle = () => setState({ isActive: !state.isActive });

    <div>
      <Button onClick={toggle}>Toggle Notification</Button>
      <Notification
        isDismissible
        isActive={state.isActive}
        onDismiss={toggle}
        color="danger"
        icon="information"
        iconColor="dangerDark"
      >
        My Notification.
      </Notification>
    </div>
