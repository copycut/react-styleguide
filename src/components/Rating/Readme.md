Get insight from user with this component.

    initialState = { value: 0 };
    update = value => setState({value});
    <div>
      <p><Rating value={state.value} onRating={update} /></p>
      <p><Rating inactiveColor="primarySmoke" activeColor="primary" value={state.value} onRating={update} /></p>
      <p><Rating max={5} value={state.value} onRating={update} isDisabled /></p>
      <p><Rating max={5} value={state.value} onRating={update} size="large" /></p>
    </div>
