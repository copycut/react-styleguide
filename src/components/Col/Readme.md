Sizes

    import Row from '../Row';
    const style = {
      backgroundColor:'#EEE',
      boxShadow:'inset 0 0 1px #666',
      textAlign:'center',
      fontFamily:'sans-serif',
      fontSize: 13
    };
    <div>
        <Row>
            <Col mobile={12} style={style}>12</Col>
        </Row>
        <Row>
            <Col mobile={11} style={style}>11</Col>
            <Col mobile={1} style={style}>1</Col>
        </Row>
        <Row>
            <Col mobile={10} style={style}>10</Col>
            <Col mobile={2} style={style}>2</Col>
        </Row>
        <Row>
            <Col mobile={9} style={style}>9</Col>
            <Col mobile={3} style={style}>3</Col>
        </Row>
        <Row>
            <Col mobile={8} style={style}>8</Col>
            <Col mobile={4} style={style}>4</Col>
        </Row>
        <Row>
            <Col mobile={7} style={style}>7</Col>
            <Col mobile={5} style={style}>5</Col>
        </Row>
        <Row>
            <Col mobile={6} style={style}>6</Col>
            <Col mobile={6} style={style}>6</Col>
        </Row>
        <Row>
            <Col mobile={5} style={style}>5</Col>
            <Col mobile={7} style={style}>7</Col>
        </Row>
        <Row>
            <Col mobile={4} style={style}>4</Col>
            <Col mobile={4} style={style}>4</Col>
            <Col mobile={4} style={style}>4</Col>
        </Row>
        <Row>
            <Col mobile={3} style={style}>3</Col>
            <Col mobile={3} style={style}>3</Col>
            <Col mobile={3} style={style}>3</Col>
            <Col mobile={3} style={style}>3</Col>
        </Row>
        <Row>
            <Col mobile={2} style={style}>2</Col>
            <Col mobile={2} style={style}>2</Col>
            <Col mobile={2} style={style}>2</Col>
            <Col mobile={2} style={style}>2</Col>
            <Col mobile={2} style={style}>2</Col>
            <Col mobile={2} style={style}>2</Col>
        </Row>
        <Row>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
            <Col mobile={1} style={style}>1</Col>
        </Row>
    </div>

Responsive

    import Row from '../Row';
    const style = {backgroundColor:'#EEE', boxShadow:'inset 0 0 1px #666', textAlign:'center', fontFamily:'sans-serif'};
    <Row>
        <Col mobile={12} tablet={6} desktop={3} style={style}>4</Col>
        <Col mobile={12} tablet={6} desktop={3} style={style}>4</Col>
        <Col mobile={12} tablet={6} desktop={3} style={style}>4</Col>
        <Col mobile={12} tablet={6} desktop={3} style={style}>4</Col>
    </Row>
