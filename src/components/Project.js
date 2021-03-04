import '../styles/About.css';
import React, {useState} from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import '../styles/Project.css'


function Project(){
    return (
        <div className='CardProject'>
        <Card className='Card'>
            <CardContent className='CardContent'>
                <Typography color="textSecondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                benevolent
                </Typography>
                <Typography  color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
    </Card>
    </div>
    )
}

export default Project