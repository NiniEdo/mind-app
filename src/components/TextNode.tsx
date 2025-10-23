import { useCallback, useRef, useState, useEffect } from "react";

export function TextNode() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState("");
    const [size, setSize] = useState({ width: 100, height: 40 });

    const onChange = useCallback((evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = evt.target.value;
        setText(value);
    }, []);

    useEffect(() => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.width = "auto";
            el.style.height = `${el.scrollHeight}px`;
            el.style.width = `${el.scrollWidth}px`;
            setSize({ width: el.scrollWidth + 10, height: el.scrollHeight + 10 });
        }
    }, [text]);

    return (
        <div className="border border-red-200 p-[5px] rounded-[10px] bg-white shadow-md"
            style={{
                width: size.width,
                height: size.height,
                minWidth: 80,
                minHeight: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <textarea
                ref={textareaRef}
                value={text}
                onChange={onChange}
                className="nodrag resize-none overflow-hidden w-full h-full text-center text-sm text-gray-700 bg-transparent outline-none"
                placeholder="Type..."
            />
        </div>
    )
}
