import { createSignal, createResource, Suspense, Show, ErrorBoundary } from "solid-js"
import { Title } from "solid-start"
import { BaseLayout } from "./index"




const SadDog =(props:{handler:()=> void }) => {
    return (<div class="flex flex-col items-center justify-center"> 
         <img class="bg-gray-800 w-96 h-96 mt-10 rounded-lg transition duration-500" />
        <button class="px-4 py-2 mt-4 text-white rounded  hover:scale-110 transition duration-200 bg-gray-900" onClick={() => props.handler()}>
            error as happen retry? 
        </button>
    </div>)
        
}

const ImageFrame = (props: { content: { message: string, status: string } }) => {
    return (
        <div>
            <Suspense fallback={<img class="w-96 h-96 mt-10 rounded-lg" src={props.content?.message} />}  >
                <img class="bg-gray-800 w-96 h-96 mt-10 rounded-lg transition duration-500" src={props?.content?.message} />

            </Suspense>
        </div>
    )
}
export default function DogFrame() {
    const Fetcher = async (url: string) => {
        return await fetch(url).then((res) => res.json().catch(_ => { return { message: "", status: "" } }));
    }
    const [data, { refetch }] = createResource("https://dog.ceo/api/breeds/image/random", Fetcher);
    const [old, setOld] = createSignal<{ message: string, status: string }>({ message: "", status: "" })
    const clickHandler = () => {
        setOld(data())
        refetch()
    }
    return (
        <div>
            <Title> Dog Frame </Title>
            <div class="flex flex-col items-center justify-center h-full" >
                <ErrorBoundary fallback={<SadDog handler={clickHandler} />}>
                 
                <Suspense fallback={<ImageFrame content={old()} />}>
                    <ImageFrame content={data()} />
                </Suspense>
                <button class="px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "
                    onClick={clickHandler}
                    disabled={data.state !== "ready"}
                >Refetch</button>
                <Show when={old().message == "" || data.state === "ready"}
                    fallback={<h1 class=" text-4xl font-bold   transition  duration-800"> waiting... </h1>}>
                </Show>
                  </ErrorBoundary>
            </div>
        </div>
    )
}
