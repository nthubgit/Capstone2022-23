class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: 0
        };
    }

    componentDidMount() {
          const stringCount = localStorage.getItem('count');
          const count = parseInt(stringCount, 10)

          if (!isNaN(count)) {
            this.setState(() => ({count}));
          }
      }
      
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count)
        }
      }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick ={this.handleAddOne}>+1</button>
                <button onClick ={this.handleMinusOne}>-1</button>
                <button onClick ={this.handleReset}>Reset</button>
            </div>
        )
    }

    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        console.log(this.state.count);
    }
    handleMinusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
        console.log("handleMinusOne");
    }
    handleReset () {
        this.setState(() => {
            return {
                count: 0
            }
        })
        console.log("handleReset");
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count=0;
//     renderCounterApp();
// };


// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// }

// renderCounterApp();