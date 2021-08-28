import { Component } from "react";

type ClockState = {
    time: Date
}
type AcceptedProps = {
    testProp: string,
    optionalProp?: string
}
export class Clock extends Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000)
    }

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                {/* <p>{this.props.testProp}</p> */}
                {/* <p>{this.props.optionalProp}</p> */}
            </div>
        )
    }
}