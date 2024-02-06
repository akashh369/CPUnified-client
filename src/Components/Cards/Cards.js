import React from 'react'
import {Card, CardContent,Typography,CardActions,Button, Box} from '@mui/material'


const Cards = (props) => {
    const {codingPlatform="codechef",contestName="starters",startTime="00:00:00",endTime="00:00:00",live=false}=props
  return (
    <Card sx={{minWidth : 275,width:285}}>       
        <CardContent>
            <Box sx={{display : 'flex',justifyContent : 'space-between'}}>
            <Typography sx={{fontSize: 14,position:'relative',bottom : 10,right :10}} color="text.secondary" >
                {(codingPlatform).toUpperCase()}
            </Typography>
            <Typography sx={{fontSize: 14,position:'relative',bottom : 10,color : '#66ff33'}} color="text.secondary" >
                {live? "LIVE" : ""}
            </Typography>
            </Box>
            
            <Typography sx={{fontSize: 24 ,textAlign : 'center'}} color="var(--primary-color)" gutterBottom>
                {contestName}
            </Typography>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                starttime:{startTime.slice(0,10) + "," + startTime.slice(11,16)}
            </Typography>
            <Typography sx={{fontSize: 14}} color="text.secondary" >
                endtime:{endTime.slice(0,10) + "," + endTime.slice(11,16)}
            </Typography>
        </CardContent>
             <CardActions sx={{alignContent : 'center'}}>        {/*change this to center */}
            <Button variant='contained' size="medium" onClick={()=>{
            }}>Register</Button>
        </CardActions>
    </Card>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       be{bull}nev{bull}o{bull}lent
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  )
}

export default Cards