import { Editor } from "../../components/editor";

/* eslint-disable-next-line */
export interface EditProps {}

export function Edit(props: EditProps) {
    return (
        <div className="vh-100">
            <Editor />
        </div>
    );
}

export default Edit;
