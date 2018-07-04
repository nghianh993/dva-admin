// power = {1: "Menu xem", 2: "Xem chi tiết", 3: "Thêm", 4: "Sửa đổi", 5: "Xóa", 6: "Kiểm tra", 7: "Tải lên"}
// options = {MENU: "Xem Menu", CHI TIẾT: "Xem chi tiết", THÊM: "Thêm", CẬP NHẬT: "Sửa đổi", XÓA: "Xóa", CHECK: "Kiểm tra", UPLOAD: "Tải lên"}
import _ from 'lodash'

const menu = [
  // dashboard
  {
    id: _.uniqueId(),
    key: 'dashboard',
    name: 'Quản lý chung',
    icon: 'laptop',
    power: [1, 2],
  },
  // account
  {
    id: _.uniqueId(),
    key: 'account',
    name: 'Quản lý người dùng',
    icon: 'user',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'admin',
        name: 'Quản trị viên',
        power: [1, 2, 3, 4, 5],
      },
      {
        id: _.uniqueId(),
        key: 'role',
        name: 'Vai trò quản trị viên',
        power: [1, 2, 3, 4, 5],
      },
      {
        id: _.uniqueId(),
        key: 'user',
        name: 'Người dùng',
        power: [1, 2, 3, 4, 5],
      },
    ],
  },
  // system
  {
    id: _.uniqueId(),
    key: 'system',
    name: 'Quản lý hệ thống',
    icon: 'appstore',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'modify-password',
        name: 'Thay đổi mật khẩu',
        power: [1, 2, 4],
      },
    ],
  },
  // bbs
  {
    id: _.uniqueId(),
    key: 'bbs',
    name: 'Phân trang',
    icon: 'message',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'category',
        name: 'Quản lý phân loại',
        power: [1, 2, 3, 4, 5],
      },
    ],
  },
  // Điều hướng đa cấp
  {
    id: _.uniqueId(),
    key: 'navigation',
    name: 'Kiểm tra điều hướng',
    icon: 'setting',
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'navigation1',
        name: '二级导航1',
        power: [1, 2],
      },
      {
        id: _.uniqueId(),
        key: 'navigation2',
        name: '二级导航2',
        clickable: false,
        power: [1],
        children: [
          {
            id: _.uniqueId(),
            key: 'navigation21',
            name: 'Điều hướng phụ 1',
            power: [1, 2],
          },
          {
            id: _.uniqueId(),
            key: 'navigation22',
            name: 'Điều hướng phụ 2',
            power: [1, 2],
          },
        ],
      },
    ],
  },
  // Giao diện người dùng
  {
    id: _.uniqueId(),
    key: 'ui',
    name: 'Giao diện người dùng',
    icon: 'like-o',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'upload',
        name: 'Tải lên tệp',
        power: [1, 2],
      },
      {
        id: _.uniqueId(),
        key: 'media-player',
        name: 'Video âm thanh',
        power: [1, 2],
      },
      {
        id: _.uniqueId(),
        key: 'drop-menu',
        name: 'Menu thao tác kéo xuống',
        power: [1, 2],
      },
      {
        id: _.uniqueId(),
        key: 'lz-editor',
        name: 'LzEditor',
        power: [1, 2],
      },
    ],
  },
]

export default menu
