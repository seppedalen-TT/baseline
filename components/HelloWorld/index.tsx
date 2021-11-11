
import { Typography, Button, Grid, Stack } from "@mui/material"

const HelloWorld = () => (
    <Grid container>
        <Stack m={5} spacing={5}>
            <Typography color='primary.400'>
                Hello world
            </Typography>
            <Typography color='primary.500'>
                Hello world
            </Typography>
            <Typography color='primary.600'>
                Hello world
            </Typography>
            <Typography color='primary.700'>
                Hello world
            </Typography>
            <Typography color='primary.800'>
                Hello world
            </Typography>
        </Stack>
        <Stack m={5} spacing={5}>
            <Button color='primary' variant='contained'>
                Primary
            </Button>
            <Button color='secondary' variant='contained'>
                Secondary
            </Button>
            <Button color='error' variant='contained'>
                Error
            </Button>
            <Button color='warning' variant='contained'>
                Warning
            </Button>
            <Button color='success' variant='contained'>
                Success
            </Button>

        </Stack>
    </Grid>
)


export default HelloWorld