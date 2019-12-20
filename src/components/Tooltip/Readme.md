The tooltip component act as a wrapper around your component to display some information when over it.

    <div>
      <Tooltip text='Hello World!'>
        <button>Normal</button>
      </Tooltip>
      <Tooltip text='Hello World!' isActive>
      <button>Active</button>
      </Tooltip>
      <Tooltip text='Hello World!' isDisabled>
        <button>Disabled</button>
      </Tooltip>
    </div>

Placement

    <div>
      <Tooltip text='Hello World!' placement='top'>
        <button>Placement top</button>
      </Tooltip>

      <Tooltip text='Hello World!' placement='left'>
        <button>Placement left</button>
      </Tooltip>

      <Tooltip text='Hello World!' placement='bottom'>
        <button>Placement bottom</button>
      </Tooltip>

      <Tooltip text='Hello World!' placement='right'>
        <button>Placement right</button>
      </Tooltip>
    </div>

Colors

    <div>
      <Tooltip text='Hello World!' color='primary'>
        <button>Color primary</button>
      </Tooltip>

      <Tooltip text='Hello World!' color='success'>
        <button>Color success</button>
      </Tooltip>

      <Tooltip text='Hello World!' color='warning'>
        <button>Color warning</button>
      </Tooltip>

      <Tooltip text='Hello World!' color='primarySmoke'>
        <button>Color primarySmoke</button>
      </Tooltip>
    </div>
