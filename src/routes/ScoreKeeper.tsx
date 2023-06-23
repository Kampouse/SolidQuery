import { createSignal } from "solid-js"
import { BaseLayout } from "./index"
type ButtonProps = {
    toggleButton: () => void
    title: string
}
const Button = (props: ButtonProps) => {
    return (
        <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
            onClick={props.toggleButton}> {props.title} </button>
    )
}

export default function ScoreKeeper() {
    const [isOpen, setIsOpen] = createSignal(false)
    return (
        <BaseLayout>
            <div class=" flex flex-col items-center justify-center h-full">
                <h1 class="text-4xl font-bold   transition duration-500"> Score Keeper </h1>
                <div class="flex gap-4 flex-row items-center justify-center w-full h-[38rem] border-2 rounded-lg border-gray-900">
                    <Button toggleButton={() => setIsOpen(!isOpen())} title="Increase score" />
                    <Button toggleButton={() => setIsOpen(!isOpen())} title="Decrease score" />
                    <Button toggleButton={() => setIsOpen(!isOpen())} title="Reset score" />
                </div>
            </div>
        </BaseLayout>
    )
}
