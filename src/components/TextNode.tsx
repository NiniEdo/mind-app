import { useCallback } from "react";

export function TextNode(props: any) {
    const onChange = useCallback((evt: { target: { value: any; }; }) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="h-[50px] border border-gray-200 p-[5px] rounded-[5px] bg-white">
            <label htmlFor="text" className="block text-gray-500 text-xs">Text:</label>
            <input id="text" name="text" onChange={onChange} className="nodrag" />
        </div>
    )
}
