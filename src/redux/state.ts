export type PostType = {
    id: string;
    description: string;
    likesCount: number;
};

export type PostsDataPropsType = {
    postsData: PostType[];
    addPost?: (postMessage: string) => void;
    newPostElement: string;
};

export type MessageType = {
    message: string;
    id: string;
};

export type MessageDataPropsType = {
    messageData: MessageType[];
};

export type DialogType = {
    id: string;
    name: string;
};

export type DialogsDataPropsType = {
    dialogsData: DialogType[];
};

export type RootStateType = {
    profilePage: PostsDataPropsType;
    dialogsPage: DialogsDataPropsType;
    messagePage: MessageDataPropsType;
};

export const addPostActionType = () => {
    return { type: "ADD-POST" } as const;
};

export const updateNewPostTextActionType = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const;
};

export type ActionType = ReturnType<typeof addPostActionType> | ReturnType<typeof updateNewPostTextActionType>;

export let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: "1", description: 'First post', likesCount: 10 },
                { id: "2", description: 'Second post', likesCount: 12 }
            ],
            newPostElement: ''
        },

        dialogsPage: {
            dialogsData: [
                { id: "1", name: "Katya" },
                { id: "2", name: "Lisa" }
            ]
        },

        messagePage: {
            messageData: [
                { id: "1", message: 'hello!' },
                { id: "2", message: 'how are you?' }
            ]
        }
    } as RootStateType,

    _rerenderEntireTree() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: "3",
                description: this._state.profilePage.newPostElement,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostElement = '';
            this._rerenderEntireTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostElement = action.newText;
            this._rerenderEntireTree();
        }
    }
};
