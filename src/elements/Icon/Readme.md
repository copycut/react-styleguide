    <div className="row icons">
      {[
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'bin',
        'bookmark',
        'calendar',
        'check',
        'chevron-down',
        'chevron-first',
        'chevron-last',
        'chevron-left',
        'chevron-right',
        'chevron-up-down',
        'chevron-up',
        'circle-minus',
        'circle-plus',
        'cross',
        'extend',
        'external',
        'filter',
        'flag',
        'heart',
        'information',
        'loader',
        'lock',
        'menu',
        'minus',
        'mute',
        'options',
        'orderby',
        'pause',
        'pdf',
        'pin',
        'play',
        'plus',
        'position',
        'reduce',
        'reload',
        'search',
        'settings',
        'share',
        'star',
        'tag',
        'time',
        'triangle-down-up',
        'triangle-down',
        'triangle-left',
        'triangle-right',
        'triangle-up-down',
        'triangle-up',
        'volume',
        'warning-sign'
      ].map(icon => (
        <div className="col" key={icon} mobile={2}>
          <Icon size='extraLarge' icon={icon} />
          <div className="note">#{icon}</div>
        </div>
      ))}
    </div>

Size

    <div>
      <Icon icon='search' size='extraSmall' />
      <Icon icon='search' size='small' />
      <Icon icon='search' size='normal' />
      <Icon icon='search' size='large' />
      <Icon icon='search' size='extraLarge' />
    </div>

Colors

    <div>
      <Icon icon='search' size='extraLarge' color='primary' />
      <Icon icon='search' size='extraLarge' color='success' />
      <Icon icon='search' size='extraLarge' color='warning' />
      <Icon icon='search' size='extraLarge' color='danger' />
      <Icon icon='search' size='extraLarge' color='info' />
      <Icon icon='search' size='extraLarge' color='extra' />
      <Icon icon='search' size='extraLarge' color='white' />
      <Icon icon='search' size='extraLarge' color='grey' />
      <Icon icon='search' size='extraLarge' color='black' />
    </div>

Inject SVG Path

    <Icon color='primary' path='M0 0 H30 V30 H0 L0 0' />

Inject SVG File

    const triangle = `<svg class='test' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M0 0 H30 V30 H0 L0 0"/></svg>`;
    <Icon color='primary' icon={triangle} />
