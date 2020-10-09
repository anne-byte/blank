import React from 'react';

class ApaYapa extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            result: []
        }
    }
componentDidMount(){
    let arr = [];
    let i;
    let res = [];
    for (i=1; i<=100; i++){
        arr.push(i);
    }
   
    for(i=0; i<100; i++){
        if(i % 3 ===0 && i%5 === 0){
            res.push("ApaYapa");
     }else if(i % 3 ===0){
            res.push("Apa");
        }else if(i % 5 ===0){
            res.push("Yapa");
        }
    }
    this.setState({
        result: res
    })
       
}
    render(){
        return (
            <div>
                <p> This is the ApaYapa App</p>
                <div>
                    {result.map(item => {
                        <p>{item}</p>
                    })}
                </div>
               
            </div>
        )
    }
}

export default ApaYapa;