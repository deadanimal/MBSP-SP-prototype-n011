export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-info'
  },
  {
    path: '/admin/pengurusan-vendor',
    title: 'Pengurusan Vendor',
    type: 'link',
    icontype: 'fas fa-store-alt text-info'
  },
  {
    path: '/admin/pengurusan-iklan',
    title: 'Pengurusan Iklan',
    type: 'link',
    icontype: 'fas fa-city text-info'
  },
  {
    path: '/admin/rfx',
    title: 'Pengurusan RFx',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-info',
    collapse: 'rfx',
    isCollapsed: true,
    children: [
      { path: 'pembukaan', title: 'Pembukaan RFx', type: 'link' },
      { path: 'analisa', title: 'Analisa RFx', type: 'link' }
    ]
  },
  {
    path: '/admin/management',
    title: 'Pengurusan Sistem',
    type: 'sub',
    icontype: 'fas fa-cogs text-info',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'user', title: 'User Control', type: 'link' },
      { path: 'audit-trails', title: 'Jejak Audit', type: 'link' }
    ]
  },/*
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];