import React, { useState } from 'react'
import { useHistory } from 'react-router'
import * as articleRemote from '../../remote/addArticle'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Form } from 'react-bootstrap'
import {
    Box,
    Container,
    Paper,
    FormControl,
    //TextField,
    InputLabel,
    //Input,
    FormHelperText,
    OutlinedInput,
    //CssBaseline,
    InputAdornment,
    IconButton,
    //Icon,
    Button,
    makeStyles,
    Typography
} from '@material-ui/core'



const useStyles = makeStyles({
    textColor: {
        color: "#555",
    },
    editorContent: {
        height: "62vh",
        overflowY: "auto",
        color: "#555",
        border: "solid",
        borderWidth: "1px",
        borderColor: "#bbb",
        borderRadius: "4px",
    },
    editorContainer: {
        padding: 10,
    },
    saveButtonContainer: {
        textAlign: "right",
    },
    saveButton: {
        margin: 10,
    },
    font: {
        //fontSize: 25,
        //paddingLeft: 10
    },
    editorStyle: {
    },

})

const editorStyleMap = {
    //'HIGHLIGHT': {
    //    padding: 4,
    //    'backgroundColor': '#D3D3D3'
    //}
}



export const DraftEditor: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()

    // Input getters & setters
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onChange = (editorState: EditorState) => setEditorState(editorState);
    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        } else {
            return 'not-handled';
        }
    }



    // Sending post request
    const saveArticle = async () => {
        const contentState = editorState.getCurrentContent();
        const payload: any = {
            title: title,
            richtext: JSON.stringify(convertToRaw(contentState)),
            //content: JSON.stringify(convertToRaw(contentState)),
            //creationDate: new Date(),
            //status: false,
            //userID: +JSON.parse(JSON.stringify(localStorage.getItem('userId')))
        }
        await articleRemote.postArticle(payload);
        history.push("/tech");
        window.location.reload(false);
    }

    return (
        <React.Fragment>
            <Form>
                <Paper elevation={3}>
                    <section className={classes.editorContainer}>
                        <Box display="flex" className={classes.textColor}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="title">Title</InputLabel>
                                <OutlinedInput
                                    id="title"
                                    value={title}
                                    labelWidth={85}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>
                        </Box>
                    </section>
                    <section className={classes.editorContainer}>
                        {/** add to editor content style onFocus add style Mui-focused */}
                        <Box justifyContent="center" display="flex" flexDirection="column" className={classes.editorContent} >
                            <Editor
                                customStyleMap={editorStyleMap}
                                editorState={editorState}
                                handleKeyCommand={handleKeyCommand}
                                onChange={onChange}
                            />
                        </Box>
                    </section>
                    <section className={classes.saveButtonContainer}>
                        <Button
                            className={classes.saveButton}
                            variant="contained"
                            color="primary"
                            onClick={() => saveArticle()}
                        >Save Article</Button>
                    </section>
                </Paper>
            </Form>
        </React.Fragment>
    )
}

export default DraftEditor
