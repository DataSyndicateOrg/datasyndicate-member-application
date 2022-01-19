import React, { Component } from 'react'

export class TrackWallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.stateChange = this.stateChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    stateChange(event) {
        this.setState({
            value: event.target.value
        })
        
    }

    submit() {
        console.log(this.state.value)
        // this.setState({
        //     inputVal: 'asdasd'
        // })
        // const data = document.getElementById('wallet').innerHTML
        // console.log(inputVal)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Track a wallet: 
                    <input type="text" value={this.state.value} onChange={this.stateChange} /> 
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default TrackWallet
