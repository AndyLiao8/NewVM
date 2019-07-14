import { Table, Layout, Button } from 'antd';
import * as React from 'react';
import { Conversation } from 'src/state';

export interface ConversationProps {
    isLoading: boolean;
    data: Conversation[];
    onClick: (Event) => void;
}

export default (props: ConversationProps) => {
    const columns = [
        {
          title: 'Conversation ID',
          dataIndex: 'id',
          key: 'id',
          render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: 'Subject',
          dataIndex: 'subject',
          key: 'subject',
        },
        {
          title: 'Last Message',
          dataIndex: 'lastMessage',
          key: 'lastMessage',
        }
      ];
    return (
        <Layout>
            {props.isLoading && <div>Loading...</div>}
            <Table columns={columns} dataSource={props.data} />;
            <div>
                <Button onClick={props.onClick} type="primary">Reload Conversation</Button>
            </div>
        </Layout>
    );
};