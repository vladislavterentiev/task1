import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  GiftOutlined,
  PictureOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  MobileOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'



const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalog-items',
          path: `${APP_PREFIX_PATH}/main/catalog/items`,
          title: 'sidenav.main.catalog.items',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-category',
          path: `${APP_PREFIX_PATH}/main/catalog/category`,
          title: 'sidenav.main.catalog.category',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.clients.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clietns-groups',
          path: `${APP_PREFIX_PATH}/main/clietns/groups`,
          title: 'sidenav.main.clients.groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocode',
      path: `${APP_PREFIX_PATH}/main/promocode`,
      title: 'sidenav.main.promocode',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlineStores',
      path: `${APP_PREFIX_PATH}/main/offlineStores`,
      title: 'sidenav.main.offlineStores',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offlineStores-address',
          path: `${APP_PREFIX_PATH}/main/offlineStores/address`,
          title: 'sidenav.main.offlineStores.address',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlineStores-geofences',
          path: `${APP_PREFIX_PATH}/main/offlineStore/geofences`,
          title: 'sidenav.main.offlineStore.geofences',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailing',
      path: `${APP_PREFIX_PATH}/main/mailing`,
      title: 'sidenav.main.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemicNavTree = [{
  key: 'systemic',
  path: `${APP_PREFIX_PATH}/systemic`,
  title: 'sidenav.systemic',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'systemic-settings',
      path: `${APP_PREFIX_PATH}/systemic/settings`,
      title: 'sidenav.systemic.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-mobileApp',
      path: `${APP_PREFIX_PATH}/systemic/mobileApp`,
      title: 'sidenav.systemic.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-logs',
      path: `${APP_PREFIX_PATH}/systemic/logs`,
      title: 'sidenav.systemic.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
    
  ]
}]



const navigationConfig = [
  ...mainNavTree,
  ...systemicNavTree,
  
]

export default navigationConfig;
