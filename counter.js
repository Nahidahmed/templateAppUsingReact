class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }

    incrementCount(){
        this.setState({count:this.state.count+ 1});
    }

    render(){
        return( 
            <div> 
              Count : {this.state.count}
              <br/>
                <button type="button" onClick ={this.incrementCount.bind(this)}>
                     Increment
                </button>
            </div>
        );
    }
}

ReactDOM.render( 
    <Counter />,
    document.getElementById('counter')
);