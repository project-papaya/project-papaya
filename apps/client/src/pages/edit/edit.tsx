import { useRef } from "react";
import { Editor } from "../../components/editor";

/* eslint-disable-next-line */
export interface EditProps {}

export function Edit(props: EditProps) {

    const codeRef = useRef("");

    return (
        <div className="vh-100">
            <Editor onEdit={code => {
                codeRef.current = code;
            }} />
        </div>
    );
}

export default Edit;
