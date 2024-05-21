"use client";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Card, TextField } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { function_data } from "../lib/data"

export default function FunctionList() {


let dataStrings = ["Show All"];
let data = function_data.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
data.map((item) => dataStrings.push(item.name));
const [value, setValue] = React.useState<string | null>("Show All");
const [inputValue, setInputValue] = React.useState('Show All');
return (
    <>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        className="mb-3 mt-6"
        options={dataStrings}
        sx={{ width: 300 }}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Function name" />}
        />
        {data &&
            data.map((item, i) => {
            if (value == null || value === "Show All" || (value !== null && value === item.name)){
                return <Accordion key={i} className="mb-1">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${i}a-content`}
                    id={`panel${1}a-header`}
                >
                    {item.name}(
                        
                        {item.parameters &&
                            item.parameters.map((parameter: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; }, i: any) => {
                                if(i > 0) return <span key={i}>,{parameter.name}</span>
                                else return <span key={i}>{parameter.name}</span>
                            })
                        }
                        )
                </AccordionSummary>
                <AccordionDetails>
                    <p className="mb-1 max-w-screen-md">{item.description}</p>
                    {item.parameters &&
                            item.parameters.map((parameter: any, i: React.Key | null | undefined) => (
                            <Card variant="outlined" key={i} className="px-3 py-2">
                                <ul>
                                    <li><span className="underline">name:</span> {parameter.name} </li>
                                    <li><p className="underline">description:</p> {parameter.description}</li>
                                    <li><span className="underline">optional:</span> {parameter.optional != undefined ? "FALSE" : parameter.optional ? "TRUE" : "FALSE"}</li>
                                    <li><span className="underline">type:</span> {parameter.type}</li>
                                </ul>
                            </Card>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>
            }
            })
        }
    </>
)
}