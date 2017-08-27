class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      },
      {
        name: 'Data Table',
        icon: 'view_module',
        sref: '.data-table'
      }
    ];
  }
}

export default NavbarController;
