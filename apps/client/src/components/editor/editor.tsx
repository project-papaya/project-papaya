import * as monaco from 'monaco-editor';
import { useCallback } from 'react';

/* eslint-disable-next-line */
export interface EditorProps {
    onEdit?: (code: string) => void
}

export function Editor(props: EditorProps) {

    const ref = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            const editor = monaco.editor.create(node, {
                language: 'typescript'
            })

            editor.onDidChangeModelContent(e => {
            if (props.onEdit) {
                    props.onEdit(editor.getValue());
                }
            })            
        }
    }, [props])

    return (
        <div ref={ref} className='h-100' />
    );
}

export default Editor;
