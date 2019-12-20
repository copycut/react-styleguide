The dropdown supports the same props as the Button component and adds some events.
The dropdown component can get `MenuItem` components as children or options prop as an array of string.

**Options**

Select an element by clicking it in the dropdown returns the index of this element and the native event.

    <Dropdown
      label="Dropdown with options"
      options={['first item', 'second item', 'third item']}
      onChange={console.log}
    />

**Composed dropdown**

You must attach events to children to interact with them.

    import MenuItem from '../MenuItem';
    import Separator from '../Separator';

    <Dropdown label='Dropdown with MenuItems'>
      <MenuItem isHeader>User Name</MenuItem>
      <MenuItem onClick={console.log}>Settings</MenuItem>
      <MenuItem onClick={console.log}>Plan</MenuItem>
      <Separator />
      <MenuItem onClick={console.log}>Logout</MenuItem>
    </Dropdown>
