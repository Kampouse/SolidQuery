
import { Navbar } from "./index"
import { createStore } from "solid-js/store"
import { createSignal,Show } from "solid-js"
type formy = {
    name: string,
    email: string,
    password: string,
    password_second : string,
}
export default function Form() {
    const [formState, setFormState] = createStore<formy>({
        "name": "",
        "email": "",
        "password": "",
        "password_second" :""
    })
    type Error =  {field:string , message:string   } 
    const [error, setError] = createSignal<Error[] | undefined>(undefined)
    const formUpdater = (key: "email" | "name" | "password", value: string) => {
        setFormState({ ...formState, [key]: "jp" })
    }


    const verifForm = () => {
        let error:Error[] = [];
         

    function isValidEmail(value:string) {
        const atLocation = value.lastIndexOf("@");
        const dotLocation = value.lastIndexOf("."); 
        return (
            atLocation > 0 &&
            dotLocation > atLocation + 1 &&
            dotLocation < value.length - 1
        );
    };
        const genError = (field:string , message:string):Error =>  { return {field , message} }
        let errorField:Error
        formState.email === "" && error.push(genError("email","missing email"  ))
        formState.name === "" &&   error.push(genError("name","missing name"))
        formState.password === "" && error.push(genError("password","missing password")) 
        formState.password.length < 8 && error.push(genError("password-lenght","password must be at least 8 characters long"))
        formState.password_second === formState.password || error.push(genError("password-second","passwords must match"))
        formState.email !== "" && !isValidEmail(formState.email) && error.push(genError("email","invalid email"))
                    
         
        
         
        setError(error)
        return error.length  == 0 ? true : false
    }
    const errorField = (field:string) => {
        if (error() !== undefined) {
            const errorField = error()!.filter((e) => e.field == field)
            return errorField
         }
    }
    const submit = (e: Event) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as formy
        setError(undefined)
        setFormState(data);
        if (verifForm()) {
            console.log(" Form  submitted")
        }
        else {
            console.log("Form  su submitted")
        }

    }


    return (
        <>
            <Navbar />
            <div class="flex flex flex-col items-center justify-center">
                <div class={"flex flex-col items-center justify-center \
h               w-3/5 h-[38rem] border-1 rounded-lg bg-[#396789] border border-gray-900 "}>
                    <form aria-label="register form"
                        onSubmit={(e) => submit(e)} name="form register"  class="flex flex-col items-center gap-4 justify-center w-full h-full text-center">
                        <label class=" flex flex-col  text-white" for="name" >Name
                        <input type="text" name="name"  aria-details="user name"  autofocus={true}  class="p-2 rounded bg-gray-900 text-white" placeholder="Name"  />
                         </label>
                        <label class="text-white flex flex-col" for="Email">Email
                        <input type="text" class="p-2 rounded bg-gray-900 text-white"  autofocus={true} placeholder="email" name="email" />
                        </label>
                        <label class="text-white flex flex-col" for="Password">Password
                        <input type="password" class="p-2 rounded bg-gray-900 text-white" autofocus={true}placeholder="Password" name="password" />
                         </label>
                        <label class="text-white flex flex-col" for="Confirm Password"> Confirm Password
                        <input type="password" class="p-2 rounded bg-gray-900 text-white"   autofocus={true} placeholder="Password-second" name="password-second">
                        </input>
                         </label>
                        <input type="submit"  autofocus={true}  class="p-2 rounded bg-gray-900 text-white cursor-pointer" />
                    </form>
                    <Show when={error() !== undefined}>
                    <h1> {errorField("email")?.map((e) => e.message)}</h1>
                    <h1> {errorField("name")?.map((e) => e.message)}</h1>
                    <h1> {errorField("password")?.map((e) => e.message)}</h1>
                    <h1> {errorField("password-second")?.map((e) => e.message)}</h1>
                </Show>
                </div>

            </div>
        </>
    )
}
