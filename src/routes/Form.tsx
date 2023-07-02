import { BaseLayout } from "./index"
import { createStore } from "solid-js/store"
import { createSignal, Show, createRenderEffect, For } from "solid-js"
import {Title  } from 'solid-start'
import { trpc}  from "../server/trpc_client"

type formy = {
    name: string,
    email: string,
    password: string,
    password_second: string,
}
type Fields = "email" | "name" | "password" | "password-lenght" | "password-second" | string
type Error = { field: string, message: string }
const InputField = (props: { field: Fields, field_arias: string, validity: boolean, type?: string }) => {
     

    const [valid, setValid] = createSignal<string>("")
    createRenderEffect(() => {
        setValid(props.validity ? "" : "border border-red-500")
    })
    return (
        <>
          <Title> Form </Title>
        <label class=" flex flex-col  text-white" for={props.field_arias}>{props.field}
            <input type={props.type ||= "text"} name={props.field_arias}
                aria-details={props.field_arias}
                autofocus={true}
                class={"p-2 rounded bg-gray-900 text-white" + " " + valid()}
                placeholder={props.field} />
        </label>
         </>
    )
}

export default function Form() {
     trpc.secret.query().catch((e) => console.log(e))
    
    const [formState, setFormState] = createStore<formy>({
        "name": "",
        "email": "",
        "password": "",
        "password_second": ""
    })
    const [error, setError] = createSignal<Error[]>([])

    const verifForm = () => {
        let error: Error[] = [];


        function isValidEmail(value: string) {
            const atLocation = value.lastIndexOf("@");
            const dotLocation = value.lastIndexOf(".");
            return (
                atLocation > 0 &&
                dotLocation > atLocation + 1 &&
                dotLocation < value.length - 1
            );
        };
        const genError = (field: string, message: string): Error => { return { field, message } }
        let errorField: Error
        formState.email === "" && error.push(genError("email", "missing email"))
        formState.name === "" && error.push(genError("name", "missing name"))
        formState.password === "" && error.push(genError("password", "missing password"))
        formState.password.length < 8 && error.push(genError("password-lenght", "password must be at least 8 characters long"))
        formState.password_second === formState.password || error.push(genError("password-second", "passwords must match"));
        !isValidEmail(formState.email) && error.push(genError("email", "invalid email"))
        setError(error)
        return error.length == 0 ? true : false
    }

    const errorField = (field: Fields) => {
        if (error() !== undefined) {
            const errorField = error()!.filter((e) => e.field == field)

            return errorField
        }
        return []
    }
    const submit = (e: Event) => {

        e.preventDefault()
        const  output = GET()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries()) as formy
        setError([])
        setFormState(data);
        verifForm();

    }

    const validity = (field: Fields) => errorField(field).length === 0 ? true : false
    const fields = ["name", "email", "password", "password-second"] as const
    return (
        <BaseLayout>
            <div class="flex flex flex-col items-center justify-center">
                <div class={"flex flex-col items-center justify-center w-3/5 h-[38rem] border-1 rounded-lg bg-[#396789] border border-gray-900 "}>
                    <form aria-label="register form"
                        onSubmit={(e) => submit(e)} name="form register" class="flex flex-col items-center gap-4 justify-center w-full h-full text-center">
                        <InputField field="name" field_arias="name" validity={validity("name")} />
                        <InputField field="email" field_arias="email" validity={validity("email")} />
                        <InputField field="password" field_arias="password" type="password" validity={validity("password")} />
                        <InputField field="password-second" field_arias="password_second" type="password" validity={validity("password-second")} />
                        <input type="submit" autofocus={true} class="p-2 rounded bg-gray-900 text-white cursor-pointer" />
                    </form>

                    <Show when={error().length > 0}>
                        <For each={fields}>
                            {(field) => (
                                <h1> {errorField(field)?.map((e) => e.message)}</h1>)
                            }
                        </For>
                    </Show>
                    <Show when={error().length === 0}>
                        <h1> success </h1>
                    </Show>
                </div>

            </div>
        </BaseLayout>

    )
}
