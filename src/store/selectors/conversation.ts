import State from 'src/state';

export const getConversationIsLoading = (state: State) => state.conversation.isLoading;
export const getConversatios = (state: State) => state.conversation.conversations;