export type PostType = {
    id: string,
    description: string,
    likesCount: number
}

export type PostsDataPropsType = {
    postsData: PostType[]
}

export type  MessageType = {
    message: string
    id: string
}

export type MessageDataPropsType = {
    messageData: MessageType[]
}

export type  DialogType = {
    id: string
    name: string
}

export type DialogsDataPropsType = {
    dialogsData: DialogType[]
}

export type RootStateType = {
    profilePage: PostsDataPropsType,
    dialogsPage: DialogsDataPropsType,
    messagePage: MessageDataPropsType
}
export let state: RootStateType = {

    profilePage:{
        postsData:[
            {
                id: "1",
                description: 'First post',
                likesCount: 10
            },
            {
                id: "2",
                description: 'Second post',
                likesCount: 12
            }
        ]
    },

    dialogsPage:{
        dialogsData:[
            {
                id: "1",
                name: "Katya"
            },
            {
                id: "2",
                name: "Lisa"
            }
        ]
    },

    messagePage:{
        messageData:[
            {
                id: "1",
                message: 'hello!'
            },
            {
                id: "2",
                message: 'how are you?'
            }
        ]
    },
}

// export const addPost = (postMessage:string) => {
//     let newPost: PostType = {
//         id:"3",
//         description: postMessage,
//         likesCount: 0
//     };
//     state.profilePage.postsData.push(newPost)
// }