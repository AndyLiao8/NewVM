import State from 'src/state';

export const getConversationIsLoading = (state: State) => state.conversation.isLoading;
export const getConversations = (state: State) => state.conversation.conversations;
export const GetConversationisInitialized = (state: State) => state.conversation.isInitialized;