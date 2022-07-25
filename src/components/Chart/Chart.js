import React from 'react';
import {Chart} from 'react-google-charts';
import styles from './Chart.module.css';

const Graph=(props)=> {	
            return( <Chart
                chartType="Line"
                width='95%'
                height='95%'
                loader={<div className={styles.Loader}>Loading Chart...</div>}
                data={props.dataarray}
                options={{
                 selectionMode: 'multiple',
                axes:{y:{0:{side:'right'}}},
                 legend:{position:'none'},
                 series:{
                   0:{color:'#ff3b40'}
                 
                 }
                }}
              />);
          
        }

  export default Graph;
