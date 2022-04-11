import React, { Component } from 'react'
import { getDatafromServer } from '../services/fetch'


export default class Purchase extends Component {
    constructor(props){
super(props);
        this.state={
        data:[],
        error:'',
        sum:0,
        rahulPay:0,
        rameshPay:0
        }
    }
  fetchData=async()=>{
try{
    const data=await getDatafromServer();
    console.log(data);
    this.setState({data:data})
    this.setShares(); 
}
catch(error){
this.setState({error:'something is wrong'})
}
    }
    componentDidMount(){
        console.log(getDatafromServer());
        this.fetchData();
    }
    setShares=()=>{
        this.setState({
            sum:this.state.data.reduce((result,p)=>result+p.price,0)
        });
       let rahulPay=0;
       let rameshPay=0;
        this.state.data.map(payee=>(
            payee.payeeName==='Rahul'?rahulPay=rahulPay+payee.price:rameshPay=rameshPay+payee.price)
        );
        this.setState({
            rameshPay:rameshPay,
            rahulPay:rahulPay
        })
        
    }
  render() {
    return (
      <div>
         <>
                <div className="use-inline date header-color">Date</div>
                <div className="use-inline header-color">Product Purchased</div>
                <div className="use-inline price header-color">Price</div>
                <div className="use-inline header-color" style={{width: 112}}>Payee</div>
            </>

          {
          this.state.data.map(user=>(

              <div key={user.id}>
              <div className='use-inline date'>{user.setDate}</div>
              <div className='use-inline'>{user.product}</div>
              <div className='use-inline price'>{user.price}</div>
              <div className={`use-inline ${user.payeeName}`}>{user.payeeName}</div>

              
</div>
          ))

          }
          <hr/>
          <div>
              Total:{this.state.sum}</div>
              <div>
             RahulPaid:{this.state.rahulPay}</div>
             <div>
             RameshPaid:{this.state.rameshPay}</div>
             <div>
                 {this.state.rahulPay>this.state.rameshPay?'pay To Rahul':'Pay to Ramesh'}:{Math.abs(this.state.rameshPay-this.state.rahulPay)}
             </div>
             </div>
    )
  }
}
