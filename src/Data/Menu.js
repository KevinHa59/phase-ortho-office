import { MdHome, MdInventory, MdPrecisionManufacturing, MdAdminPanelSettings, MdOutlineAttachMoney, MdHighQuality, MdHail } from 'react-icons/md';

export const Menu = [
  {
    name: 'Home',
    icon: <MdHome className="Icon" />,
    path: '/home/resources',
    subMenu: [
      {
        name: 'Resources',
        path: '/home/resources',
      },
      {
        name: 'Feedback',
        path: '/home/feedback',
      },
      {
        name: 'User Profile',
        path: '/home/user-profile',
      },
    ],
  },
  {
    name: 'Order Management',
    icon: <OrderManagerIcon className="Icon" />,
    path: '/order-management/orders',
    subMenu: [
      {
        name: 'Orders Page',
        path: '/order-management/orders',
      },
      {
        name: 'CM Sticky 1',
        path: '/order-management/cm-sticky-1',
      },
      {
        name: 'CM Sticky 2',
        path: '/order-management/cm-sticky-1',
      },
      {
        name: 'CM Sticky 3',
        path: '/order-management/cm-sticky-1',
      },
    ],
  },
  {
    name: 'Inventory',
    icon: <MdInventory className="Icon" />,
    path: '/inventory/warehouse',
    subMenu: [
      {
        name: 'Warehouse',
        path: '/inventory/warehouse',
      },
      {
        name: 'Internal inventory',
        path: '/inventory/internal-inventory',
      },
      {
        name: 'External inventory',
        path: '/inventory/external-inventory',
      },
    ],
  },
  {
    name: 'Manufacturing',
    icon: <MdPrecisionManufacturing className="Icon" />,
    path: '/manufacturing/scheduling',
    subMenu: [
      {
        name: 'Scheduling',
        path: '/manufacturing/scheduling',
      },
      {
        name: 'Health analytics',
        path: '/manufacturing/health-analytics',
      },
      {
        name: 'Terminals',
        path: '/manufacturing/terminals',
        subMenu: [
          {
            name: 'Auto Therm',
            path: '/manufacturing/terminals/auto-therm',
          },
          {
            name: 'Laser',
            path: '/manufacturing/terminals/laser',
          },
          {
            name: 'Mill',
            path: '/manufacturing/terminals/mill',
          },
          {
            name: 'Tumble',
            path: '/manufacturing/terminals/tumble',
          },
          {
            name: 'Review',
            path: '/manufacturing/terminals/review',
          },
          {
            name: 'Pack & Ship',
            path: '/manufacturing/terminals/pack-ship',
          },
        ],
      },
    ],
  },
  {
    name: 'Administration',
    icon: <MdAdminPanelSettings className="Icon" />,
    path: '/administration/atlassian',
    subMenu: [
      {
        name: 'Atlassian',
        path: '/administration/atlassian',
      },
      {
        name: 'Analytics',
        path: '/administration/analytics',
      },
      {
        name: 'KPI-OKR',
        path: '/administration/kpi-okr',
      },
    ],
  },
  {
    name: 'Financial',
    icon: <MdOutlineAttachMoney className="Icon" />,
    path: '/financial/current',
    subMenu: [
      {
        name: 'Current',
        path: '/financial/current',
      },
      {
        name: 'Historical',
        path: '/financial/historical',
      },
      {
        name: 'Projections',
        path: '/financial/projections',
      },
      {
        name: 'Operations',
        path: '/financial/operations',
      },
    ],
  },
  {
    name: 'Quality',
    icon: <MdHighQuality className="Icon" />,
    path: '/quality/standard-operating-procedures',
    subMenu: [
      {
        name: 'Standard Operating Procedures',
        path: '/quality/standard-operating-procedures',
      },
      {
        name: 'Work Instructions',
        path: '/quality/work-instructions',
      },
      {
        name: 'Trainings',
        path: '/quality/trainings',
      },
    ],
  },
  {
    name: 'Human Resources',
    icon: <MdHail className="Icon" />,
    path: '/human-resources/records',
    subMenu: [
      {
        name: 'Records',
        path: '/human-resources/records',
      },
      {
        name: 'Reviews',
        path: '/human-resources/reviews',
      },
      {
        name: 'Documents',
        path: '/human-resources/documents',
      },
      {
        name: 'Organization Chart',
        path: '/human-resources/organization-chart',
      },
    ],
  },
];

function OrderManagerIcon({ className }) {
  return (
    <svg
      class={'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ' + className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="HistoryEduIcon"
      width={'24px'}
      height={'24px'}
    >
      <path d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"></path>
    </svg>
  );
}
