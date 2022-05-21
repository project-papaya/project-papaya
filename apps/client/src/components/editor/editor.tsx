import * as monaco from 'monaco-editor';
import { useCallback } from 'react';

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {

    const ref = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            monaco.editor.create(node, {
                language: 'typescript'
            })
        }
    }, [])

    return (
        <div ref={ref} className='h-100' />
    );
}

export default Editor;
