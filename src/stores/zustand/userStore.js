import { create } from 'zustand'

const userStore = (set, get) => ({
    users: [],
    rows: 0,
    insert:(data) => {
        set((state) => {
            users:[...state.users,data]
        })
    },
    getUserById:(id) => {
        const user = get().users.filter(item => item.id === id)
        
    },
    update:(id,data) => {
        const users = get().users
        const query = users.map((item) => {
            if(item.id === id){
                return {
                    ...item,data
                }
            } else {
                return item
            }
        })
        set({
            users:query
        })
    },
    delete:(id) => {
        const user = get().users.filter(item => item.id!== id)
        set({
            users:user
        })
    }
})

const useUserStore = create(userStore)