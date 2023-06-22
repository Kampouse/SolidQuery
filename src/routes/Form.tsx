
import { Navbar } from "./index"
import { createStore } from "solid-js/store"
import { createSignal } from "solid-js"
type formy = {
    name: string,
    email: string,
    password: string,
}
export default function Form() {
    const [formState, setFormState] = createStore<formy>({
        "name": "",
        "email": "",
        "password": "",
    })
    const [error, setError] = createSignal<string | undefined>(undefined)
    const formUpdater = (key: "email" | "name" | "password", value: string) => {
        setFormState({ ...formState, [key]: "jp" })
    }


   const  verifForm = () => {
     let error;
        error  ||=  formState.email === "" ? "Email is required" : "" 
        error  ||= formState.name === "" ? "Name is required" : "" 
        error  ||= formState.password === "" ? "Password is required" : ""
        //verif email 
         // verif password
        //  verif name
        setError(error)
        return error  == "" ? true : false
    }
    const submit = (e:Event) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as formy 
         setError(undefined)
        setFormState(data);
        if(verifForm()){
            console.log(" Form  submitted")
        }
        else{
            console.log("Form  su submitted")
        }

    }


    return (
        <>
            <Navbar />
            <div class="flex flex flex-col items-center justify-center">

                <div class={"flex flex-col items-center justify-center \
                w-3/5 h-[38rem] border-1 rounded-lg bg-[#396789] border border-gray-900 "}>
                    <form
                        onSubmit={(e) => submit(e)} class="flex flex-col items-center gap-4 justify-center w-full h-full">
                        <input type="text" class="p-2 rounded bg-gray-900 text-white" placeholder="Name" name="name" />

                        <input type="text" class="p-2 rounded bg-gray-900 text-white" placeholder="email" name="email" />

                        <input type="text" class="p-2 rounded bg-gray-900 text-white" placeholder="Password" name="password" />

                        <input type="submit" class="p-2 rounded bg-gray-900 text-white cursor-pointer" />
                    </form>


                </div>

            </div>
        </>
    )
}
