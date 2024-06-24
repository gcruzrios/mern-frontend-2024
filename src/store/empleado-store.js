import { create } from "zustand";


//export const useProfileStore = create<ProfileState>()( (set, get)=> ({
export const useEmpleadoStore = create((set, get)=> ({

    buscarNombre: 'Greivin',
   
    changeNombre: (buscarNombre) => {
        console.log(get())
        set({ buscarNombre});
    },


}));