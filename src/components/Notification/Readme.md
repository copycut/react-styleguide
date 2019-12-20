    import Button from '../Button';
    initialState = {
      open: false,
      color: 'primary',
      iconColor: 'primarySmoke'
    };
    const colors = [
      'primarySmoke',
      'primaryLight',
      'primary',
      'primaryDark',
      'successSmoke',
      'successLight',
      'success',
      'successDark',
      'warningSmoke',
      'warningLight',
      'warning',
      'warningDark',
      'dangerSmoke',
      'dangerLight',
      'danger',
      'dangerDark',
      'infoSmoke',
      'infoLight',
      'info',
      'infoDark',
      'extraSmoke',
      'extraLight',
      'extra',
      'extraDark',
      'white',
      'greySmoke',
      'greyLight',
      'grey',
      'greyMedium',
      'greyDark',
      'greyDarker',
      'black'
    ];
    const open = () => {
      const {open, color, iconColor} = state;
      let newColor = color;
      let newIconColor = iconColor
      if (!open) {
          newColor = colors[Math.floor(Math.random()*colors.length)];
          newIconColor = colors[Math.floor(Math.random()*colors.length)];
      }
      setState({
        open: !open,
        color: newColor,
        iconColor: newIconColor,
        icon: 'star'
      });
    };

    <div>
        <Button onClick={open}>Open/Close Notification</Button>
        <Notification
            isDismissible
            isActive={state.open}
            color={state.color}
            icon={state.icon}
            iconColor={state.iconColor}
        >
            My Notification. Color: {state.color}, icon color: {state.iconColor}
        </Notification>
        <Notification
            placement='bottom'
            isDismissible
            isActive={state.open}
            color={state.color}
            icon={state.icon}
            iconColor={state.iconColor}
        >
            My Notification. Color: {state.color}, icon color: {state.iconColor}
        </Notification>
    </div>
