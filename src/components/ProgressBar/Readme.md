Display progression with this component.

    initialState = {current: 0};
    const total = 100;
    const update = current => setState && setState({current: current >= total ? 0 : current});
    setTimeout(() => update(++state.current), 100);
    <div>
      <ProgressBar color="success" size="extraSmall" current={state.current} total={total} />
      <ProgressBar color="primary" size="small" current={state.current} total={total} />
      <ProgressBar current={state.current} total={total} />
      <ProgressBar color="warning" size="large" current={state.current} total={total} />
      <ProgressBar color="danger" size="extraLarge" current={state.current} total={total} />
    </div>

Labels

    <div>
      <ProgressBar color="extra" current={66} total={100} label="Loading" />
      <ProgressBar color="extra" current={66} total={100} labelPosition="left" />
      <ProgressBar color="black" current={66} total={100} label="Loading" labelPosition="right" />
    </div>
