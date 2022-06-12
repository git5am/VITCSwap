/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from "@emotion/react"
import { Box, Button, Divider, InputAdornment, TextField } from "@mui/material"
import { useState, useMemo } from "react"
import SlippageStore from "../stores/SlippageStore"

const DEFAULT_SLIPPAGES = [
    0.5,
    1,
    5
]

export default function Settings(props:{
    close:()=>void
}){
    const [slippage, setSlippage] = useState(() => {
        return SlippageStore.getSlippage().toFixed(1)
    })
    const [slippageDefault, setSlippageDefault] = useState(() => {
        return DEFAULT_SLIPPAGES.includes(Number(slippage))
    })
    const changed_fields:Set<"slippage"> = useMemo(() => new Set<"slippage">(), [])
    const slippageError = useMemo(() => {
        return !/^\d{1,3}(\.\d+)?$/.test(slippage) ||
        !SlippageStore.isValidSlippage(Number(slippage))
    }, [slippage])
    return <Box>
        <TextField
            label="Slippage"
            value={slippage}
            onChange={(ev)=>{
                setSlippage(ev.target.value)
                setSlippageDefault(false)
                changed_fields.add("slippage")
            }}
            sx={{
                width: "100%"
            }}
            inputProps={{
                style: {
                    textAlign: "right"
                }
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
            }}
            placeholder={DEFAULT_SLIPPAGES[0]+""}
            error={
                slippageError
            }
        />
        <div css={{
            display: "flex",
            marginTop: 10,
            gap: 10
        }}>
            {DEFAULT_SLIPPAGES.map(s => {
                return <Button
                    key={s}
                    variant={slippageDefault && s.toFixed(1) === slippage ? "contained" : "outlined"}
                    onClick={()=>{
                        setSlippage(s.toFixed(1))
                        setSlippageDefault(true)
                        changed_fields.add("slippage")
                    }}
                >
                    {s}%
                </Button>
            })}
        </div>
        <Divider css={{
            marginTop: 20,
            marginBottom: 20
        }} />
        <div css={{
            display: "flex",
            justifyContent: "right"
        }}>
            <Button variant="outlined" onClick={() => {
                for(const field of changed_fields){
                    switch(field){
                        case "slippage": {
                            SlippageStore.setSlippage(Number(slippage))
                            break
                        }
                    }
                }

                props.close()
            }} disabled={
                slippageError
            }>
                Save
            </Button>
        </div>
    </Box>
}