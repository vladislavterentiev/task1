import React, { Component } from 'react';
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProfile from '../setting/EditProfile';

export class UserList extends Component {
  state = {
    users: [],
    loading: true,
    isEditing: false, // состояние для управления видимостью EditProfile
    selectedUser: null, // выбранный пользователь
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.setState({ users: data, loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
      message.error('Failed to load user data.');
    }
  }

  deleteUser = userId => {
    this.setState({
      users: this.state.users.filter(user => user.id !== userId),
    });
    message.success(`Deleted user with ID ${userId}`);
  };

  startEditing = userInfo => {
    this.setState({
      isEditing: true,
      selectedUser: userInfo,
    });
  };

  stopEditing = () => {
    this.setState({
      isEditing: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, loading, isEditing, selectedUser } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" tip="Loading users..." />
        </div>
      );
    }

    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'City',
        dataIndex: ['address', 'city'],
        key: 'city',
        sorter: (a, b) => a.address.city.localeCompare(b.address.city),
      },
      {
        title: 'Company',
        dataIndex: ['company', 'name'],
        key: 'company',
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => this.startEditing(record)} // открываю форму редактирования
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => this.deleteUser(record.id)}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <Card bodyStyle={{ padding: '0px' }}>
        {/* отображаю либо список пользователей, либо форму редактирования */}
        {isEditing ? (
          <EditProfile
            data={selectedUser} // передаю данные пользователя
            onClose={this.stopEditing} 
          />
        ) : (
          <Table columns={tableColumns} dataSource={users} rowKey="id" />
        )}
      </Card>
    );
  }
}

export default UserList;