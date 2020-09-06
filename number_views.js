class NumberOfViews extends React.Component {
    constructor(props){
        super(props);
        var timesViewed = 0;
        if(localStorage.timesViewed){
            timesViewed = localStorage.timesViewed;
        }
        timesViewed++;
        this.state = {numViews: timesViewed};
        localStorage.timesViewed = timesViewed;
    }
    
    render() {
        return <h1>Hello React World!</h1>
    }
}

ReactDOM.render( 
    <NumberOfViews />,
    document.getElementById('numviews')
);