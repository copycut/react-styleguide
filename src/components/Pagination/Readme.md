Pagination give access to page navigation.

    initialState = { activePage: 1 };
    click = activePage => setState({ activePage });

    <Pagination
      itemsCount={100}
      itemsPerPage={10}
      hasPrevNext
      hasFirstLast
      activePage={state.activePage}
      onChange={page => click(page)}
    />
