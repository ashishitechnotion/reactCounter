
class App extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header1 extends Component {
   render() {
        var style={color:"#FFA500"}
      return (
         <div>
            <h1 style={style}>Header js</h1>
         </div>
      );
   }
}

class Content extends Component {
   render() {
        var style={color:"#008000"}
      return (
         <div>
            <h2>Content</h2>
            <p style={style}>The content text!!!</p>
         </div>
      );
   }
}



class App2 extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
	
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends Component
{
    render()
    {
        return(
            <div>
            <h1>Header</h1>
            </div>
         );
    }
}
class TableRow extends Component
{
    render()
    {
        return( 
        <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
        </tr>
        );
    }
}

class Appdefault extends Component
{
    
    render()
    {
        return(
            <div>
        <h1>Header:{this.props.headerprops}</h1>
        <h1>Context:{this.props.contentprops}</h1>
        </div>
        );
        
        
        
    }
}
App.defaultProps ={
    headerprops:"header 1 default", 
    contentprops:"contect 2 default" 
}


class App22 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={data:''}
       this.updateStatus=this.updateStatus.bind(this);
        
    }
updateStatus(e)
{
    this.setState({data:e.target.value})
}
  
   render()
   {

       return(
           <div>
               <Content22 mydataprop={this.state.data} updateStatusProp={this.updateStatus}>
                </Content22>
           </div>
       );
   }
}

class Content22 extends Component
{
 render()
 {
     return(
         <div>
             <input type='text' value={this.props.mydataprop} onChange={this.props.updateStatusProp} />
             <h3>{this.props.mydataprop}</h3>
         </div>
     );
 }
}
