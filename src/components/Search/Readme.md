Search is an text input with an icon. Use all props like an Input.

    initialState = { search: '' };
    const onSearch = search => setState({ search });
    <div>
        <Search onChange={onSearch} value={state.search} />
        <p className="note">{`value: ${state.search}`}</p>
    </div>

Disabled

    <Search
        isDisabled
        onChange={() => console.log('search')}
        value='Search is disabled'
    />

Sizes & Rounded

    <div>
        <Search isRounded placeholder='extraSmall' size='extraSmall' /><br />
        <Search isRounded placeholder='small' size='small' /><br />
        <Search isRounded placeholder='normal' size='normal' /><br />
        <Search isRounded placeholder='large' size='large' /><br />
        <Search isRounded placeholder='extraLarge' size='extraLarge' /><br />
    </div>

Error

    <Search isError placeholder='With error Search' errorMessage='Search with a error message.' />
