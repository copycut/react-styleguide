Tag are use for add encapsulated information.

    <Tag>Tag</Tag>

Colors

    <div>
        <Tag color='primarySmoke'>primarySmoke</Tag>
        <Tag color='primaryLight'>primaryLight</Tag>
        <Tag color='primary'>primary</Tag>
        <Tag color='primaryDark'>primaryDark</Tag>
        <Tag color='successSmoke'>successSmoke</Tag>
        <Tag color='successLight'>successLight</Tag>
        <Tag color='success'>success</Tag>
        <Tag color='successDark'>successDark</Tag>
        <Tag color='warningSmoke'>warningSmoke</Tag>
        <Tag color='warningLight'>warningLight</Tag>
        <Tag color='warning'>warning</Tag>
        <Tag color='warningDark'>warningDark</Tag>
        <Tag color='dangerSmoke'>dangerSmoke</Tag>
        <Tag color='dangerLight'>dangerLight</Tag>
        <Tag color='danger'>danger</Tag>
        <Tag color='dangerDark'>dangerDark</Tag>
        <Tag color='infoSmoke'>infoSmoke</Tag>
        <Tag color='infoLight'>infoLight</Tag>
        <Tag color='info'>info</Tag>
        <Tag color='infoDark'>infoDark</Tag>
        <Tag color='extraSmoke'>extraSmoke</Tag>
        <Tag color='extraLight'>extraLight</Tag>
        <Tag color='extra'>extra</Tag>
        <Tag color='extraDark'>extraDark</Tag>
        <Tag color='white'>white</Tag>
        <Tag color='greySmoke'>greySmoke</Tag>
        <Tag color='greyLight'>greyLight</Tag>
        <Tag color='grey'>grey</Tag>
        <Tag color='greyMedium'>greyMedium</Tag>
        <Tag color='greyDark'>greyDark</Tag>
        <Tag color='greyDarker'>greyDarker</Tag>
        <Tag color='black'>black</Tag>
    </div>

Sizes

    <div>
        <div style={{marginBottom: '1em'}}>
          <Tag isDismissible size='extraSmall' onClose={value => console.log(value)}>Tag extraSmall</Tag> - 
          <Tag isRounded isDismissible size='extraSmall' onClose={value => console.log(value)}>Tag extraSmall</Tag>
        </div>
        <div style={{marginBottom: '1em'}}>
          <Tag isDismissible size='small' onClose={value => console.log(value)}>Tag small</Tag> - 
          <Tag isRounded isDismissible size='small' onClose={value => console.log(value)}>Tag small</Tag>
        </div>
        <div style={{marginBottom: '1em'}}>
          <Tag isDismissible size='normal' onClose={value => console.log(value)}>Tag normal (default)</Tag> - 
          <Tag isRounded isDismissible size='normal' onClose={value => console.log(value)}>Tag normal (default)</Tag>
        </div>
        <div style={{marginBottom: '1em'}}>
          <Tag isDismissible size='large' onClose={value => console.log(value)}>Tag large</Tag> - 
          <Tag isRounded isDismissible size='large' onClose={value => console.log(value)}>Tag large</Tag>
        </div>
        <div style={{marginBottom: '1em'}}>
          <Tag isDismissible size='extraLarge' onClose={value => console.log(value)}>Tag extraLarge</Tag> - 
          <Tag isRounded isDismissible size='extraLarge' onClose={value => console.log(value)}>Tag extraLarge</Tag>
        </div>
    </div>

Rounded

    <div>
        <div style={{marginBottom: '1em'}}><Tag isRounded>Tag rounded</Tag></div>
        <div style={{marginBottom: '1em'}}><Tag isRounded color='primary'>Tag rounded</Tag></div>
    </div>

Disabled

    <div>
        <Tag isDisabled onClick={() => console.log('you will never read me.')}>Tag disabled</Tag>
        <Tag isDisabled isDismissible onClose={() => console.log('you will never read me.')}>Tag disabled</Tag>
    </div>
