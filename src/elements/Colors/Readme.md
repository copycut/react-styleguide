List of colors

    <div className="row colors">
      {[
        'primarySmoke',
        'primaryLight',
        'primary',
        'primaryDark',
        'successSmoke',
        'successLight',
        'success',
        'successDark',
        'warningSmoke',
        'warningLight',
        'warning',
        'warningDark',
        'dangerSmoke',
        'dangerLight',
        'danger',
        'dangerDark',
        'infoSmoke',
        'infoLight',
        'info',
        'infoDark',
        'extraSmoke',
        'extraLight',
        'extra',
        'extraDark',
        'white',
        'greySmoke',
        'greyLight',
        'grey',
        'greyMedium',
        'greyDark',
        'greyDarker',
        'black'
      ].map(color => (
        <div className="col" key={color}>
          <Colors color={color} />
        </div>
      ))}
    </div>
        