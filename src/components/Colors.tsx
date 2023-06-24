 
export default function Colors(props : {  color: string , onClick?: () => void     }) {
     const size = "   w-96 h-32 min-w-min-96";
    const text = " text-center white";
    const display = " flex flex-col justify-center "
    const color =  props.color ;

    const trim = (str: string) =>  {
        return str.slice(3, str.length - 4);
    } 
    return (
        <div class={ color +  size + text + display + "border bordr-black" } >
              
            <h1>  { trim(props.color)} </h1>

        </div>
    );
}
