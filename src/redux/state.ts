type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: PostsType[]
}

type DialogsPageType = {
    dialogs: DialogsType[]
    message: MessagesType[]
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state = {
    profilePage: {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Oleg'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Aloha'}
        ]
    }
}