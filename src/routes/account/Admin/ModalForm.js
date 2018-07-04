import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Radio, Modal, Icon, Select } from 'antd'
import { InputAutoComplete } from 'components'
import { validPhone } from 'utils/utilsValid'

const FormItem = Form.Item

const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const ModalForm = ({
  modal: { curItem, type, visible },
  loading,
  form: {
    getFieldDecorator,
    validateFields,
    resetFields,
  },
  onOk,
  onCancel,
}) => {
  if (!curItem.roleList) {
    curItem.roleList = []
  }

  const handleOk = () => {
    validateFields((errors, values) => {
      if (errors) {
        return
      }
      const data = {
        ...values,
        id: curItem.id,
      }
      onOk(data)
    })
  }

  const modalFormOpts = {
    title: type === 'create' ? <div><Icon type="plus-circle-o" /> Thêm mới</div> : <div><Icon type="edit" /> Cập nhật</div>,
    visible,
    wrapClassName: 'vertical-center-modal',
    confirmLoading: loading.effects['accountAdmin/showModal'],
    onOk: handleOk,
    onCancel,
    afterClose () {
      resetFields() // Mục bắt buộc, nếu bạn không xác nhận lưu sau khi chỉnh sửa, bạn phải đặt lại dữ liệu khi bạn đóng nó.
    },
  }

  return (
    <Modal {...modalFormOpts}>
      <Form>
        <FormItem label="Tên người dùng：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: curItem.name,
            rules: [
              {
                required: true,
                message: 'Tên người dùng không được để trống',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Giới tính" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isMale', {
            initialValue: curItem.isMale,
            rules: [
              {
                required: true,
                type: 'boolean',
                message: 'Vui lòng chọn giới tính',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>Nam</Radio>
              <Radio value={false}>Nữ</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="Số điện thoại：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: curItem.phone,
            rules: [
              {
                required: true,
                message: 'Số điện thoại không được để trống',
              },
              {
                validator: validPhone,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="E-mail：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: curItem.email,
            rules: [
              {
                required: true,
                message: 'Email không được để trống',
              },
              {
                type: 'email',
                message: 'Không đúng định dạng email',
              },
            ],
          })(<InputAutoComplete />)}
        </FormItem>
        <FormItem label="Quyền：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('roleId', {
            initialValue: curItem.roleId && curItem.roleId.toString(),
            rules: [
              {
                required: true,
                message: 'Nhóm quyền không được để trống',
              },
            ],
          })(<Select placeholder="--Chọn nhóm quyền--">{curItem.roleList.map(item => <Option key={item.id} value={item.id.toString()}>{item.name}</Option>)}</Select>)}
        </FormItem>
        <FormItem label="Địa chỉ：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: curItem.address,
            rules: [
              {
                required: true,
                message: 'Địa chỉ không được để trống',
              },
            ],
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

ModalForm.propTypes = {
  modal: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default Form.create()(ModalForm)
