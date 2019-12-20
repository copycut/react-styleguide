    initialState = { isActive: false };
    const switching = isActive => setState({ isActive });
    <div>
      <Switch onChange={switching} isActive={state.isActive} />
      <pre>{`Switch status: ${String(state.isActive)}`}</pre>
    </div>

Colors

    initialState = {
      isActive: false,
      colors: [
        'default',
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'extra',
        'black'
      ]
    };
    switchColor = event => setState({ color: event.target.value });
    const switching = isActive => setState({ isActive });
    <p>
      {state.colors.map(color => (
        <Switch key={color} color={color} onChange={switching} isActive={state.isActive} />
      ))}
    </p>

States

    <div>
      <p><Switch isActive /></p>
      <p><Switch isDisabled /></p>
      <p><Switch isDisabled isActive /></p>
    </div>

Sizes

    <div>
      <p><Switch size="extraSmall" /></p>
      <p><Switch size="small" /></p>
      <p><Switch size="normal" /></p>
      <p><Switch size="large" /></p>
      <p><Switch size="extraLarge" /></p>
    </div>
