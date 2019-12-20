    import Tab from '../Tab';
    import Button from '../Button';
    import Title from '../Title';

    initialState = { tabActive: 0 };
    const changeActive = tab => setState({ tabActive: tab });

    <div>
      <Tabs tabActive={state.tabActive} onClick={tab => changeActive(tab)}>
        <Tab title='First Tab'>
          <Title level={3}>First Tab</Title>
          <Button onClick={() => changeActive(1)}>Set second active</Button>
        </Tab>
        <Tab title='Second Tab'>
          <Title level={3}>Second Tab</Title>
        </Tab>
        <Tab title='Third Tab'>
          <Title level={3}>Third Tab</Title>
        </Tab>
      </Tabs>
    </div>
