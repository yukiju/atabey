import React from 'react';
import { Editor } from '@tinymce/tinymce-react';




export const TinyMCEComponent: React.FC = () => {

    const handleEditorChange = (content: any, editor: any) => {
        console.log('Content was updated:', content);
    }

    return (
        <React.Fragment>
            <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={handleEditorChange}
            />
        </React.Fragment>
    )
}

export default TinyMCEComponent
