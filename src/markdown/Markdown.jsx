import React, { useState } from 'react';
import { marked } from 'marked';
import { Container, Typography, Box, TextareaAutosize } from '@mui/material';

marked.setOptions({
    breaks: true, 
});

const markdownInitialText = `
# This is H1
## This is H2

**Bold text**

[Link to GitHub](https://github.com/JuanPabloSQ)

\`Inline code\`

\`\`\`
Code block
function helloWorld() {
    console.log('Hello, world!');
}
\`\`\`

> Blockquote

1. First item
2. Second item
3. Third item

![Image alt text](https://via.placeholder.com/150)

- Item 1
- Item 2
- Item 3
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
