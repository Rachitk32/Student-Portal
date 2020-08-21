import React from 'react';

class Cgpa extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            subject:"",
            grade:"",
            credits:1,
            arr:[],
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleChange(event){
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({[name]:value});
    }
    handleSubmit(event){
        event.preventDefault();
        var obj={
            subject:this.state.subject, 
            credits:this.state.credits,
            grade:this.state.grade,
        };
        var xarr=this.state.arr;
        xarr.push(obj);
        document.getElementById("enterSub").focus();
        this.setState({arr:xarr});
    }

    handleDelete(index,event)
    {   
        event.preventDefault();
        //console.log("index is :" + index);
        var xarr=this.state.arr;
        xarr.splice(index,1);
        this.setState({arr:xarr});
    }

    calGrade(tempArray)
    {   
        if(tempArray.length===0)
            return null;
        var credSum=0;
         var gradeSum=0;
        for(let obj of tempArray)
        {   
            var gradeValue=0;
            switch(obj.grade)
            {
                case "O": 
                case "o":gradeValue=10; console.log("reached here"); break;
                case "a+":
                case "A+": gradeValue=9; break;
                case "a":
                case "A": gradeValue=8; break;
                case "b+":
                case "B+": gradeValue=7; break;
                case "b":
                case "B": gradeValue=6; break;
                case "c":
                case "C": gradeValue=5; break;
                case "d":
                case "D": gradeValue=4; break;
                case "f":
                case "F": gradeValue=3; break;
                default: gradeValue=0; 
            }
            gradeSum+=gradeValue*obj.credits;
            credSum+=obj.credits;
        }
       
        return gradeSum/credSum;
    }
    render(){
        
        return(
            <div >
            <div className="container-fluid">
            {/* Form To Enter Subject Details */}
                <form className="mt-sm-1" onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-sm-3 m-1">
                            <input className="form-control" id="enterSub" type="text" placeholder="Enter Subject" name="subject" value={this.state.subject} onChange={this.handleChange} required autoFocus="on" ></input>
                        </div>
                        <div className="col-sm-3 m-1">
                            <input className="form-control" type="number" placeholder="Enter Credits" name="credits" value={this.state.credits} onChange={this.handleChange} required ></input>
                        </div>
                        <div className="col-sm-3 m-1">
                            <input  className="form-control" type="text" placeholder="Enter Grade" name="grade" maxLength="2" value={this.state.grade} onChange={this.handleChange} required></input>
                        </div>
                        <div className="col-sm-2 m-1">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
   
            {/* Container to display credits  */}
            <div className="container-fluid">
                        {/* {map fucntion here} */}
                        {this.state.arr.map((obj,index)=>(
                             <form className="mt-sm-1" key={obj.subject+obj.grade+obj.credits}  onSubmit={this.handleDelete.bind(this,index)}>
                                <div className="row" >
                                    <div className="col-sm-3 m-1"><input className='form-control' value={obj.subject} readOnly/></div>
                                    <div className="col-sm-3 m-1"><input className='form-control'value={obj.credits}readOnly/></div>
                                    <div className="col-sm-3 m-1"><input className='form-control'value={obj.grade}readOnly/></div>
                                    <div className="col-sm-2 m-1"><button type="submit" className="btn btn-danger">Delete</button></div>
                                </div>
                            </form>
                        ))}
                        <div className="row">
                            <div className="col-sm m-1">
                                <button className='btn btn-warning' style={{visibility: this.state.arr.length>0?"visible":"hidden" }}>
                                {this.calGrade(this.state.arr)}
                                </button>
                            </div>
                        </div>
            </div>
            
            </div>
        )
    }
}

export default Cgpa;
