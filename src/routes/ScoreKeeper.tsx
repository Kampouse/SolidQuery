import { createSignal, createEffect } from "solid-js"
import { Title } from "solid-start";
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


    const Isserver = () => typeof window === "undefined"
    const [score, setScore] = createSignal(parseInt(Isserver() ? "" : localStorage.getItem("score") || ""))
    const [score2, setScore2] = createSignal<number | undefined>(undefined)
    const Decrease = () => setScore(score() - 1)
    const Increase = () => setScore(score() + 1)
    const Reset = () => setScore(0)
    const SetInStorage = () => localStorage.setItem("score", score().toString())
    createEffect(() => {
        SetInStorage();
        setScore2(score())
    })
    return (
        <div>
            <Title> Score Keeper </Title>
            <div class=" flex flex-col items-center justify-center h-full">
                <h1 class="text-4xl font-bold   transition duration-900"> Score Keeper {score2()}  </h1>
                <div class="flex gap-4 flex-row items-center justify-center w-full h-[38rem] border-2 rounded-lg border-gray-900">
                    <Button toggleButton={() => Increase()} title="Increase score" />
                    <Button toggleButton={() => Decrease()} title="Decrease score" />
                    <Button toggleButton={() => Reset()} title="Reset score" />
                </div>
            </div>
        </div>
    )
}
