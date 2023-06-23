import { createSignal } from "solid-js"

import  { BaseLayout } from "./index"
type ButtonModalProps = {
    toggleButton: () => void
}
const ButtonModal = (param: ButtonModalProps) => {
    return (
        <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
            onClick={param.toggleButton}>Toggle Modal</button>
    )
}

export default function Modal() {
    const [isOpen, setIsOpen] = createSignal(false)
    return (
        <BaseLayout>
            <dialog class="w-96 h-96 mt-10 bg-[#359fad] border-2 rounded-lg border-gray-900  transition duration-500  " open={isOpen()}>
                <div class="flex flex-col items-center justify-center h-full" >


                    <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
                </div>
            </dialog>
            <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
        </BaseLayout>
    )
}
