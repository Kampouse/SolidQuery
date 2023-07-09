import { createSignal, For,Show } from "solid-js"
import { Title } from "solid-start"
type ButtonModalProps = {
    toggleButton: () => void
}
const ButtonModal = (param: ButtonModalProps) => {
    return (
        <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-800 text-black hover:scale-110 transition duration-200 "}
            onClick={param.toggleButton}>Toggle Modal</button>
    )
}






const MesssageWithAvatar = (props: { username:string ,  message: string, avatar: string,last:boolean }) => {
     console.log(props.last)
    return (
        <>
            <div class="flex flex-row  h-fit " >
                 <div class="mt-1"> 
                     
                <img class="w-[2rem] h-[2rem] border-2 hover:border-blue-600 border-gray-900   cursor-pointer  rounded-full" src="https://i.pravatar.cc/300" alt="user avatar" />
                <Show when={props.last}>
                    <div  class="w-0.5 h-full bg-blue-700 ml-[0.85rem] "></div>
                </Show>
                </div>
                 <div class="flex flex-col">  
                <p class="text-gray-300 justify-center hover:underline hover:decoration-blue-600  hover:cursor-pointer  ml-2 mt-2 w-fit">{props.username}</p>
            <p class="text-gray-400 ml-0 m-3 p-4 rounded-lg ml-4 text-sm bg-gray-800 border border-gray-600 hover:border-blue-600  w-96">{props.message} </p>
               </div>
                 
            </div>
             
        </>

    )
}

const ModalChat = (props: { open: () => boolean }) => {

    const [Text, SetText] = createSignal("")
    const [Messages, SetMessages] = createSignal<string[]>(["hello","hello" ])
    let inputRef :HTMLInputElement | undefined
    let ScrollRef :HTMLDivElement | undefined
    const submitForm = (e: Event) => {
        e.preventDefault()
        if (Text().trim().length > 0) {
            SetMessages([...Messages(), Text().trim()]);
            SetText("")
        }
        if (inputRef) {
            inputRef.value = ""
            ScrollRef?.scrollTo(0, ScrollRef.scrollHeight)
        }
    }
    return (
        <dialog class="fixed inset-x-1/4  inset-y-1/4 w-[35em] h-[25em] pb-[5em] bg-gray-900 border-2 rounded-lg border border-gray-800  transition duration-500 ml-2" open={props.open()}>
            <div class="flex flex-col  h-full snap-mandatory scroll-mx-2.5 snap-y overflow-y-scroll" ref={ScrollRef} >
                <For each={Messages()}>
                    {(message,index) => 
                    <MesssageWithAvatar  
                    username={"apollo"} 
                    message={message} 
                    last={index() !== Messages().length-1 } 
                    avatar="https://i.pravatar.cc/300" />
                    }
                </For>
                <form onSubmit={(e) => submitForm(e)} >
                    <div>  <input  ref={inputRef}  oninput={(e) => SetText(e.target.value)}  
                        type="text" 
                        class="fixed bg-gray-800 border   text-slate-300 bort bottom-[20.5%] left-[25%]  
                        ml-[4.8rem] w-[25em] h-10 px-3 ml-3  text-base text-gray-700  border-gray-600 placeholder-gray-600 border rounded-lg 
                        hover:cursor-pointer
                        hover:border-blue-600 hover:border-2 hover:border-opacity-100 hover:shadow-lg hover:ring-1 hover:ring-gray-600 hover:ring-opacity-50
                        focus:outline-none focus:border-blue-600 focus:ri"
                        placeholder="Your message" /></div>
                </form>
            </div>
        </dialog>
    )

}

export default function Modal() {
    const [isOpen, setIsOpen] = createSignal(true)
    return (
        <>
            <Title> Modal </Title>
            <dialog class="w-96 h-96 mt-10 bg-gray-900 border-2 rounded-lg border-gray-900  transition duration-500  " open={isOpen()}>
                <div class="flex flex-col items-center justify-center h-full" >


                    <ModalChat open={() => isOpen()} />
                </div>
            </dialog>
            <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />

        </>
    )
}
