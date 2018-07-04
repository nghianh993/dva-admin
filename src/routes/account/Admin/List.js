import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Menu } from 'antd'
import { DataTable, DropMenu } from 'components'
import { UPDATE, STATUS, DELETE } from 'constants/options'
import styles from './List.less'

const confirm = Modal.confirm

function List ({
  accountAdmin: {
    list,
    pagination,
  },
  loading,
  updatePower,
  deletePower,
  onPageChange,
  onDeleteItem,
  onEditItem,
  onStatusItem,
}) {
  const handleDeleteItem = (record) => {
    confirm({
      title: 'Bạn có chắc chắn muốn xóa bản ghi này không??',
      onOk () {
        onDeleteItem(record.id)
      },
    })
  }

  const handleMenuClick = (key, record) => {
    return {
      [UPDATE]: onEditItem,
      [STATUS]: onStatusItem,
      [DELETE]: handleDeleteItem,
    }[key](record)
  }

  const columns = [
    {
      title: 'Hình đại diện',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: text => <img width={24} src={text} alt={text} />,
    }, {
      title: 'Tên người dùng',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Giới tính',
      dataIndex: 'isMale',
      key: 'isMale',
      render: text => (<span>{text
        ? 'Namg'
        : 'Nữ'}</span>),
    }, {
      title: 'Điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Quyền',
      dataIndex: 'roleName',
      key: 'roleName',
    }, {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Ngày tạo',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: status => <span>{status ? 'Kích hoạt' : 'Ẩn'}</span>,
    }, {
      title: 'Chức năng',
      key: 'operation',
      // width: 100,
      render: (text, record) => (
        <DropMenu>
          <Menu onClick={({ key }) => handleMenuClick(key, record)}>
            {updatePower && <Menu.Item key={STATUS}>{record.status ? '禁用' : '启用'}</Menu.Item>}
            {updatePower && <Menu.Item key={UPDATE}>Chỉnh sửa</Menu.Item>}
            {deletePower && <Menu.Item key={DELETE}>Xóa</Menu.Item>}
          </Menu>
        </DropMenu>
      ),
      // fixed: 'right'
    },
  ]

  return (
    <DataTable
      className={styles.table}
      columns={columns}
      dataSource={list}
      loading={loading.effects['accountAdmin/query']}
      pagination={pagination}
      onPageChange={onPageChange}
      rowKey={record => record.id}
    />
  )
}

List.propTypes = {
  loading: PropTypes.object.isRequired,
  accountAdmin: PropTypes.object.isRequired,
  updatePower: PropTypes.bool.isRequired,
  deletePower: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onStatusItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
}

export default List
