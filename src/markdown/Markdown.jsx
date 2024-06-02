import React, { useState } from 'react';
import { marked } from 'marked';
import { Container, Typography, Box, TextareaAutosize } from '@mui/material';

const markdownInitialText = `
# This is H1
## This is H2
### This is H3
#### This is H4 and so

**Strong text** or *italicized text* your choice

> Wow a blockquote - it is just check the markup

do you like the organised way
1. First add this
2. Then this
3. This is the last one

or non orgranised way
- I don't
- like
- numbers

<br />

\`console.log('Finally I can write Hello World!');\`

<br />
Or use tags here, who cares
<br /><br />

but but but always a but
we will write a function to print hello world

\`\`\`

function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHelloTo);
}

\`\`\`
`;

const Markdown = () => {
    const [inputText, setInputText] = useState(markdownInitialText);
    const [markup, setMarkup] = useState(marked(markdownInitialText));

    const handleChange = (e) => {
        setInputText(e.target.value);
        setMarkup(marked(e.target.value));
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Markdown Previewer
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextareaAutosize
                    id="editor"
                    minRows={20}
                    style={{ flex: 1, padding: 10, backgroundColor: '#224', color: 'white', borderRadius: 4 }}
                    onInput={handleChange}
                    value={inputText}
                />
                <Box
                    id="preview"
                    sx={{ flex: 1, padding: 10, backgroundColor: '#223', color: 'white', borderRadius: 4 }}
                    dangerouslySetInnerHTML={{ __html: markup }}
                />
            </Box>
        </Container>
    );
};

export default Markdown;
