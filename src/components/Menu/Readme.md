The menu is a container of MenuItems, Separator or list items.

    import MenuItem from '../MenuItem';
    import Separator from '../Separator';
    <Menu>
        <MenuItem isHeader>Section title</MenuItem>
        <MenuItem>Sub item</MenuItem>
        <MenuItem>Another Sub item</MenuItem>
        <Separator />
        <MenuItem>Yet Another Sub item</MenuItem>
        <MenuItem isActive>Active Sub item</MenuItem>
        <MenuItem isDisabled>Disabled Sub item</MenuItem>
    </Menu>
