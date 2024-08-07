import React, { Component } from 'react';
import '../style.css';
import { getInfo } from '../Services/getInfo';
import { InfinitySpin, Hourglass, ProgressBar, ThreeDots } from 'react-loader-spinner';
import Info from './Info';

export default class Ipinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            loaderType: 'ThreeDots' // Initialize with a default loader type
        };
    }

    // Send requests with this method:
    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                data: data,
                isLoading: false,
            });
        });

        // Simulating a method to change loader type after 2 seconds for demo purposes
        setTimeout(() => {
            this.changeLoaderType('ThreeDots');
        }, 1500);
    }

    // Method to change loader type
    changeLoaderType = (type) => {
        this.setState({ loaderType: type });
    }

    renderLoader() {
        const { loaderType } = this.state;

        switch(loaderType) {
            case 'Hourglass':
                return <Hourglass visible={true} height="80" width="80" ariaLabel="hourglass-loading" colors={['#306cce', '#72a1ed']} />;
            case 'InfinitySpin':
                return <InfinitySpin visible={true} width="200" color="#4fa94d" ariaLabel="infinity-spin-loading" />;
            case 'ProgressBar':
                return <ProgressBar visible={true} height="80" width="80" color="#4fa94d" ariaLabel="progress-bar-loading" />;
            case 'ThreeDots':
            default:
                return <ThreeDots visible={true} height="80" width="80" color="#4fa94d" radius="9" ariaLabel="three-dots-loading" />;
        }
    }

    render() {
        const { isLoading, data } = this.state;

        return (
            <>
                {isLoading ? this.renderLoader() : <Info data={data} />}
            </>
        );
    }
}
