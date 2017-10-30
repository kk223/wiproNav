import React from 'react';
import {StaggeredMotion,spring} from 'react-motion';
import styled from 'styled-components';
import Paper from 'material-ui/paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
const colors=[
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FF9800',
  '#FB8C00',
];
const Wrapper= styled.div`
      display:flex;
      width:100vw;
      min-height:100vh;
 `;
const Box = styled.div`
    flex-basis:${(props)=>props.width}%;
    background:${(props)=>props.bgColor};
    border-right:1px solid #fff;
      `;
const contentWrapper= styled.div`
    flex-basis: 100%;
    background:${(props)=>props.bgColor};
    width : 0%;
    `;
 class Entrance extends React.Component{
    render(){
       var Style = {
            minWidth: '200px',
            width: '100%',
            textAlign: 'left',
            padding: '10px',
            backgroundColor: '#FB8C00',
            display: 'inline-block',
            color: 'white',
            paddingTop: '10%'
        };

      return(
        <MuiThemeProvider>
        <StaggeredMotion defaultStyles={[
          {width:100},
          {width:100},
          {width:100},
          {width:100},
          ]}
          styles={(prevStyles)=>[
            {width: spring(0)},
            {width: spring(prevStyles[0].width)},
            {width: spring(prevStyles[1].width)},
            {width: spring(prevStyles[2].width)},
            ]}
          >
          {(styles)=>(
          <Wrapper>
            <Box  bgColor={colors[0]} width={styles[0].width}/>
            <Box  bgColor={colors[1]} width={styles[1].width}/>
            <Box  bgColor={colors[2]} width={styles[2].width}/>
            <Box  bgColor={colors[3]} width={styles[3].width}/>
            <Paper style={Style} zDepth={2}>
            <a href='/auth/google'>click to login</a>
            </Paper>
          </Wrapper>
        )}
        </StaggeredMotion>
        </MuiThemeProvider>
      );
    }
  }
  export default Entrance;
