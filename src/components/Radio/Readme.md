    initialState = {checked: true};
    update = checked => setState({checked});
    <Radio label="un/check me" onClick={update} />

States

    <div>
      <Radio label="normal" />
      <Radio label="checked" isChecked />
      <Radio label="disabled" isDisabled />
      <Radio label="checked and disabled" isDisabled isChecked />
    </div>
