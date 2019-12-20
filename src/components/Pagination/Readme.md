Basic

    initialState = {
      activePage: 1
    };
    const click = activePage => setState({ activePage });

    <Pagination
      itemsCount={100}
      itemsPerPage={10}
      activePage={state.activePage}
      onChange={page => click(page)}
    />
