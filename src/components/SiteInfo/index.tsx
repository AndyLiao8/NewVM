import * as React from 'react';
import { Button } from 'antd';

export interface ShowSiteConfigProps {
    isLoading: boolean;
    defaultTwitterAmount: number;
    isPartnerSite: boolean;
    maxTwitterAmount: number;
    siteId: number;
    totalConversations: number;
    onClick: (Event) => void;
}
export default ({ isLoading = false, totalConversations = 0, ...others }: ShowSiteConfigProps) => (
    <div>
        <h3>Site Info</h3>
        {isLoading && <div>loading...</div>}
        {!isLoading && (
            <ul>
                <li>Site ID: {others.siteId}</li>
                <li>Twitter's Amount: {others.defaultTwitterAmount}</li>
                <li>If Partner Site: {others.isPartnerSite}</li>
                <li>Max Twitter Amount: {others.maxTwitterAmount}</li>
                <li>Conversation Count: {totalConversations}</li>
            </ul>
        )}
        <div>
            <Button
                loading={isLoading}
                onClick={others.onClick}
                type="primary"
            >
                Load Site Info
            </Button>
        </div>
    </div>
);
