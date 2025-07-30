import { Box } from '@mui/system'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';



function CopyToClipboard(parameters: any) {
    
    const [showFormula, setFormula] = useState(false);
    const [showCopied, setCopied] = useState(false);
    
    let content = "=EVEONLINE." + parameters.parameters.name + '(';
    let variables = "";
    if(!parameters.parameters.parameters.length) return <></>
    variables = parameters.parameters.parameters.map((parameter: { optional: boolean, name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, i: any) => {
        return (parameter.optional ? '[' : '') + parameter.name + (parameter.optional ? ']' : '')
    })
    content += variables + ')';
    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(content);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1111)
        } catch (error) {
        console.error('Unable to copy to clipboard:', error);
        }
    };
    
    return (
        <>
            <Box className="mb-3 mt-3">
                <Button variant="outlined" color="secondary" size="small" onClick={() => setFormula(!showFormula)}><Typography textTransform={'none'}>{showFormula ? (<>Hide</>) : (<>Show</>)} formula</Typography></Button>
                <pre className='mt-1 mb-1'>
                {showFormula && (
                        <code>{content}</code>
                )}
                </pre>
            </Box>
            <Box className="mb-3 mt-3">
                <Button startIcon={<ContentCopyIcon />} variant="outlined" size="small" onClick={handleCopy} title="Copy dummy sample to clipboard" ><Typography textTransform={'none'}>Copy formula</Typography></Button> {showCopied && (<Check color="success"/>)}
            </Box>
        </>
    );
};

export default CopyToClipboard