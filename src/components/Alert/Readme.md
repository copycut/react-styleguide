Alert is used to display information inside the page.

    <div>
      <Alert>Alert default</Alert>
      <Alert isDismissible color='primary' onDismiss={console.log}>Alert primary colored & dismissible</Alert>
      <Alert
        icon='check'
        iconColor='successDark'
        isDismissible
        onDismiss={console.log}
        color='successSmoke'
      >
        Success!
      </Alert>
    </div>
