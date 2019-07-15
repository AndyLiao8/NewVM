import { Table, Layout, Button } from 'antd';
import * as React from 'react';
import { Conversation } from 'src/state';

export interface ConversationProps {
    isLoading: boolean;
    isInitialized: boolean;
    data: Conversation[];
    onClick: (Event) => void;
    initializeData: () => void;
}

const columnsConfig = () => ([
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
]);

class Conversations extends React.PureComponent<ConversationProps> {
  static getDerivedStateFromProps(props: ConversationProps) {
    if(!props.isInitialized) {
      props.initializeData();
    }
    return null;
  }

  render() {
    return (
        <Layout>
            {this.props.isLoading && <div>Loading...</div>}
            <Table columns={columnsConfig()} dataSource={this.props.data} />;
            <div>
                <Button
                  loading={this.props.isLoading}
                  type="primary"
                  onClick={this.props.onClick}
                >
                  Reload Conversation
                </Button>
            </div>
        </Layout>
    );
  }
}

export default Conversations;