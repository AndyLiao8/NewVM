export interface Conversation {
    id: number;
    subject: string;
    lastMessage: string;
}

export interface ConversationState {
    isLoading: boolean;
    isInitialized: boolean;
    conversations: Conversation[];
}

export interface SiteConfig {
    defaultTwitterAmount: number;
    isPartnerSite: boolean;
    maxTwitterAmount: number;
    siteId: number;
}

export interface SiteConfigState {
    isLoading: boolean;
    config: SiteConfig;
}

type State = {
    siteConfig: SiteConfigState;
    conversation: ConversationState;
}

export default State;