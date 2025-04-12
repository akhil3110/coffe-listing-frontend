import { create } from "zustand";


interface dataType {
    available: boolean
    id: number
    image: string
    name: string
    popular: boolean
    price: string
    rating: string | null
    votes: number
}


interface dataStore {
    data: dataType[]
    setData: (data: dataType[]) => void
}

const useDataStore = create<dataStore>((set) => ({
    data: [],
    setData: (data) => set({data})
}))

export default useDataStore;