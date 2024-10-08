import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CurvyLinesLayout from '../ui/CurvyLinesLayout';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function Overview() {
    return (
        <CurvyLinesLayout>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="/productValues1.svg"
                            alt="suitcase"
                            sx={{ height: 55 }}
                        />
                        <Typography variant="h6" sx={{ my: 5 }}>
                            The best luxury hotels
                        </Typography>
                        <Typography variant="h5">
                            {
                                'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                            }
                            {
                                ', go for a mini-vacation just a few subway stops away from your home.'
                            }
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="/productValues2.svg"
                            alt="graph"
                            sx={{ height: 55 }}
                        />
                        <Typography variant="h6" sx={{ my: 5 }}>
                            New experiences
                        </Typography>
                        <Typography variant="h5">
                            {
                                'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                            }
                            {'your Sundays will not be alike.'}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="/productValues3.svg"
                            alt="clock"
                            sx={{ height: 55 }}
                        />
                        <Typography variant="h6" sx={{ my: 5 }}>
                            Exclusive rates
                        </Typography>
                        <Typography variant="h5">
                            {'By registering, you will access specially negotiated rates '}
                            {'that you will not find anywhere else.'}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </CurvyLinesLayout>
    );
}

export default Overview;