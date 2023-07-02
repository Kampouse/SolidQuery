import { For, createSignal, useContext } from "solid-js";
import Colors from "../components/Colors";
import { BaseLayout } from "./index"
import { Title } from "solid-start";
import { BlockContext, BlockProvider } from "~/components/Providers/Provider";
export default function PizelArt() {
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500"];
    return (
        <BaseLayout>
            <BlockProvider>
                <Title> Pizel Art</Title>
                <div class="bg- bg flex flex-row gap-2 mb-2 justify-center">
                    <For each={colors}>
                        {(field) => (
                            <BlockSelector color={field} />

                        )}
                    </For>

                    <CurrrentColor />
                </div>
                <div class=
                 "flex flex-row flex-wrap w-full justify-center gap-4">
                    <For each={new Array(100)}>
                        {(content, index) => (
                            <Block index={index()} />
                        )}
                    </For>
                </div>
            </BlockProvider>
        </BaseLayout>)
}
const Block = (props: { index: number }) => {
    const [Block, SetBlock] = useContext(BlockContext);
    const current = () => {
        return Block().blocks.at(props.index)
    }
    const SetCurrent = () => {
        SetBlock({
            blocks: Block().blocks.map((item, i) => {
                if (i === props.index) {
                    //change this
                    return Block().current_color
                }
                return item
            }),
            current_color: Block().current_color
        })
    }
    return <div onClick={() => SetCurrent()}
        class={"w-10 h-10 " + current()}>
    </div>
}

const BlockSelector = (props: { color: string }) => {
    const [Block, SetBlock] = useContext(BlockContext);
    const SetCurrent = (current: string) => {
        console.log(Block().current_color)
        SetBlock({
            blocks: Block().blocks,
            current_color: current
        })
    }
    return <div onClick={() => SetCurrent(props.color)}
        class={"w-10 h-10 " + props.color}>
    </div>
}

const CurrrentColor = () => {
    const [Block] = useContext(BlockContext);
    return <div
        class={"w-10 h-10 " + Block().current_color}>
    </div>
}
