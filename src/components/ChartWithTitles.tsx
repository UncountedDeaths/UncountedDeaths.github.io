
import React from 'react'
interface props {
    chart: React.ReactNode
    label?: string
    height?: string
    width?: string
}

export const ChartWithTitle = (props: props) => {

    const divStyle = {
        fontSize: 20,
        marginBottom: -20,
        marginLeft: "5%",
        marginRight: "5%"
    };


    return (
        <div>
            <div className="container" style={divStyle}>
                <h3>{props.label}</h3>
            </div>
            <div style={{ height: props.height, width: props.width}}>
                {props.chart}
            </div>
        </div>
    )

}

ChartWithTitle.defaultProps = {
    height: "50vh",
    width: "100vw"
} as Partial<props>;
