import React from 'react';

import {ResponsivePie} from '@nivo/pie';

import {Grid} from '@material-ui/core'

const data = [
    {
      "id": "stylus",
      "label": "stylus",
      "value": 7,
      "color": "hsl(71, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 144,
      "color": "hsl(113, 70%, 50%)"
    },
    {
      "id": "go",
      "label": "go",
      "value": 506,
      "color": "hsl(166, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 420,
      "color": "hsl(137, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 251,
      "color": "hsl(195, 70%, 50%)"
    }
  ]



const TestNivo = props => {

    return (
        <div style={{"position":"fixed","width":"100%","height":"100%"}}>

        <Grid container >
            <Grid item xs={12} md={4}>

            </Grid>
            <Grid item xs={12} md={4} style={{"height":"400px"}}>
            <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
            </Grid>
            <Grid item xs={12} md={4}>

            </Grid>
        </Grid>

           


        </div>
    )


}

export default TestNivo ;