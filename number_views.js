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
        return <h6>{"Total Number of Visits: "+ this.state.numViews}</h6>
    }
}

ReactDOM.render( 
    <NumberOfViews />,
    document.getElementById('numviews')
);


