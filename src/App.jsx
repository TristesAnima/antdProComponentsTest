import { ProTable, TableDropdown, ProCard } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import request from 'umi-request';
import './App.css';

const Index = () => {
  const columns = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48
    },
    {
      title: '标题',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tooltip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项'
          }
        ]
      }
    },
    {
      // disable: true,
      title: '状态',
      dataIndex: 'state',
      filters: true,
      onFilter: true,
      sorter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        all: { text: '超长'.repeat(50) },
        open: {
          text: '未解决',
          status: 'Error'
        },
        closed: {
          text: '已解决',
          status: 'Success',
          disabled: true
        },
        processing: {
          text: '解决中',
          status: 'Processing'
        }
      }
    },
    {
      // disable: true,
      editable: false,
      title: '标签',
      dataIndex: 'labels',
      // search: false,
      hideInForm: true,
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
      render: (_, record) => (
        <Space>
          {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      )
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      sorter: true
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <span
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </span>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' }
          ]}
        />
      ]
    }
  ];

  return (
    <ProCard ghost={false} style={{ backgroundColor: 'gray' }}>
      <ProTable
        columns={columns}
        rowKey="id"
        request={async (params = {}, sort, filter) => {
          console.log(params, sort, filter);
          return request('https://proapi.azurewebsites.net/github/issues', {
            params: { ...params, ...sort, ...filter }
          });
        }}
        pagination={{
          defaultPageSize: 2,
          showSizeChanger: true,
          showQuickJumper: true
        }}
        editable={{
          type: 'single'
        }}
      />
    </ProCard>
  );
};

export default Index;
